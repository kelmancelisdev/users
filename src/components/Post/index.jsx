import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { Typography, ListItemText, ListItem } from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import Comments from '../Comments'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const Post = ({ post }) => {
  const classes = useStyles()
  const { title, body } = post
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={title}
          secondary={
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {body}
              </Typography>
            </Fragment>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {open && <Comments open={open} id={post.id} />}
    </Fragment>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default Post
