import * as api from "../pages/api/posts";
import axios from "axios";
import { AppDispatch, RootState } from "../pages/_app";


export const getPosts = () => async (dispatch: any) => {
  const url: string = "http://localhost:5000/posts";
  try {
    // const data = await api.fetchPosts();
    // console.log(data)
    axios
    .get(url)
    .then((res) => dispatch({ type: "FETCH_ALL", payload: res }))
    
  } catch (error) {console.log(error)}
};

//(dispatch: any) => Promise<void>
export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const data = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {console.log(error)}
};
