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
    const [search, setSearch] = useState("")

    // fetch autologin
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => {
            return res.json().then((data) => {
              if (res.ok) {
                return data
              } else {
                throw data
              }
            })
          })
        .then(data => {
            console.log(data)
            setUser({id: data.id,
                name: data.name,
                username: data.username
            })
        })
    }, [])

    function compare(a, b) {
        const dateA = a.date
        const dateB = b.date

        let comparison = 0
        if (dateA > dateB) {
            comparison = -1
        } else if (dateA < dateB) {
            comparison = 1
        }
        return comparison
    }
    const sortAuditions = auditions.sort(compare)
    console.log(sortAuditions)

    const filteredAuditions = sortAuditions.filter(audition => {
        return (audition.producer.toLowerCase().includes(search.toLowerCase()) || audition.casting.agency.toLowerCase().includes(search.toLowerCase()) || audition.people.some(person => person.name.toLowerCase().includes(search.toLowerCase())))
    })
    // console.log(peopleAuditions)

    // let filteredAuditions
    // if (peopleAuditions.length !== 0) {
    //     console.log("defined")
    //     console.log(peopleAuditions)
    //     filteredAuditions = peopleAuditions.filter(audition => {
    //         audition.people.filter(person => {
    //             return (person.name.toLowerCase().includes(search.toLowerCase()))
    //         })
    //     })
    // } else {
    //     console.log("undefined")
    //     filteredAuditions = peopleAuditions
    // }
    console.log(filteredAuditions)

    // return (audition.producer.toLowerCase().includes(search.toLowerCase()) || audition.casting.agency.toLowerCase().includes(search.toLowerCase()) || audition.people.forEach(person => person.name.toLowerCase().includes(search.toLowerCase())))
    // return (audition.producer.toLowerCase().includes(search.toLowerCase()) || audition.casting.agency.toLowerCase().includes(search.toLowerCase()))

    // return audition.people.forEach(person => person.name.toLowerCase()).includes(search.toLowerCase())

    // console.log(user)
    // console.log(!user)

    return (
      <div>
          <NavBar user={user} setUser={setUser} setAuditions={setAuditions} setMyMonos={setMyMonos}/>
            <Switch>
                    <Route exact path="/">
                        {!user ? <Home /> : <Redirect to="/welcome"/> }
                    </Route>
                    <Route path="/signup">
                        <SignUp setUser={setUser}/>
                    </Route>
                    <Route path="/login">
                        <LogIn setUser={setUser}/>
                    </Route>
                    <Route path="/welcome">
                        {!user ? <Redirect to="/"/> : <><Welcome user={user} auditions={auditions} monos={monos}setMonos={setMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} setCastings={setCastings}/></> }
                    </Route>
                    <Route path="/auditions">
                        {!user ? <Redirect to="/"/> : <><SideBar /><Auditions auditions={filteredAuditions} setAuditions={setAuditions} user={user} search={search} setSearch={setSearch}/></>}
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
                        {!user ? <Redirect to="/"/> : <><SideBar /><AddMonologueForm user={user} myMonos={myMonos} setMyMonos={setMyMonos}/></>}
                    </Route>
                <Route path="*" component={NotFound}/>
            </Switch>
          <Footer />
      </div>
    );
  }
  
  export default MainContent;