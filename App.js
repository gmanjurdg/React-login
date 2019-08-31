import React, { Component } from 'react'
import './App.css';
import UserList from './Component/Demo/UserList';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      "Username": "hruday@gmail.com",
      "Password": "hruday123"
    };
    this.Login = this.Login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  Login() {
    const { Username, Password } = this.state;

    if (Username === 'hruday@gmail.com' && Password === 'hruday123') {
            document.write("Login success");
    }
    else {
      alert("UserName or password Incorrect");
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="myForm">
        <div className="formField">
          <label>UserName: </label>
          <input type="text" name="Username" value={this.state.name} placeholder="userName" onChange={this.onChange} /><br />
          <label>password: </label>
          <input type="password" name="Password" value={this.state.password} placeholder="Password" onChange={this.onChange} /><br />
          <button onClick={this.Login} className="myButton">Login</button><br />
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <h1> User Login</h1>
      <Login />
    </div>

  );
}
export default App; 
