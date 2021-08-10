import { Route, Switch } from 'react-router-dom'
import SideBar from './SideBar'
import Footer from './Footer'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'

function PageContent() {
    return (
        <div>
            PageContent
            <SideBar />
            <Switch>
                <Route path="/auditions">
                    <Auditions />
                    {/* {loggedIn ? <Auditions /> : <Redirect to="/"/>} */}
                </Route>
                <Route path="/monologues">
                    <Monologues />
                    {/* {loggedIn ? <Monologues /> : <Redirect to="/"/>} */}
                </Route>
                <Route path="/allmonologues">
                    <AllMonologues />
                    {/* {loggedIn ? <AllMonologues /> : <Redirect to="/"/>} */}
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default PageContent