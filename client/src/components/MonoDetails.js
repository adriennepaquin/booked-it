import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function MonoDetails({ mono, pdf}) {
    
    return (
        <div>
            {/* <img src={`http://localhost:3000/${pdf}`}/> */}
            {/* <embed src={pdf} width="1000px"/> */}
            {/* <a href="#" onclick="window.open(pdf, '_blank', 'fullscreen=yes'); return false;">MyPDF</a> */}
            <object data={`http://localhost:3000/${pdf}`} type="application/pdf" width="100%" height="100%">
                <p>Click here to view or download a PDF of the monologue: <a href={`http://localhost:3000/${pdf}`} target='_blank' rel='noopener noreferrer'>{mono.role}</a></p>
            </object>
        </div>
    )
}

export default MonoDetails