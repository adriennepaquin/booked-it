import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const SearchStyle = styled.div`
    .search-header {
        background-color: black;
    }
`

function Search({ search, onSearchChange }){
    return (
        <SearchStyle>
        
                <Form>
                    <Form.Group>
                        {/* <Form.Label htmlFor="search">
                            <div id="search-header">Search by Producer/Casting/People in the Room: </div>
                        </Form.Label> */}
                        <Form.Control
                            type="text"
                            id="search"
                            placeholder="Search by Producer/Casting/People..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            
        </SearchStyle>
    )
}
export default Search