import axios from "axios";
let options = {
    baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const getPosts = (userId) => axiosInstance(`/users/${userId}/posts`);

export {getUsers, getPosts};
