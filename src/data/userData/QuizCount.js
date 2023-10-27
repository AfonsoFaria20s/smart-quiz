export const updateQuizCount = () => {
    localStorage.setItem("quizCount", (getQuizCount() + 1));
}
export const getQuizCount = () => {
    return JSON.parse(localStorage.getItem("quizCount"));
}