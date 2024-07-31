import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './home/Main';
import Footer from './components/Footer';
import About from './about/About';
import Contact from './contact/Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/* Define other routes here as needed */}
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
