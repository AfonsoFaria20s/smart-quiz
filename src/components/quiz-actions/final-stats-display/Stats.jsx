import React, { useState } from 'react';
import "../../../styles/pages/Quiz/quiz-content-style/finishedQuiz/QuizStats.scss"
import WrongQuestion from './WrongQuestion';
import CorrectQuestion from './CorrectQuestion';

const Stats = (props) => {

   let [wrongQuests, setWrongQuests] = useState(props.wrongQuests)
   let [correctQuests, setCorrectQuests] = useState(props.correctQuests)

   console.log(props.correctCount);

   return (
      <div className='stats-container'>
         <div className="header">
            <span id='title'>Final Statistics</span>
            <span className='material-symbols-outlined' id='close' onMouseUp={props.leaveStats}>close</span>
         </div>
         <div className="content">
            <span id='result-title'>Quiz result: <span style={props.percentColor} id='percentage'>{props.quizPercentage}%</span></span>
            <div className='right-wrong'>
               <span>Questions right: {props.correctCount}/10</span>
            </div>
            <hr />
            <div className='wrong-right-questions'>
               <span className='stats-quests-title'>Correct Questions - {props.correctCount}</span>
               {
                  correctQuests.map(quest => {
                     return <CorrectQuestion
                        questionLabel={quest.question}
                        correct={quest.correct_answer}
                     />
                  })
               }
               {/* {
                  props.correctCount != 0
                  &&
                  <>
                     
                  </>
               } */}
               <span className='stats-quests-title' style={{ marginTop: "20px" }}>Incorrect Questions - {10 - props.correctCount}</span>
               {
                  wrongQuests.map(quest => {
                     return <WrongQuestion
                        questionLabel={quest.question}
                        correct={quest.correct_answer}
                     />
                  })
               }
               {/* {
                  10 - props.correctCount != 0
                  &&
                  <>
                     
                  </>
               } */}
            </div>
         </div>
      </div>
   );
};

export default Stats;