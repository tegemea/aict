import Axios from 'axios'

const instance = Axios.create({
    baseULR: 'http://localhost:5175',
    timeout: '5000'
})

export { instance as axios }