import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './features/common/Header';
import NotFound from './features/common/NotFound';
import Home from './features/indexPage/Home';
import Footer from './features/common/Footer';

function App() {
    return (
        <div className="App bg-background-white dark:bg-background-dark">
            <Router>
                <Header />
                <Routes>
                    <Route path="/about" />
                    <Route path="/users" />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
