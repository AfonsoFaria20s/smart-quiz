import React from 'react';
import "../../../styles/pages/Quiz/quiz-content-style/finishedQuiz/WrongQuestion.css"
import { decode } from 'html-entities';

const WrongQuestion = (props) => {
    return (
        <div className='wrong-question'>
            <span id='stats-question-label'>{decode(props.questionLabel)}</span>
            <span id='stats-correct'><span id='stats-correct-pre-label'>Correct Answer:</span> {decode(props.correct)}</span>
        </div>
    );
};

export default WrongQuestion;