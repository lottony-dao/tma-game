import { BasicScene } from './scenes/BasicScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    scene: BasicScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: process.env.NODE_ENV === 'development'
        }
    }
};
