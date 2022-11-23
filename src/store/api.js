export const mbtiStyle = (mbti) => {
    const main = mbti.toLowerCase()

    if (['intj', 'intp', 'entj', 'entp'].includes(main)) {
        return `background-image: rgb(166,34,195);
            background-image: linear-gradient(0deg, rgba(166,34,195,1) 0%, rgba(253,45,77,1) 100%);`
    } else if (['infj', 'infp', 'enfj', 'enfp'].includes(main)) {
        return `background-image: rgb(34,193,195);
            background-image: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);`
    } else if (['istj', 'isfj', 'estj', 'esfj'].includes(main)) {
        return `background-image: rgb(34,195,161);
            background-image: linear-gradient(0deg, rgba(34,195,161,1) 0%, rgba(45,115,253,1) 100%)`;
    } else {
        return `background-image: rgb(232,119,52);
            background-image: linear-gradient(0deg, rgba(232,119,52,1) 0%, rgba(253,191,45,1) 100%);`
    }
};

export const API_URL = 'http://127.0.0.1:8000'