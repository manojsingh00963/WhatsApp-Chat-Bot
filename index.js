// index.js

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const messageHandler = require('./messageHandler'); // Importing the message handler

// Initialize the WhatsApp client
const whatsapp = new Client({
    authStrategy: new LocalAuth()
});

// Generate QR code for authentication
whatsapp.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Listen for incoming messages
whatsapp.on('message', async (message) => {
    console.log(`Received message: ${message.body}`); // Log the received message
    await messageHandler(message); // Pass the message to the message handler
});

// Listen for when the client is ready
whatsapp.on('ready', () => {
    console.log('Client is ready');
});

// Error handling
whatsapp.on('error', (error) => {
    console.error('Error encountered:', error);
});

// Initialize the client
whatsapp.initialize();
