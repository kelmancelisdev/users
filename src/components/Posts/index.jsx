import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import { List, AppBar, Toolbar, Typography } from '@material-ui/core'
import Post from '../Post'
import Loading from '../Loading'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Posts = () => {
  const classes = useStyles()
  const { posts, fetching } = useSelector(state => state.postsReducers)
  const { currentUser } = useSelector(state => state.usersReducers)
  const hasPosts = !!posts && !!posts.length
  return fetching ? (
    <Loading />
  ) : (
    <Fragment>
      {hasPosts && (
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Post By: {currentUser}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <List className={classes.root} disablePadding>
        {posts.map(post => {
          return <Post post={post} key={post.id.toString()} />
        })}
      </List>
    </Fragment>
  )
}

export default Posts
