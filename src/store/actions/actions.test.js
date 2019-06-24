import { saveCommentByPost, fetching, saveUsers, savePosts } from './actions'
import {
  SAVE_COMMENTS,
  FETCH_POSTS,
  SAVE_USERS,
  SAVE_POSTS,
} from './actionsTypes'

describe('actions', () => {
  it('should create an action to add a fetching', () => {
    const type = FETCH_POSTS
    const boolean = true
    const expectedAction = {
      type,
      boolean,
    }
    expect(fetching(boolean, type)).toEqual(expectedAction)
  })
  it('should create an action to add a saveUsers', () => {
    const users = []
    const expectedAction = {
      type: SAVE_USERS,
      users,
    }
    expect(saveUsers(users)).toEqual(expectedAction)
  })
  it('should create an action to add a savePosts', () => {
    const posts = []
    const expectedAction = {
      type: SAVE_POSTS,
      posts,
    }
    expect(savePosts(posts)).toEqual(expectedAction)
  })
  it('should create an action to add a comments', () => {
    const comments = []
    const id = 1
    const expectedAction = {
      type: SAVE_COMMENTS,
      comments,
      id,
    }
    expect(saveCommentByPost(comments, id)).toEqual(expectedAction)
  })
})
