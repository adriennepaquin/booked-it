import { Route } from 'react-router-dom'
import SideBar from './SideBar'
import Footer from './Footer'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import NotFound from './NotFound'
import Welcome from './Welcome'

function PageContent() {
    return (
        <div>
            PageContent
            <SideBar />
            {/* this second routing is not working */}
            <Route path="/auditions">
                <Auditions />
            </Route>
            <Route path="/monologues">
                <Monologues />
            </Route>
            <Route path="/allmonologues">
                <AllMonologues />
            </Route>
            <Route path="*" component={NotFound}/>
            <Footer />
        </div>
    )
}

export default PageContent