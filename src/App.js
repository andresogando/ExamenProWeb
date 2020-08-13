import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'
import Login from './components/Login'
import fireDb from './firebase';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fireDb.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div className="App">
       {this.state.user ?  (<Contacts/>) : (<Login/>)}
     </div>
      );
     }
    }

 export default App;



