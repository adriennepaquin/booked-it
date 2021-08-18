import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

function NavBar({ user, setUser, setAuditions, setMyMonos }) {

    function handleLogOut(){
        localStorage.removeItem("token")
        setUser(null)
        console.log('click')
        console.log(user)
        setAuditions([])
        setMyMonos([])
        alert("See you soon!")
    }
    return (
        <Navbar bg="light" expand="lg">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <img src="images/header_logo.png" alt="Booked It! Logo" height="75"/>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {!user ? (
                        <>
                        <li class="nav-item">
                            <NavLink to="/signup">SignUp</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/login">LogIn</NavLink>
                        </li>
                        </>
                        ) : (
                        <>
                        <h2 className="name" class="nav-link">Logged in as {user.username}</h2>
                        <li class="nav-item">
                            <NavLink to="/" onClick={handleLogOut}>Log Out</NavLink>
                        </li>
                        </>
                        )}
                    </ul>
                </div>
           </div> 
        </Navbar>
    )
}

export default NavBar