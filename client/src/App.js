import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import FormCreateBurger from './views/FormCreateBurger';
import OneBurger from './views/OneBurger';
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/admin/dashboard" component={Dashboard}/>
  <Route exact path="/admin/burgers-form/create" component={FormCreateBurger}/>
  <Route exact path="/burgers/:id" component={OneBurger}/>
  <Route exact path="*" component={NotFound}/>
</Switch>  
    </div>
  );
}

export default App;
