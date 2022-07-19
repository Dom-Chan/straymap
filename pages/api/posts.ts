import axios from "axios";

const url: string = "https://straymap.herokuapp.com/posts";

export const fetchPosts = () => {
  axios
    .get(url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const fetchStray = (id: string) => {
  axios
    .get(`https://straymap.herokuapp.com/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const createPost = (newPost) => {
  axios
    .post(url, {newPost})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

   
};
