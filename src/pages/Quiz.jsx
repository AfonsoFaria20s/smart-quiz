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

    let [quizStarted, setQuizStarted] = useState(false)

    // eslint-disable-next-line
    const [triviaData, setTriviaData] = useState([]);

    useEffect(() => {
        // Faz a solicitação à API usando Axios
        axios.get('https://opentdb.com/api.php?amount=10&category=' + id + '&type=multiple')
            .then(response => {
                // Atualiza o estado com os dados da API
                setTriviaData(response.data.results);
            })
            .catch(error => {
                console.error('Erro ao buscar os dados da API:', error);
            });
    }, [id]);

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
                {quizStarted ? (<QuizDisplay style={image} questions={triviaData} />) : (<StartQuiz categName={categName} startQuizEvent={startQuiz} style={image} />)}
            </div>
        </>
    )
}
export default Quiz