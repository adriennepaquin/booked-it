import { Link } from 'react-router-dom'

function SideBar({ search, setSearch }) {

    // function clearSearch(){
    //     if (search !== "") {
    //         setSearch("")
    //     }
    // }
    console.log(setSearch)
    return (
        <div>
            SideBar
            <Link to="/auditions">My Auditions</Link><br></br>
            <Link to="/addaudition">Add An Audition</Link><br></br>
            <Link to="/monologues">My Monologues</Link><br></br>
            <Link to="/addmonologue">Add A Monologue</Link><br></br>
            <Link to="/allmonologues">Monologues</Link>
        </div>
    )
}

export default SideBar