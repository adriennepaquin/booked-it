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
        <nav id="navbar">
            <div>
                <img className="links" src="images/header_logo.png" alt="Booked It! Logo" height="75"/>
                <NavLink className="links" to="/">Home</NavLink>
                {!user ? (
                <>            
                    <NavLink className="links" to="/signup">SignUp</NavLink>                    
                    <NavLink className="links" to="/login">LogIn</NavLink>
                </>
                ) : (
                <>
                    <h2>Logged in as {user.username}</h2>
                    <NavLink className="links" to="/" onClick={handleLogOut}>Log Out</NavLink>        
                </>
                )}            
           </div> 
        </nav>
    )
}

export default NavBar