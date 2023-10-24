export const updateData = (user_data) => {
    localStorage.setItem("timesPlayed", JSON.stringify(user_data));
}
export const getData = () => {
    return JSON.parse(localStorage.getItem("timesPlayed"));
}