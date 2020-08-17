import axios from 'axios'
export default axios.create({
    baseURL: "http://api-citation.uat.testversalis.net/api",
    headers: {
        "Content-type": "application/json"
    }
})