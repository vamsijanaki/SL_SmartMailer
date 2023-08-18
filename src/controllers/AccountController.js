const SMTPAccount = require('../db/models/SMTPAccount');
const validation = require('../utils/validation');

// Define a function for setting up SMTP Details
exports.addAccount = async (req, res) => {

    // Define required fields
    const fields = [
        'fromName',
        'fromEmail',
        'username',
        'password',
        'smtpHost',
        'smtpPort',
        'smtpSecure',
        'messagesPerDay',
        'minimumTimeGap',
        'maximumTimeGap',
        'replyToEmail'
    ];

    // If any of the extra fields came in the request body, remove them and send a response with error
    // The reason for this is that, if any extra fields came in the request body, it is a suspected threat
    if (Object.keys(req.body).length > fields.length) {
        // Define extra fields
        let extraFields = [];
        // Loop through request body
        for (let field in req.body) {
            // Check if field is not in fields
            if (!fields.includes(field)) {
                // Add field to extra fields
                extraFields.push(field);
                // Delete field from request body
                delete req.body[field];
            }
        }
        // Send response with error
        return res.status(400).json({ error: `Extra fields found, Suspected Threat: ${extraFields.join(', ')}` });
    }

    // Sorry if i am being too paranoid, but i am just trying to be safe - vamsi
    // I want everything to be very strict and secure

    // Try to validate fields
    // However validations can be done in the frontend as well but it is always a good practice to validate in the backend as well
    try {
        await validation.validateFields(req.body, fields);
    } catch (error) {
        return res.status(400).json(error);
    }

    // Try to validate email
    if (!validation.isEmail(req.body.fromEmail)) {
        return res.status(400).json({ fromEmail: 'Please enter a valid email address' });
    }

    // Insert into database
    try {
        // Retrieve the values from req.body based on the fields
        const accountData = {};
        fields.forEach(field => {
            accountData[field] = req.body[field];
        });

        const newAccount = await SMTPAccount.create(accountData);

        return res.status(201).json({ message: 'Account added successfully', account: newAccount });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Please Check your Details' });
    }

};

