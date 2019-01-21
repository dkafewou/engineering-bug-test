import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';
// Import LoginForm component
import LoginForm from "../components/LoginForm"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: true,
      showCheckmark: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    // Bind the method to enable this inside it scope
    this.handleLogin = this.handleLogin.bind(this)
  }

  // Remove usage of refs to call method
  // Fix logic
  handleLogin() {
    this.setState({
      showLoginForm: false,
      showCheckmark: true
    });
  }

  handleLogout() {
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    const { showLoginForm, showCheckmark } = this.state

    return (
      <div className='app'>
        <NavBar ref='navbutton' handleLogout={this.handleLogout} showLogoutButton={!showLoginForm}/>
        <div className={showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={showCheckmark === true ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
