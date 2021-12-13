import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import Main from './Pages/Main';
import NoMatch from './Pages/NoMatch';
import UpdateExplorer from './Pages/UpdateExplorer';
import './app.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/update/:id" element={<UpdateExplorer />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
