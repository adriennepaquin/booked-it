function MonoDetails({ mono, pdf}) {
    // console.log(pdf)
    
    return (
        <div>
            {pdf
            ? (
                <object data={`http://localhost:3000/${pdf}`} type="application/pdf" width="100%" height="100%">
                <p>Click here to view or download a PDF of the monologue: <a href={`http://localhost:3000/${pdf}`} target='_blank' rel='noopener noreferrer'>{mono.role}</a></p>
                </object>
            ) : (
                <div>
                    No PDF available!
                </div>
            )

            }
            
        </div>
    )
}

export default MonoDetails