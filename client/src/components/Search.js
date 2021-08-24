import Form from 'react-bootstrap/Form'
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