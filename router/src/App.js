import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Friend from './components/Friend/Friend';
import Friends from './components/Friends/Friends';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'> 
            <Home></Home>
          </Route>
          <Route path='/about'> 
           <About></About>
          </Route>
          <Route path='/friend'> 
            <Friends></Friends>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
