import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import { HashRouter, Route, Switch } from "react-router-dom";
import Post from './pages/posts/Post'
import Posts from './pages/posts/Posts'
import Account from './pages/users/Account'
import Login from './pages/users/Login'
import Profile from './pages/users/Profile'
import Register from './pages/users/Register'
import Homepage from "./pages/Homepage";
import Navbar from './components/Navbar'

function App() {
  return (
      <HashRouter>
          <div className="container-fluid">
              <Navbar/>
              <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route exact path='/posts' component={Posts}/>
                  <Route exact path='/post/:id' component={Post}/>
                  <Route exact path='/account' component={Account}/>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/profile' component={Profile}/>
              </Switch>
          </div>
      </HashRouter>
  );
}

export default App;
