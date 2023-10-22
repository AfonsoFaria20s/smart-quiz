import { useEffect, useState } from "react"
import axios from "axios";
import StartQuiz from "../components/quiz-actions/StartQuiz";
import QuizDisplay from "../components/quiz-actions/QuizDisplay";
import "../styles/pages/Quiz/Quiz.scss"
import { useLocation } from "react-router-dom";
import NavBar from "../components/global/NavBar";

function Quiz(props) {

    const location = useLocation()

    let id = location.state.id;
    let categName = location.state.categName;
    // let image = location.state.image;
    let image = location.state.style;// Image inside style

    let [apiCallInfo, setApiCallInfo] = useState([])
    let key = id;

    let [quizStarted, setQuizStarted] = useState(false)

    // eslint-disable-next-line
    useEffect(() => {
        let key;
        axios.get("https://opentdb.com/api.php?amount=10&category=" + key + "&type=multiple")
            .then(res => {
                setApiCallInfo(res.data.results)
                key = res;
            }).catch(e => {
                console.log(e);
            });
    }, [key])

    const addQuizCount_localStorage = () => {
        let quizCount = parseInt(localStorage.getItem("quiz_count"))
        localStorage.setItem("quiz_count", quizCount + 1)
    }

    const startQuiz = () => {
        setQuizStarted(true)
        addQuizCount_localStorage()
    }

    return (
        <>
            <NavBar />
            <div className="quiz-content">
                {quizStarted ? (<QuizDisplay style={image} questions={apiCallInfo} />) : (<StartQuiz categName={categName} startQuizEvent={startQuiz} style={image} />)}
            </div>
        </>
    )
}
export default Quiz