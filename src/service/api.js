import axios from "axios";

export const URL = '';

export const HeaderList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
};
export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})