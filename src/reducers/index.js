import { combineReducers } from 'redux';
import React from 'react'
import { GET_POSTS, SET_SORTING } from '../actions';

const receivePosts = (state={}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        ...action.posts
      }
    default:
      return state;
  }
}

const sorting = (state={}, action) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        ...action.sorting
      }
    default:
      return state;
  }
}

export default combineReducers({
  receivePosts,
  sorting
});
