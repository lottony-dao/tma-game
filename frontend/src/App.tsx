import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameComponent } from './components/GameComponent';
import { MainMenu } from './components/MainMenu';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path="/game" element={<GameComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
