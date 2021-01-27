import About from './components/About'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <>
     
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          </Switch>
    </Router>
    </>
  );
 
}

export default App;
