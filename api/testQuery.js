import axios from "axios";

axios.defaults.baseURL = "https://64511b10a3221969115af51b.mockapi.io";

export const fetch = async () => {
    const res = await axios.get('/comments');
    if (res.status === 200) {
        return res.data;
    }
};