import axios from 'axios'

function get({ url, params }) {
    return axios.get(url, { params }).then((data) => {
        return data
    })
}
export {
    get
}