import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import { Grid, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  small: {
    padding: 30,
  },
  full: {
    padding: 30,
    height: '100vh',
  },
}))

const Loading = ({ show, fullHeight }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={fullHeight ? classes.full : classes.small}
    >
      <CircularProgress disableShrink={show} variant="indeterminate" />
    </Grid>
  )
}

Loading.propTypes = {
  show: PropTypes.bool,
  fullHeight: PropTypes.bool,
}

Loading.defaultProps = {
  show: true,
  fullHeight: true,
}

export default Loading
