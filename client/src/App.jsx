import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Recipe from './pages/Recipe';
import Versions from './pages/Versions';
import Navbar from './components/Navbar';
import RecipeMaster from './pages/RecipeMaster';
import Create from './pages/Create';
import ImageUpload from './pages/ImageUpload';

import Edit from './pages/Edit';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        <Route path={ROUTES.RECIPE} component={Recipe} exact />
        <Route path={ROUTES.RECIPEPAGE} component={RecipeMaster} exact />
        <Route path={ROUTES.USERRECIPE} component={Recipe} exact />
        <Route path={ROUTES.VERSIONS} component={Versions} exact />
        <Route path={ROUTES.VERSIONS_PAGE} component={Versions} exact />
        <Route path={ROUTES.CREATE} component={Create} exact />
        <Route path={ROUTES.IMAGE_UPLOAD} component={ImageUpload} exact />
        <Route path={ROUTES.EDIT} component={Edit} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
