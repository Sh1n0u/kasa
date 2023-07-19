import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Accueil from './pages/accueil.jsx';
import Apropos from './pages/apropos.jsx';
import Error from './components/error/error.jsx';
import CardDetails from './components/carddetails/carddetail.jsx';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Accueil />} />
                <Route path='/apropos' element={<Apropos />} />
                <Route path='*' element={<Error />} />
                <Route path="/content/:id" element={<CardDetails />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);