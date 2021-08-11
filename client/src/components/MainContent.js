import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Auditions from './Auditions'
import Monologues from './Monologues'
import AllMonologues from './AllMonologues'
import PageContent from './PageContent'
import NotFound from './NotFound'

function MainContent() {

    return (
      <div>
          <NavBar />
          <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/welcome">
                    <PageContent />
                    {/* {loggedIn ? <PageContent /> : <Redirect to="/"/>} */}
                </Route>
                <Route path="/auditions">
                    <Auditions />
                    {/* {loggedIn ? <PageContent /> : <Redirect to="/"/>} */}
                </Route>
                <Route path="/monologues">
                    <Monologues />
                    {/* {loggedIn ? <PageContent /> : <Redirect to="/"/>} */}
                </Route>
                <Route path="/allmonologues">
                    <AllMonologues />
                    {/* {loggedIn ? <PageContent /> : <Redirect to="/"/>} */}
                </Route>
              <Route path="*" component={NotFound}/>
          </Switch>
          <Footer />
      </div>
    );
  }
  
  export default MainContent;