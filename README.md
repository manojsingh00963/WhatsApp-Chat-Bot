
```markdown
# WhatsApp Chatbot

A simple WhatsApp chatbot built using Node.js and the `whatsapp-web.js` library. This bot can handle various conversational messages and reply to common phrases. It's designed to simulate a friendly conversation with predefined responses.

## Features

- Responds to common greetings and conversational phrases.
- Handles up to 100+ different predefined messages.
- Uses QR code-based authentication to log in to WhatsApp Web.
- Modular message handling for easy customization and scalability.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

bash
   git clone https://github.com/manojsingh00963/WhatsApp-Chat-Bot.git


```
 
## Install the necessary dependencies:

> ``` npm install qrcode-terminal whatsapp-web.js ```

> ``` npm install nodemon ```

# Usage

1) Start the bot by running:

> **npm start**

 This will launch the bot in  mode.

2) Scan the QR code displayed in the terminal with your WhatsApp to authenticate.

3) The bot will now respond to messages with predefined conversational replies.

## Development Mode
For development purposes, you can use nodemon to automatically restart the bot when you make changes:

> npm run dev

This will watch for file changes and restart the bot automatically.
