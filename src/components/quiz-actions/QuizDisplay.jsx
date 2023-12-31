/* eslint-disable */

import React, { useState } from 'react';
import "../../styles/pages/Quiz/quiz-content-style/QuizDisplay.scss"
import Option from './QuizOption'
import { useId } from "react"
import { decode } from 'html-entities';
import Stats from './final-stats-display/Stats';
import { useNavigate } from 'react-router-dom';
import click from "../../res/sounds/clicks/light-click.mp3";
import { getCurrentStreak, getFromStorage, getHighStreak, resetCurrentStrek, updateAverageStreak, updateCurrentStreak, updateHighStreak, updateStorage } from '../../data/userData/Streaks';
import { setNegativeQuizCount, setPositiveQuizCount } from '../../data/userData/QuizPlayed';

const QuizDisplay = (props) => {
    const id = useId()
    // const location = useLocation()

    let [questions, setQuestions] = useState(props.questions)
    let [questContent, setQuestContent] = useState(questions[0])

    let answers = [questContent.correct_answer, questContent.incorrect_answers[0], questContent.incorrect_answers[1], questContent.incorrect_answers[2]]

    console.log(questContent.correct_answer);

    // let categName = location.state.categName;
    // let image = location.state.style;

    const shuffle = () => {
        answers.sort(() => Math.random() - 0.5);
    }

    shuffle()

    const index = questions.findIndex((vari) => vari.question === questContent.question);

    let [openStats, setOpenStats] = useState(false)
    let [correct, setCorrect] = useState(0)
    let [wrongQuests, setWrongQuests] = useState([])
    let [correctQuests, setCorrectQuests] = useState([])

    const lightClick_sound = new Audio(click);

    if (localStorage.getItem("quiz_count") == null) {
        // Initialize quiz_count on localstorage
        localStorage.setItem("quiz_count", 0)
    }

    const nextQuestion = () => {
        if ((index + 1) < 10) {
            setQuestContent(questions[index + 1])
        } else {
            // After quiz is finished
            setOpenStats(true)

            if ((correct * 10) > 40) {
                updateCurrentStreak();

                if (getFromStorage("highestStreak") == null) {
                    updateStorage("highestStreak", 0);
                }

                if (getCurrentStreak() > getHighStreak()) {
                    updateHighStreak();
                }

                setPositiveQuizCount();
            } else {
                setNegativeQuizCount();
                resetCurrentStrek();
            }
        }
        updateAverageStreak();
        shuffle()
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const checkQuestion = (e) => {
        lightClick_sound.play();
        let selected = e.target.innerHTML.split(" ").join("");
        let curr_correct = questContent.correct_answer.split(" ").join("");

        if (selected === curr_correct) {
            setCorrect(correct + 1)
            setCorrectQuests(correctQuests => [...correctQuests, questContent])
        } else {
            setWrongQuests(wrongQuests => [...wrongQuests, questContent])
        }
        // Add possible animation in future 
        sleep(0).then(() => { nextQuestion() });
    }

    const navigate = useNavigate()

    const leaveStats = () => {
        setOpenStats(false)
        navigate("/home")
    }

    return (
        <>
            {
                /* Final Statistics Display Logic */
                openStats ?
                    <Stats
                        leaveStats={leaveStats}
                        correctCount={correct}
                        quizPercentage={correct * 10}
                        percentColor={correct >= 5 ? { color: "green" } : { color: "red" }}
                        wrongQuests={wrongQuests}
                        correctQuests={correctQuests}
                    />
                    :
                    <div className='quiz-display' style={props.style}>
                        <div className="front">

                            <div className='current-stats'>
                                <span id='quest-num'>Question {index + 1} / 10</span>
                                {/* <span id='time'>Time: {time}s</span> */}
                            </div>
                            <span id='question'>{decode(questContent.question)}</span>
                            <div className="options">
                                {
                                    answers.map(answer => {
                                        return <Option id={id} onClick={checkQuestion} label={decode(answer)} />
                                    })
                                }
                            </div>
                            {/* <div className='question_navigation'>
                    <button onClick={prevQuestion}>Back</button>
                    <button onClick={nextQuestion}>Next</button>
                </div> */}
                        </div>
                    </div>
            }
        </>

    );
};

export default QuizDisplay;