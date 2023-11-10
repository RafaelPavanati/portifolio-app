import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8090/api/',
    headers: {"Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':true}
})

export default http
