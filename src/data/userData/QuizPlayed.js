import { getFromStorage, updateStorage } from "./Streaks"

/*
* Amount of times a quiz 
* topic has been played
* Getters and Setters to localStorage
*/
export const getPositiveQuizCount = () => {
    if (getFromStorage("positiveQuizCount") != null) {
        return getFromStorage("positiveQuizCount");
    } else {
        updateStorage("positiveQuizCount", 0);
    }
}
export const setPositiveQuizCount = () => {
    if (getFromStorage("positiveQuizCount") != null) {
        updateStorage("positiveQuizCount", getPositiveQuizCount() + 1);
    } else {
        updateStorage("positiveQuizCount", 0);
    }
}

export const getNegativeQuizCount = () => {
    if (getFromStorage("negativeQuizCount") != null) {
        return getFromStorage("negativeQuizCount");
    } else {
        updateStorage("negativeQuizCount", 0);
    }
}
export const setNegativeQuizCount = () => {
    if (getFromStorage("negativeQuizCount") != null) {
        updateStorage("negativeQuizCount", getNegativeQuizCount() + 1);
    } else {
        updateStorage("negativeQuizCount", 0);
    }
}