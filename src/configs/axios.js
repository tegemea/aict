import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://knowit-api.kwawingu.com',
    timeout: '5000',
})

export { instance as axios }