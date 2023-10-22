import "../../styles/pages/Quiz/quiz-content-style/StartQuiz.scss"
import { useNavigate } from "react-router-dom";

function StartQuiz(props) {
    const navigate = useNavigate()

    return (
        <div className="start-quiz" style={props.style}>
            <div className="front">
                <span id="title">{props.categName}</span>
                <hr />
                <span id="label-ready">ready?</span>
                <div className="options">
                    <button className="start but" onClick={props.startQuizEvent}>start</button>
                    <button className="back but" onClick={() => navigate("/home")}>back</button>
                </div>
            </div>
        </div>
    )
}
export default StartQuiz