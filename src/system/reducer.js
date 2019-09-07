import { combineReducers } from 'redux';
import posts from '../components/pages/Posts/reducer';
import favorite from '../components/pages/Favorite/reducer';


export default combineReducers ({
    favorite,
    posts,
});