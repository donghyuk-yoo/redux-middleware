// api를 호출하는 함수
import axios from "axios";

export const getPost = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (id) => axios.get(`https://jsonplaceholder.typicode.com/users`);
