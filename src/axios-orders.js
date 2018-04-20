import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-5008b.firebaseio.com"
});

export default instance;
