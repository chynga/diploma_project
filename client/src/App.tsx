import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './features/common/Header';
import NotFound from './features/common/NotFound';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/about" />
                    <Route path="/users" />
                    <Route path="/" />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
