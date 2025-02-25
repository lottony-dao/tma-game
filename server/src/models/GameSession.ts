import mongoose from 'mongoose';

const gameSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date
    },
    platform: {
        type: String,
        enum: ['web', 'telegram'],
        required: true
    }
}, {
    timestamps: true
});

export const GameSession = mongoose.model('GameSession', gameSessionSchema);
