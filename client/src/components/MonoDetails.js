function MonoDetails({ mono, pdf}) {
    
    return (
        <div>
            <object data={`http://localhost:3000/${pdf}`} type="application/pdf" width="100%" height="100%">
                <p>Click here to view or download a PDF of the monologue: <a href={`http://localhost:3000/${pdf}`} target='_blank' rel='noopener noreferrer'>{mono.role}</a></p>
            </object>
        </div>
    )
}

export default MonoDetails