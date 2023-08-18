const Sequelize = require('sequelize');
const sequelize = require('../config'); // Import the sequelize instance

// Define a model for SMTP Account
const SMTPAccount = sequelize.define('smtp_account', {
    fromName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fromEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    smtpHost: {
        type: Sequelize.STRING,
        allowNull: false
    },
    smtpPort: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    smtpSecure: {
        type: Sequelize.STRING,
        allowNull: false
    },
    messagesPerDay: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minimumTimeGap: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    maximumTimeGap: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    replyToEmail: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Create Table if not exists
SMTPAccount.sync({ alter: true }).then(() => {
    console.log("User Model synced");
});

// Export the model
module.exports = SMTPAccount;