import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Login from "./features/auth/Login";
import Register from './features/auth/Register';
import Home from "./features/home/Home";
import Map from "./components/Map";
import EmailConfirmation from "./features/auth/EmailConfirmation";
import ForgotPassword from "./features/auth/ForgotPassword";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirm" element={<EmailConfirmation />} />
                    <Route path="/recover" element={<ForgotPassword />} />
                </Routes>
                {/* <Map /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
