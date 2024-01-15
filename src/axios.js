import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
//yeminfeterewu URL yihenin instance yizo enidijemir enide base URL yagelegilenall.
export default instance;