import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './Home';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                {/* Define other routes here as needed */}
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
