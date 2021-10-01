import axios from 'axios';
const baseUrl = '/api/todos/';

const getAll = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const modifyTodo = async (item) => {
    console.log(item)
    const res = await axios.put(`${baseUrl}${item.id}/`, item);
    return res;
}

const deleteTodo = async (item) => {
    const res = await axios.delete(`${baseUrl}${item.id}`);
    return res;
}

const createTodo = async (item) => {
    const res = await axios.post(`${baseUrl}`, item);
    return res;
}

export default { getAll, modifyTodo, deleteTodo, createTodo }