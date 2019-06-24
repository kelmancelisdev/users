import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core/'
import ImageIcon from '@material-ui/icons/Image'
import { makeStyles } from '@material-ui/core/styles'

import { findPosts, findUsers, currentUser } from '../../store/actions/actions'

import Loading from '../Loading'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar: {
    backgroundColor: 'crimson',
  },
}))

const Users = () => {
  const classes = useStyles()
  const { users, fetching } = useSelector(state => state.usersReducers)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findUsers())
  }, [dispatch])

  const handleUser = (id, username) => {
    dispatch(findPosts(id))
    dispatch(currentUser(username))
  }

  return fetching ? (
    <Loading />
  ) : (
    <List className={classes.root} disablePadding>
      {users.map(({ id, name, username, email }) => {
        return (
          <Fragment key={`${name}${username}`}>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => handleUser(id, username)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {username}
                    </Typography>
                    {` - ${email}`}
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        )
      })}
    </List>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
    })
  ),
}

Users.defaultProps = {
  users: [],
}

export default Users
