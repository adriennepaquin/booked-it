import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import Welcome from './Welcome'
import SideBar from './SideBar'
import NotFound from './NotFound'

function MainContent() {

    const [user, setUser] = useState({})
    const [auditions, setAuditions] = ([])

    useEffect(() => {

    })

    return (
      <div>
          <NavBar user={user} setUser={setUser}/>
          <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    <SignUp setUser={setUser}/>
                </Route>
                <Route path="/login">
                    <LogIn setUser={setUser}/>
                </Route>
                <Route path="/welcome">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><Welcome user={user}/></>}
                </Route>
                <Route path="/auditions">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><Auditions /></>}
                </Route>
                <Route path="/monologues">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><Monologues /></>}
                </Route>
                <Route path="/allmonologues">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><AllMonologues /></>}
                </Route>
              <Route path="*" component={NotFound}/>
          </Switch>
          <Footer />
      </div>
    );
  }
  
  export default MainContent;