import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import DisplayAudition from './DisplayAudition'
import AddAuditionForm from './AddAuditionForm'

function Auditions() {

    // const 
    return (
        <div>
            <SideBar />
            Auditions
            <DisplayAudition />
            <AddAuditionForm />
        </div>
    )
}

export default Auditions