import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">LogIn</NavLink>
        </div>
    )
}

export default NavBar