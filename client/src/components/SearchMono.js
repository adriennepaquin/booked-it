import Form from 'react-bootstrap/Form'
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