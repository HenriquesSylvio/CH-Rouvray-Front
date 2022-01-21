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
import {useState} from "react";
import {hasAuthenticated} from "./services/AuthApi";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Auth from "./contexts/Auth";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
      <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
          <HashRouter>
              <div className="container-fluid">
                  <Navbar/>
                  <Switch>
                      <Route exact path='/' component={Homepage}/>
                      <Route exact path='/posts' component={Posts}/>
                      <Route exact path='/post/:id' component={Post}/>
                      <Route exact path='/register' component={Register}/>
                      <Route exact path='/login' component={Login}/>
                      <AuthenticatedRoute path='/account' component={Account}/>
                      <AuthenticatedRoute path='/profile' component={Profile}/>
                  </Switch>
              </div>
          </HashRouter>
      </Auth.Provider>
  );
}

export default App;
