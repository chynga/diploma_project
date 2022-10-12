import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./features/auth/Login";
import Register from './features/auth/Register';
import Home from "./features/home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
