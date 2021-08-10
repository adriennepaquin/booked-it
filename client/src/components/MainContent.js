import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './LogIn'
import PageContent from './PageContent'

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
          </Switch>
      </div>
    );
  }
  
  export default MainContent;