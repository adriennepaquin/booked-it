import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'

const SideStyle = styled.div`
    margin: 20px;
    width: 300px;
    height: 100%;

    .sidebar-links:hover { 
        background-color: #03989e;
    }
    
    a:link {
        text-decoration: none;
        color: black;
    }
    
    a:visited {
        color: black;
    }

    a:hover {
        color: white;
    }
`

function SideBar() {
    return (
        <SideStyle>
            <ListGroup variant="flush">
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="welcome">Home</Link></ListGroup.Item>
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="auditions">My Auditions</Link></ListGroup.Item>
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/addaudition">Add An Audition</Link></ListGroup.Item>            
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/monologues">My Monologues</Link></ListGroup.Item>           
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/addmonologue">Add A Monologue</Link></ListGroup.Item>           
                <ListGroup.Item action variant="dark" className="sidebar-links"><Link to="/allmonologues">Monologues</Link></ListGroup.Item>
            </ListGroup>
            {/* <ListGroup variant="flush">
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="welcome">Home</Link></ListGroup.Item>
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="auditions">My Auditions</Link></ListGroup.Item>
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="/addaudition">Add An Audition</Link></ListGroup.Item>            
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="/monologues">My Monologues</Link></ListGroup.Item>           
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="/addmonologue">Add A Monologue</Link></ListGroup.Item>           
                <ListGroup.Item action variant="light" className="sidebar-links"><Link to="/allmonologues">Monologues</Link></ListGroup.Item>
            </ListGroup> */}
        </SideStyle>
    )
}

export default SideBar