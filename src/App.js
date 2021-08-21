import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}></Route>

      </Router>
    </div>
  );
}

export default App;
