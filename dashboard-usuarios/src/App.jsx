// src/App.jsx
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" Component={Home}/>
          <Route path="/perfil" Component={Perfil}/>
        </Switch>
    </Router>
  );
}

export default App;