import React from 'react';
import NavBar from '../components/global/NavBar';
import "../styles/pages/Dashboard/Dashboard.scss"

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className='content'>
                <div className='title'>
                    <span>user dashboard</span>
                </div>
                <div className='main-stats'>

                </div>
                <div className='played-categories'>

                </div>
            </div>
        </>
    );
};

export default Dashboard;