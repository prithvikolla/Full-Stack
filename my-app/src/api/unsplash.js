import axios from 'axios'; // create your own axios server

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID dpS6xgEBuDejfl0aLrLh4V46LBR3JbIoiOiSGtfOKSk',
    }
})