import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainMenu.scss';

export const MainMenu: React.FC = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/game');
    };

    return (
        <div className="menu-container">
            <h1 className="title">Your game name</h1>
            <button className="play-button" onClick={handlePlayClick}>
                Play
            </button>
        </div>
    );
};
