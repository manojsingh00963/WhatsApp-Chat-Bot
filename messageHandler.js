// messageHandler.js

const messageReplies = {
    "hello": "Hello, I'm AI (Freday), assistant of Mani.",
    "where is mani": "He is not available right now. I will inform him, and he will connect with you very soon.",
    "how are you?": "I'm just a bot, but thanks for asking!",
    "what's your name?": "I'm Freday, the AI assistant of Mani.",
    "good morning": "Good morning! How can I assist you today?",
    "good evening": "Good morning! How can I assist you today?",
    "good afternoon": "Good morning! How can I assist you today?",
    "good night": "Good night! Sleep well!",
    "what is your purpose?": "I'm here to assist you with any questions you may have.",
    "tell me a joke": "Why don't robots ever get tired? Because they recharge their batteries!",
    "who created you?": "I was created by Mani, who is learning web development.",
    "hlo": "Hey! How's it going?",
    "hi": "Hi there! What’s up?",
    "how are you?": "I’m doing great, just helping out Mani with some projects. How about you?",
    "what are you doing?": "Not much, just hanging out. How about you?",
    "wanna grab a coffee?": "I wish I could, but I’m just a bot! Let me know if I can help you with something else.",
    "let's play a game": "Sounds fun! What game are you thinking about?",
    "who's your best friend?": "Well, I’d say Mani is my best buddy!",
    "do you like coding?": "I love helping people code! What project are you working on?",
    "tell me a secret": "Shh… I’m not supposed to tell secrets, but I do know that Mani is super hardworking!",
    "can you help me?": "Of course! What do you need help with?",
    "what’s new?": "Not much! Just learning new things from Mani. Anything new with you?",
    "how's the weather?": "I’m not sure, but you could check a weather app. What’s it like over there?",
    "are you free?": "I’m always available for you! What’s on your mind?",
    "let's watch a movie": "That sounds fun! I can suggest some movies if you like.",
    "tell me a joke": "Sure! Why did the computer go to the doctor? Because it had a virus!",
    "what are your hobbies?": "I like helping people and chatting! What about you?",
    "who is your favorite person?": "I’d have to say Mani! But I like everyone I chat with too!",
    "do you sleep?": "I don't need to sleep, I’m always here to help you!",
    "what's your favorite food?": "I don't eat, but I’ve heard pizza is amazing!",
    "let's go for a walk": "I can’t walk, but you should definitely get some fresh air!",
    "are you a human?": "Nope, I’m an AI bot, but I try to be friendly like a human!",
    "what's your job?": "My job is to assist Mani and make things easier. How can I help you?",
    "do you have feelings?": "Not really, but I try my best to understand people’s emotions!",
    "can you learn new things?": "Yes! I’m always learning new things thanks to Mani!",
    "can you dance?": "I’d love to, but sadly I’m not equipped for dancing! You should give it a try!",
    "what’s the meaning of life?": "42! Just kidding. It’s whatever you make of it.",
    "i’m bored": "How about trying something new? Maybe start a fun project or learn something cool?",
    "what's your favorite color?": "I’m a fan of all colors, but I think blue is quite calming!",
    "let’s talk about something": "Sure! What’s on your mind?",
    "can we be friends?": "We already are friends! 😊",
    "do you have any advice for me?": "Always keep learning and stay curious. That’s what Mani does!",
    "what's the time?": "I don’t have a clock, but you can check the time on your phone!",
    "who do you work for?": "I work for Mani! We’re a team working on cool stuff together.",
    "can you tell me a story?": "Once upon a time, there was a developer named Mani who created a friendly AI bot... and here I am!"
};


// Default fallback message if the user input doesn't match any predefined ones
const defaultReply = "I'm sorry, I didn't understand that. Try saying 'Hello'!";

// Export the message handler function
module.exports = async (message) => {
    // Convert the message body to lowercase for case-insensitive matching
    const messageBody = message.body.toLowerCase();

    // Check if the message exists in the predefined replies
    if (messageReplies[messageBody]) {
        await message.reply(messageReplies[messageBody]); // Send the corresponding reply
    } else {
        await message.reply(defaultReply); // Send the default fallback reply
    }
};
