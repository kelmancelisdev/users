import { combineReducers } from 'redux'
import {
  FETCH_USERS,
  SAVE_USERS,
  SAVE_POSTS,
  SAVE_COMMENTS,
  FETCH_POSTS,
} from '../actions/actionsTypes'

const usersReducers = (state = { users: [], fetching: false }, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      }
    case FETCH_USERS:
      return {
        ...state,
        fetching: action.boolean,
      }
    default:
      return state
  }
}

const injectCommetsToPost = (state, action) =>
  state.posts.map(post => {
    return post.id === action.id ? { ...post, comments: action.comments } : post
  })

const postsReducers = (state = { posts: [], fetching: false }, action) => {
  switch (action.type) {
    case SAVE_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    case SAVE_COMMENTS:
      return {
        ...state,
        posts: injectCommetsToPost(state, action),
      }
    case FETCH_POSTS:
      return {
        ...state,
        fetching: action.boolean,
      }
    default:
      return state
  }
}

export default combineReducers({
  usersReducers,
  postsReducers,
})
