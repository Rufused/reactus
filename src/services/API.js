import axios from "axios";
let options = {
    baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(options);

const getUsers = async () => await axiosInstance('/users');
const getUserPosts = async (id) => await axiosInstance('/users/'+id+'/posts');
const getPosts = async () =>  await axiosInstance('/posts');
const getPostComments = async (id) => await axiosInstance('/posts/'+id+'/comments');
const getComments = async () => await axiosInstance('/comments')
export {getUsers, getPosts, getComments, getPostComments, getUserPosts};
