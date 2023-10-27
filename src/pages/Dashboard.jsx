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
    getQuizCount, updateQuizCount
} from '../data/userData/QuizCount';
import { Chart } from 'react-google-charts';
import { getAverageStreak, getCurrentStreak, getHighStreak } from '../data/userData/Streaks';
import { getNegativeQuizCount, getPositiveQuizCount } from '../data/userData/QuizPlayed';

const Dashboard = () => {

    const [currentStreak, setCurrentStreak] = useState(getCurrentStreak());
    const [highestStreak, setHighestStreak] = useState(getHighStreak());
    const [averageQuizStreakLoss, setAverageQuizStreakLoss] = useState(getAverageStreak());
    const [positiveQuizCount, setPositiveQuizCount_] = useState(getPositiveQuizCount());
    const [negativeQuizCount, setNegativeQuizCount_] = useState(getNegativeQuizCount());

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
                        <StreakInfo title={"Average Streak"} data={averageQuizStreakLoss} />
                    </div>
                    <div className='played-categories-positive-negative' title='Ratio between positive quizzes and negative quizzes'>
                        <StreakInfo title={"Positive/Negative ratio"} data={positiveQuizCount + "/" + negativeQuizCount} />
                    </div>
                </div>
                <div className="info-card">
                    <Chart
                        chartType="PieChart"
                        data={[]}
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