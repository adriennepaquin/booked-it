import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function MonoDetails({ mono, pdf}) {
    
    return (
        <div>
            PDF details
            <img src={`http://localhost:3000/${pdf}`}/>
            
        </div>
    )
}

export default MonoDetails