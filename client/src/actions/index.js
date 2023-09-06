import axios from 'axios';
import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG, DELETE_BLOG } from './types';

export const fetchUser = () => async dispatch => {
  try{
    const res = await axios.get('http://localhost:5000/api/current_user', { withCredentials: true });
    dispatch({ type: FETCH_USER, payload: res.data });
  }catch (e){}
};

export const handleToken = token => async dispatch => {
  try{
    const res = await axios.post('http://localhost:5000/api/stripe', token, { withCredentials: true });
    dispatch({ type: FETCH_USER, payload: res.data });
  }catch (e){}
};

export const submitBlog = (values, history) => async dispatch => {
  try{
    const res = await axios.post('http://localhost:5000/api/blogs', values, { withCredentials: true });
    history.push('/blogs');
    dispatch({ type: FETCH_BLOG, payload: res.data });
  }catch (e){}
};

export const fetchBlogs = () => async dispatch => {
  try{
    const res = await axios.get('http://localhost:5000/api/blogs', { withCredentials: true });
    dispatch({ type: FETCH_BLOGS, payload: res.data });
  }catch (e){}
};

export const deleteBlog =  (id) => async dispatch => {
  try{
    const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`, { withCredentials: true });
    dispatch({ type: DELETE_BLOG, payload: id });
  }catch (e){console.log(e)}
};


export const fetchBlog = id => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, { withCredentials: true });
    dispatch({ type: FETCH_BLOG, payload: res.data });
  }catch (e){console.log(e)}
};
