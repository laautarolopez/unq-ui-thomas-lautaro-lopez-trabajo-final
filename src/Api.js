import axios from "axios";

const host = "https://preguntados-api.vercel.app";

const getDifficulty = () => {
    return axios.get(host + "/api/difficulty")
        .then((response) => { return response.data })
        .catch((error) => { return error });
};

const getQuestions = (difficulty) => {
    const params = {
        difficulty: difficulty,
    };
    return axios.get(host + "/api/questions", {params})
        .then((response) => { return response.data })
        .catch((error) => { return error });
};

const postAnswer = (questionId, option) => {
    return axios
        .post(host + "/api/answer", {
            questionId: questionId,
            option: option,
        })
        .then((response) => { return response.data })
        .catch((error) => { return error });
};

const Api = {
    getDifficulty,
    getQuestions,
    postAnswer
};

export default Api;