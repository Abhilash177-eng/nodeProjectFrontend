import Signup from './signup';
import Login from './login';
import Home from './home';
import Mymails from './mymails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Signup} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/mymail" component={Mymails} />
    </Router>
  )
}
export default App;