const nodemailer = require('nodemailer');
const SMTPAccount = require('../db/models/SMTPAccount');

// Define a function for sending emails
exports.sendEmail = async (toEmail, subject, message) => {

    // User ID
    // Since we are not using authentication, we will use a default user id, you can use any user id you want
    const userId = 1;

    // Get SMTP Details by id = 1
    const smtpAccount = await SMTPAccount.findOne({ where: { id: 1 } });

    // If no SMTP Details found, return error
    if (!smtpAccount) {
        return { error: 'Please add an SMTP Account first' };
    }

    // Create a transporter to sund emails
    const transporter = nodemailer.createTransport({
        host: smtpAccount.smtpHost,
        port: smtpAccount.smtpPort,
        secure: smtpAccount.smtpSecure,
        auth: {
            user: smtpAccount.username,
            pass: smtpAccount.password
        }
    });

    // Define email options
    const mailOptions = {
        from: `"${smtpAccount.fromName}" <${smtpAccount.fromEmail}>`,
        to: toEmail,
        subject: subject,
        html: message
    };

    // Try to send email
    try {
        await transporter.sendMail(mailOptions);
        return { message: 'Email sent successfully' };
    }
    catch (error) {
        return { error: error.message };
    }

};
