import axios from "axios";
export const API_URL: string = "https://restcountries.com/v3.1/"
export default axios.create({
    baseURL: API_URL,
})