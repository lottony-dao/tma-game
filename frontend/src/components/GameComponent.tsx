import React, { useEffect, useRef } from 'react';
import { Game } from 'phaser';
import { gameConfig } from '../game/config';

export const GameComponent: React.FC = () => {
    const gameRef = useRef<Game | null>(null);

    useEffect(() => {
        if (!gameRef.current) {
            gameRef.current = new Game(gameConfig);
        }

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div id="game-container" />;
};
