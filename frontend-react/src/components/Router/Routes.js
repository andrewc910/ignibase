import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignUp from '../pages/SignUp';

const Routes = (props) => {
  const { classes } = props

  return(
    <Switch>
      <Route
        exact path='/'
        render={(props) => <Home {...props} classes={classes} />}
      />
      <Route
        exact path='/home'
        render={(props) => <Contact {...props} classes={classes} />}
      />
      <Route
        exact path='/about'
        render={(props) => <About {...props} classes={classes} />}
      />
      <Route
        exact path='/signup'
        render={(props) => <SignUp {...props} />}
      />
    </Switch>
  )
}

export default Routes