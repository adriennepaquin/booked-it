import { NavLink } from 'react-router-dom'

function NavBar({ user, setUser }) {

    async function handleLogOut(){
        const res = await fetch(`http://localhost:3000/logout`, {
                method: 'DELETE'
            })
            if (res.ok){
                setUser({})
                alert("See you soon!")
            }
    }
    return (
        <div>
            <NavLink to="/">Home</NavLink>

            {Object.keys(user).length === 0 ?
            <>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">LogIn</NavLink>
            </>
            :
            <>
            <NavLink to="/" onClick={handleLogOut}>Log Out</NavLink>
            <h2 className="name">Logged in as {user.username}</h2>
            </>
            }
            
        </div>
    )
}

export default NavBar