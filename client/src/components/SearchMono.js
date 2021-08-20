import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const SearchStyle = styled.div`
    .search-header {
        background-color: black;
    }
`

function SearchMono({ searchMono, onMonoChange }){
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
                            placeholder="Search by Play/Playwright/Role/First Line..."
                            value={searchMono}
                            onChange={(e) => onMonoChange(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            
        </SearchStyle>
    )
}
export default SearchMono