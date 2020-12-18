import './css/App.css';
import Layout from './Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
function App() {
  return (
    <>
    <Router>
      <Layout>
      <Switch>
        <Route path='/login'>
          <LogIn></LogIn>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
