import { Telegraf } from 'telegraf';
import { GameSession } from '../models/GameSession';

export const createBot = (token: string) => {
    const bot = new Telegraf(token);

    bot.command('start', async (ctx) => {
        const userId = ctx.from.id.toString();
        
        // Create new game session
        await GameSession.create({
            userId,
            startTime: new Date(),
            platform: 'telegram'
        });

        ctx.reply('Welcome to the game!');
    });

    return bot;
};
