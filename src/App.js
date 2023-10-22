import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from "./pages/Dashboard"
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import NoPage from './pages/other/NoPage';
import Account from './pages/Account';

const App = () => {

    return (
        <div>
            <BrowserRouter basename='/'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path='404' element={<NoPage />} />
                    <Route path='account' element={<Account />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;