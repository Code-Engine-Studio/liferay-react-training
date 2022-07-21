import axios from "axios";

const headlessAPI = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "Basic " + window.btoa("vanhiep99w@gmail.com:1"),
    },
});

export default headlessAPI;
