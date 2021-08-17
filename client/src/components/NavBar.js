import { NavLink } from 'react-router-dom'

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="images/header_logo.png" alt="Booked It! Logo" height="85"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink class="nav-item" to="/">Home</NavLink>

                        {!user ? (
                        <>
                        <NavLink class="nav-item" to="/signup">SignUp</NavLink>
                        <NavLink class="nav-item" to="/login">LogIn</NavLink>
                        </>
                        ) : (
                        <>
                        <h2 className="name" class="nav-item">Logged in as {user.username}</h2>
                        <NavLink class="nav-item" to="/" onClick={handleLogOut}>Log Out</NavLink>
                        </>
                        )}
                    </ul>
                </div>
           </div> 
        </nav>
    )
}

export default NavBar