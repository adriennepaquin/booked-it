import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div>
            SideBar
            <Link to="/auditions">My Auditions</Link>
            <Link to="/addaudition">Add An Audition</Link>
            <Link to="/monologues">My Monologues</Link>
            <Link to="/addmonologue">Add A Monologue</Link>
            <Link to="/allmonologues">Monologues</Link>
        </div>
    )
}

export default SideBar