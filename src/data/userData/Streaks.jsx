import { getQuizCount } from "./QuizCount";

// Função para verificar se uma chave existe na localStorage
function storageCreated(key) {
    return localStorage.getItem(key) !== null;
}
// Função para atualizar um valor na localStorage
export function updateStorage(key, value) {
    localStorage.setItem(key, value.toString());
}
// Função para pegar em valor da localStorage
export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export const updateCurrentStreak = () => {
    if (storageCreated("currentStreak")) {
        let countLS = localStorage.getItem("currentStreak");
        let count = parseInt(countLS);
        count += 1;
        localStorage.setItem("currentStreak", count.toString()); // Converta count de volta para uma string
    } else {
        localStorage.setItem("currentStreak", "1"); // Se a chave não existir, inicie com "1"
    }
}

export const getCurrentStreak = () => {
    if (storageCreated("currentStreak")) {
        return getFromStorage("currentStreak");
    } else {
        updateStorage("currentStreak", 0);
    }
}

export const resetCurrentStrek = () => {
    addAllStreaks();
    updateStorage("currentStreak", 0)
}

export const updateHighStreak = () => {
    updateStorage("highestStreak", getCurrentStreak())
}
export const getHighStreak = () => {
    if (storageCreated("highestStreak")) {
        return getFromStorage("highestStreak");
    } else {
        updateStorage("highestStreak", 0);
    }
}
export const updateAverageStreak = () => {
    if (storageCreated("averageQuizStreakLoss")) {
        updateStorage("averageQuizStreakLoss", (getFromStorage("allStreaks") / getQuizCount()))
    } else {
        updateStorage("averageQuizStreakLoss", 0);
    }
}
export const getAverageStreak = () => {
    if (storageCreated("averageQuizStreakLoss")) {
        return getFromStorage("averageQuizStreakLoss").toFixed(1);
    } else {
        updateStorage("averageQuizStreakLoss", 0);
    }
}

export const addAllStreaks = () => {
    if (storageCreated("allStreaks")) {
        updateStorage("allStreaks", getFromStorage("allStreaks") + getCurrentStreak())
    } else {
        updateStorage("allStreaks", 0)
    }
}