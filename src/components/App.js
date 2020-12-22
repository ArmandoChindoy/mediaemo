import './css/App.css';
import Layout from './Layout';
import Page404 from "../pages/404";
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
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/' component={Home}/>
        <Route component={Page404}/>
      </Switch>
      </Layout>
    </Router>
    </>
  );
}

export default App;
