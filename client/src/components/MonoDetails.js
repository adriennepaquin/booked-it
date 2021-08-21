import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function MonoDetails({ mono, pdf}) {
    
    return (
        <div>
            PDF details
            <img src={`http://localhost:3000/${pdf}`}/>
            {/* <embed src={pdf} width="1000px"/> */}
            
        </div>
    )
}

export default MonoDetails