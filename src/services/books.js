import axios from 'axios'

const baseUrl = 'http://localhost:4000/books';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}

export default { getAll, remove };