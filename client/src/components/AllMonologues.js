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

function AllMonologues({ user, monos, searchMono, setSearchMono, filterMono, setFilterMono, search, setSearch }) {
    const history = useHistory()

    setSearch("")
    
    const displayMonos = monos.map(mono => {
        return <DisplayMonologue user={user} mono={mono} key={mono.role}/>
    })

    function handleClick(){
        history.push('/addmonologue')
    }

    // function handleChange(e){
    //     console.log(e.target.value)
    //     console.log("click")
    //     setFilterMono(e.target.value)
    // }

    return (
        <AllMonoStyle>
            <div id="mono-header">
                <h3>All Monologues</h3>
                <SearchMono searchMono={searchMono} onMonoChange={setSearchMono}/>
            </div>
            <Accordion defaultActiveKey="0" flush>
                {displayMonos}
            </Accordion>
            <button className="button" onClick={handleClick}>Add a Monologue</button>
        </AllMonoStyle>
    )
}

export default AllMonologues