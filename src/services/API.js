import axios from "axios";
let options = {
    baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id)
const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
const getPosts = () => axiosInstance('/posts');
const getPostComments = (id) => axiosInstance('/posts/'+id+'/comments');
const getComments = () => axiosInstance('/comments')
export {getUsers, getUser, getPosts, getComments, getPostComments, getUserPosts};
