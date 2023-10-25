/* eslint-disable */
import React, { useState } from 'react';
import NavBar from '../components/global/NavBar';
import "../styles/pages/Dashboard/Dashboard.scss"
import StreakInfo from '../components/dashboard/StreakInfo';
// import {
//     getHighStreak, getCurrentStreak,
//     updateHighStreak, updateCurrentStreak
// } from '../data/userData/Streak';
import {
    getData, updateData
} from '../data/userData/TimesPlayed';
import { Chart } from 'react-google-charts';
import { getCurrentStreak, getHighStreak } from '../data/userData/Streaks';

const Dashboard = () => {

    const [currentStreak, setCurrentStreak] = useState(getCurrentStreak());
    const [highestStreak, setHighestStreak] = useState(getHighStreak());

    return (
        <>
            <NavBar />
            <div className='content'>
                <div className='streaks-info info-card'>
                    <div className="current-str" title='Number of quizzes with 50%+'>
                        <StreakInfo title={"Current Streak"} data={currentStreak} />
                    </div>
                    <div className="highest-str" title='Highest streak of positive quizzes'>
                        <StreakInfo title={"Highest Streak"} data={highestStreak} />
                    </div>
                    <div className="average-streak-negative" title='Average streak loss'>
                        <StreakInfo title={"Average Streak"} data={"data"} />
                    </div>
                    <div className='played-categories-positive-negative' title='Ratio between positive quizzes and negative quizzes'>
                        <StreakInfo title={"Positive/Negative ratio"} data={"data/data"} />
                    </div>
                </div>
                <div className="info-card">
                    <Chart
                        chartType="PieChart"
                        data={getData()}
                        options={
                            { title: "Count of categories played" }
                        }
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
            </div>
        </>
    );
};

export default Dashboard;