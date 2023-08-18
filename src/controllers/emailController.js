const SMTPAccount = require('../db/models/SMTPAccount');
const validation = require('../utils/validation');
const mailer = require('../helpers/mailer');

// Define a function for sending emails
exports.sendEmail = async (req, res) => {

    // Define required fields
    const fields = [
        'toEmail',
        'subject',
        'message'
    ];

    try {
        await validation.validateFields(req.body, fields);
    } catch (error) {
        return res.status(400).json(error);
    }

    // Try to validate email
    if (!validation.isEmail(req.body.toEmail)) {
        return res.status(400).json({ toEmail: 'Please enter a valid email address' });
    }

    // Send email
    const result = await mailer.sendEmail(req.body.toEmail, req.body.subject, req.body.message);

    // If there is an error, return error
    if (result.error) {
        return res.status(500).json(result);
    }

    // If success, return success
    return res.json(result);

};