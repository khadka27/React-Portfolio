// server.js

const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // or your preferred port

app.use(bodyParser.json());

// Configure OAuth2 credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback'; // adjust for production
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN'; // Obtain this from the OAuth flow

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'abishekkhadka90@gmail.com', // Replace with your Gmail email address
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: oAuth2Client.getAccessToken(),
    },
});

// POST endpoint to send email
app.post('/send-email', async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        // Message configuration
        const mailOptions = {
            from: 'Abishek Khadka < abishekkhadka90@gmail.com>', // Replace with your name and Gmail email address
            to: email,
            subject: 'Contact Form Submission',
            text: `Hello ${fullName},\n\nThank you for reaching out. Your message:\n\n${message}\n\nBest Regards,\nYour Name`,
        };

        // Send mail using transporter
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result);

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
