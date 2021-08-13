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
import AddAuditionForm from './AddAuditionForm'
import AddMonologueForm from './AddMonologueForm'

function MainContent() {

    const [user, setUser] = useState({})
    const [auditions, setAuditions] = useState([])
    const [monos, setMonos] = useState([])
    const [myMonos, setMyMonos] = useState([])

    // // fetch this user's auditions
    // useEffect(() => {
    //     fetch(`http://localhost:3000/user_auditions/${user.id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setAuditions(data)
    //     })
    // }, [])

    // // fetch all the public monologues
    // useEffect(() => {
    //     fetch(`http://localhost:3000/monologues`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setMonos(data)
    //     })
    // }, [])

    // // fetch this user's monologues
    // useEffect(() => {
    //     fetch(`http://localhost:3000/monologues/${user.id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setMyMonos(data)
    //     })
    // }, [])

    console.log(user)

    return (
      <div>
          <NavBar user={user} setUser={setUser} setAuditions={setAuditions} setMyMonos={setMyMonos}/>
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
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><Welcome user={user} auditions={auditions} monos={monos}setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions}/></>}
                </Route>
                <Route path="/auditions">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><Auditions auditions={auditions}/></>}
                </Route>
                <Route path="/addaudition">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><AddAuditionForm user={user} auditions={auditions}/></>}
                </Route>
                <Route path="/monologues">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><Monologues myMonos={myMonos}/></>}
                </Route>
                <Route path="/allmonologues">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><AllMonologues monos={monos}/></>}
                </Route>
                <Route path="/addmonologue">
                    {Object.keys(user).length === 0 ? <Redirect to="/"/> : <><SideBar /><AddMonologueForm/></>}
                </Route>
              <Route path="*" component={NotFound}/>
          </Switch>
          <Footer />
      </div>
    );
  }
  
  export default MainContent;