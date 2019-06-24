import configApi from '../../../api/config'
import {
  SAVE_USERS,
  SAVE_POSTS,
  SAVE_COMMENTS,
  FETCH_USERS,
  FETCH_POSTS,
} from './actionsTypes'

const fetching = (boolean, type) => ({
  type,
  boolean,
})

const saveUsers = users => ({ type: SAVE_USERS, users })

const savePosts = posts => ({ type: SAVE_POSTS, posts })

const saveCommentByPost = (comments, id) => ({
  type: SAVE_COMMENTS,
  comments,
  id,
})

const findUsers = () => {
  return async dispatch => {
    dispatch(fetching(true, FETCH_USERS))

    try {
      const { data } = await configApi.get(`/users`)
      dispatch(saveUsers(data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(fetching(false, FETCH_USERS))
    }
  }
}

const findPosts = id => {
  return async dispatch => {
    dispatch(fetching(true, FETCH_POSTS))
    try {
      const { data } = await configApi.get(`/posts?userId=${id}`)
      dispatch(savePosts(data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(fetching(false, FETCH_POSTS))
    }
  }
}

const findCommets = id => {
  return async dispatch => {
    try {
      const { data } = await configApi.get(`/comments?postId=${id}`)
      dispatch(saveCommentByPost(data, id))
    } catch (error) {
      console.log(error)
    }
  }
}

export {
  findUsers,
  fetching,
  saveUsers,
  findPosts,
  savePosts,
  findCommets,
  saveCommentByPost,
}
