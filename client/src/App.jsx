import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Recipe from './pages/Recipe';
import Versions from './pages/Versions';
import RecipeMaster from './pages/RecipeMaster';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        <Route path={ROUTES.RECIPE} component={Recipe} exact />
        <Route path={ROUTES.RECIPEPAGE} component={RecipeMaster} exact />
        <Route path={ROUTES.USERRECIPE} component={Recipe} exact />
        <Route path={ROUTES.VERSIONS} component={Versions} exact />
        <Route path={ROUTES.VERSIONS_PAGE} component={Versions} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
