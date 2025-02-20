import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route
                    path="/contact"
                    element={<ContactPage></ContactPage>}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
