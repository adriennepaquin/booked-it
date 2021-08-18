import { NavLink } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'

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
        <nav>
            <div>
                <div>
                    <img src="images/header_logo.png" alt="Booked It! Logo" height="75"/>
                </div>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div>
                    {/* <ul> */}
                        {/* <li> */}
                            <NavLink to="/">Home</NavLink>
                        {/* </li> */}

                        {!user ? (
                        <>
                        {/* <li> */}
                            <NavLink to="/signup">SignUp</NavLink>
                        {/* </li> */}
                        {/* <li> */}
                            <NavLink to="/login">LogIn</NavLink>
                        {/* </li> */}
                        </>
                        ) : (
                        <>
                        <h2>Logged in as {user.username}</h2>
                        {/* <li> */}
                            <NavLink to="/" onClick={handleLogOut}>Log Out</NavLink>
                        {/* </li> */}
                        </>
                        )}
                    {/* </ul> */}
                </div>
           </div> 
        </nav>
    )
}

export default NavBar