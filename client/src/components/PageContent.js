import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MainContent from './MainContent'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import NotFound from './NotFound'
import Container from 'react-bootstrap/Container'

function PageContent() {
    const [user, setUser] = useState(null)
    const [auditions, setAuditions] = useState([])
    const [monos, setMonos] = useState([])
    const [myMonos, setMyMonos] = useState([])
    const [locations, setLocations] = useState([])
    const [castings, setCastings] = useState([])
    const [search, setSearch] = useState("")
    const [searchMono, setSearchMono] = useState("")
    const [filterMono, setFilterMono] = useState("")

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
            // console.log(data)
            setUser({id: data.id,
                name: data.name,
                username: data.username
            })
        })
    }, [])
    
    // fetch all the public monologues
    useEffect(() => {
        fetch(`http://localhost:3000/monologues`)
        .then(res => res.json())
        .then(data => {
            setMonos(data)
        })
    }, [])

    // put auditions in descending date order
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
    const filteredAuditions = sortAuditions.filter(audition => {
        return (audition.producer.toLowerCase().includes(search.toLowerCase()) || audition.casting.agency.toLowerCase().includes(search.toLowerCase()) || audition.people.some(person => person.name.toLowerCase().includes(search.toLowerCase())))
    })

    // put monologues in alphabetical order by play name
    function compare2(a, b) {
        const dateA = a.play.toLowerCase()
        const dateB = b.play.toLowerCase()

        let comparison = 0
        if (dateA > dateB) {
            comparison = 1
        } else if (dateA < dateB) {
            comparison = -1
        }
        return comparison
    }
    const sortMyMonos = myMonos.sort(compare2)
    const sortMonos = monos.sort(compare2)
    const filteredMonos = sortMonos.filter(mono => {
        return (mono.play.toLowerCase().includes(searchMono.toLowerCase()) || mono.playwright.toLowerCase().includes(searchMono.toLowerCase()) || mono.role.toLowerCase().includes(searchMono.toLowerCase()) || mono.first_line.toLowerCase().includes(searchMono.toLowerCase()))
    })

    return (
      <div>
            <NavBar user={user} setUser={setUser} setAuditions={setAuditions} setMyMonos={setMyMonos}/>
            <Container fluid={true}>
                <Switch>
                    <Route exact path="/">
                        {!user ? <Home monos={monos}/> : <Redirect to="/welcome"/> }
                    </Route>
                    <Route path="/signup">
                        <SignUp setUser={setUser}/>
                    </Route>
                    <Route path="/login">
                        <LogIn setUser={setUser}/>
                    </Route>
                    <Route>
                        {user ? <MainContent user={user} setUser={setUser} auditions={auditions} monos={monos} setMonos={setMonos} myMonos={sortMyMonos} setMyMonos={setMyMonos} setAuditions={setAuditions} locations={locations} setLocations={setLocations} castings={castings} setCastings={setCastings} search={search} setSearch={setSearch} searchMono={searchMono} setSearchMono={setSearchMono} filterMono={filterMono} setFilterMono={setFilterMono} filteredAuditions={filteredAuditions} filteredMonos={filteredMonos}/> : <Redirect to="/"/>}
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Container>
            <Footer />
      </div>
    );
  }
  
  export default PageContent