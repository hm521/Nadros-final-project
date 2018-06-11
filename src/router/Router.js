import React from 'react'
import HomePage from '../App'
import Tutorpage from '../Tutor Page/Tutorpage'
import Startlearningnow from '../Start Learning Now/startlearningnow'
import { Switch, Route } from 'react-router-dom'
import SeFunctions from '../chapters/sefunctions.js'
import SeChapters from '../chapters/sechapters';
import Comingsoon from '../coming soon/comingsoon';



const Router = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/tutor' component={Tutorpage}/>
      <Route exact path='/startlearning' component={Startlearningnow }/>
      <Route exact path='/se/chapters/functions' component={SeFunctions}/>
      <Route exact path='/se/chapters' component={SeChapters}/>
    <Route exact path ='/comingsoon' component={Comingsoon}/>
    </Switch>
)

export default Router
