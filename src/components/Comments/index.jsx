import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import {
  Typography,
  Collapse,
  ListItemText,
  ListItem,
  List,
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

import Loading from '../Loading'
import { findCommets } from '../../store/actions/actions'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },

  icon: {
    marginRight: theme.spacing(2),
  },
}))

const Comments = ({ open, id }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.postsReducers)

  const { comments } = posts.filter(post => post.id === id).shift()

  useEffect(() => {
    dispatch(findCommets(id))
  }, [dispatch, id])

  return comments === undefined ? (
    <Loading fullHeight={false} />
  ) : (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {comments.map(comment => (
          <ListItem
            button
            className={classes.nested}
            key={comment.id.toString()}
          >
            <Icon className={classes.icon} color="primary">
              comment_dots
            </Icon>
            <ListItemText
              primary={comment.email}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {comment.name}
                  </Typography>

                  {`-- ${comment.body}`}
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Collapse>
  )
}

Comments.propTypes = {
  open: PropTypes.bool,
}

Comments.defaultProps = {
  open: false,
}

export default Comments
