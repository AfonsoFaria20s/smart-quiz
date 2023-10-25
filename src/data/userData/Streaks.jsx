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
    return parseInt(localStorage.getItem("currentStreak")); // Converte o valor para um número
}

// Função para verificar se uma chave existe na localStorage
function storageCreated(key) {
    return localStorage.getItem(key) !== null;
}

export const resetCurrentStrek = () => {
    localStorage.setItem("currentStreak", 0);
}

export const updateHighStreak = () => {
    localStorage.setItem("highestStreak", getCurrentStreak());
}
export const getHighStreak = () => {
    return localStorage.getItem("highestStreak");
}