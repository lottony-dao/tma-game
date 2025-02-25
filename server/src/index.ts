import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';
import { createBot } from './bot';

// Load environment variables
config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Serve static files
app.use(express.static('dist/frontend'));

// Connect to MongoDB
const {
    MONGO_USER: mongoUser,
    MONGO_PASSWORD: mongoPassword,
    MONGO_PORT: mongoPort,
    MONGO_DATABASE: mongoDatabase
} = process.env;

mongoose.connect(`mongodb://${mongoUser}:${mongoPassword}@db:${mongoPort}/admin`)
    .then(() => {
        console.log('Connected to MongoDB');
        // Use the specified database
        mongoose.connection.useDb(mongoDatabase || 'admin');
    })
    .catch(err => {console.error('MongoDB connection error:', err); process.exit(1)});

// Initialize Telegram bot
const bot = createBot(process.env.BOT_TOKEN!);
bot.launch()
    .catch(err => {console.error('Telegram bot error:', err); process.exit(1)});

// Start server
const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
