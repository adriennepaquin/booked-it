import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
// import Nav from 'react-bootstrap/Nav'

const SideStyle = styled.div`
    /* background-color: grey; */
    margin: 20px;
    width: 300px;
    height: 100%;
`

function SideBar({ search, setSearch }) {

    // function clearSearch(){
    //     if (search !== "") {
    //         setSearch("")
    //     }
    // }
    // console.log(setSearch)
    return (
        <SideStyle>
            <ListGroup variant="flush">
                <ListGroup.Item as="a" action variant="dark" href="/auditions">My Auditions</ListGroup.Item>
                <ListGroup.Item as="a" action variant="dark" href="/addaudition">Add An Audition</ListGroup.Item>            
                <ListGroup.Item as="a" action variant="dark" href="/monologues">My Monologues</ListGroup.Item>           
                <ListGroup.Item as="a" action variant="dark" href="/addmonologue">Add A Monologue</ListGroup.Item>           
                <ListGroup.Item as="a" action variant="dark" href="/allmonologues">Monologues</ListGroup.Item>
            </ListGroup>
        </SideStyle>
    )
}

export default SideBar

{/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link to="/auditions">My Auditions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/addaudition">Add An Audition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/monologues">My Monologues</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/addmonologue">Add A Monologue</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/allmonologues">Monologues</Nav.Link>
            </Nav.Item>
        </Nav> */}