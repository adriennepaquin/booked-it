import { Route, Switch } from 'react-router-dom'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import NotFound from './NotFound'

function Welcome() {
    return (
        <div>
            Welcome
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

        </div>
    )
}

export default Welcome