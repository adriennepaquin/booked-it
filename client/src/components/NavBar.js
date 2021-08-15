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
        <div>
            <NavLink to="/">Home</NavLink>

            {!user ? (
            <>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">LogIn</NavLink>
            </>
            ) : (
            <>
            <NavLink to="/" onClick={handleLogOut}>Log Out</NavLink>
            <h2 className="name">Logged in as {user.username}</h2>
            </>
            )}
            
        </div>
    )
}

export default NavBar