import React from 'react';
import { decode } from 'html-entities';
import "../../../styles/pages/Quiz/quiz-content-style/finishedQuiz/CorrectQuestions.css"

const CorrectQuestion = (props) => {
    return (
        <div className='correct-question' key={props.questionLabel}>
            <span id='stats-question-label'>{decode(props.questionLabel)}</span>
            <span id='stats-correct'><span id='stats-correct-pre-label'>Correct Answer:</span> {decode(props.correct)}</span>
        </div>
    );
};

export default CorrectQuestion;