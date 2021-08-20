import { useHistory } from 'react-router-dom'
import DisplayMonologue from './DisplayMonologue'
import SearchMono from './SearchMono'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

const AllMonoStyle = styled.div`
    padding-bottom: 40px;

    h3 {
        font-size: 35px;
        color: white;
    }
    #mono-header { 
        color: white;
        margin: 15px;
    }
`

function AllMonologues({ monos, searchMono, setSearchMono, filterMono, setFilterMono }) {
    const history = useHistory()
    // console.log(monos)

    const displayMonos = monos.map(mono => {
        // console.log(mono)
        return <DisplayMonologue mono={mono}/>
    })

    function handleClick(){
        history.push('/addmonologue')
    }

    return (
        <AllMonoStyle>
            <div id="mono-header">
                <h3>All Monologues</h3>
                <SearchMono searchMono={searchMono} onMonoChange={setSearchMono}/>
                <Form>
                    <Form.Select aria-label="Default select example">
                        <option>Filter Alphabetically By:</option>
                        <option value="play">Play Title</option>
                        <option value="playwright">Playwright</option>
                        <option value="role">Role</option>
                    </Form.Select>
                </Form>
            </div>
            <Accordion defaultActiveKey="0" flush>
                {displayMonos}
            </Accordion>
            <button className="button" onClick={handleClick}>Add a Monologue</button>
        </AllMonoStyle>
    )
}

export default AllMonologues