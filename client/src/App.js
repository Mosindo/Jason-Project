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
                <Route path="/" element={<Main />}>
                    <Route index element={<UpdateExplorer />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
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
