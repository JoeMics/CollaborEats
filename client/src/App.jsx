import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Recipe from './pages/Recipe';
import Versions from './pages/Versions';
import Navbar from './components/Navbar';
import RecipeMaster from './pages/RecipeMaster';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        <Route path={ROUTES.RECIPE} component={Recipe} exact />
        <Route path={ROUTES.RECIPEPAGE} component={RecipeMaster} exact />
        <Route path={ROUTES.VERSIONS} component={Versions} exact />
      </Switch>
    </Router>
  );
}

export default App;
