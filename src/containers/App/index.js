import React from 'react'
import {
  AppBar,
  CssBaseline,
  Container,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core/'
import Users from '../../components/Users'
import Posts from '../../components/Posts'

function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Users typicode
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Grid container justify="space-between" spacing={2}>
              <Grid lg={3} item>
                <Users />
              </Grid>
              <Grid lg={9} item>
                <Posts />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
