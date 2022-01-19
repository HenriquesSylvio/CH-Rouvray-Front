import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Post from './components/posts/Post'
import Posts from './components/posts/Posts'
import Account from './components/users/Account'
import Login from './components/users/Login'
import Profile from './components/users/Profile'
import Register from './components/users/Register'
import Homepage from "./components/Homepage";

function App() {
  return (
      <HashRouter>
          <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/posts' component={Posts}/>
              <Route exact path='/post:id' component={Post}/>
              <Route exact path='/account' component={Account}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
            </Switch>
          </div>
      </HashRouter>
  );
}

export default App;
