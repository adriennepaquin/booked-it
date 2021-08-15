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

    const [user, setUser] = useState(null)
    const [auditions, setAuditions] = useState([])
    const [monos, setMonos] = useState([])
    const [myMonos, setMyMonos] = useState([])
    const [locations, setLocations] = useState([])
    const [castings, setCastings] = useState([])

    // fetch autologin
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUser({id: data.id,
                name: data.name,
                username: data.username
            })
        })
    }, [])

    console.log(user)

    return (
      <div>
          <NavBar user={user} setUser={setUser} setAuditions={setAuditions} setMyMonos={setMyMonos}/>
          <Switch>
                <Route exact path="/">
                    {user ? <Redirect to="/welcome"/> : <Home />}
                </Route>
                <Route path="/signup">
                    <SignUp setUser={setUser}/>
                </Route>
                <Route path="/login">
                    <LogIn setUser={setUser}/>
                </Route>
                <Route path="/welcome">
                    {!user ? <Redirect to="/welcome"/> : <><Welcome user={user} auditions={auditions} monos={monos}setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} setCastings={setCastings}/></>}
                </Route>
                <Route path="/auditions">
                    {!user ? <Redirect to="/"/> : <><SideBar /><Auditions auditions={auditions}/></>}
                </Route>
                <Route path="/addaudition">
                    {!user ? <Redirect to="/"/> : <><SideBar /><AddAuditionForm user={user} auditions={auditions} setAuditions={setAuditions} locations={locations} castings={castings} myMonos={myMonos}/></>}
                </Route>
                <Route path="/monologues">
                    {!user ? <Redirect to="/"/> : <><SideBar /><Monologues myMonos={myMonos}/></>}
                </Route>
                <Route path="/allmonologues">
                    {!user ? <Redirect to="/"/> : <><SideBar /><AllMonologues monos={monos}/></>}
                </Route>
                <Route path="/addmonologue">
                    {!user ? <Redirect to="/"/> : <><SideBar /><AddMonologueForm/></>}
                </Route>
              <Route path="*" component={NotFound}/>
          </Switch>
          <Footer />
      </div>
    );
  }
  
  export default MainContent;