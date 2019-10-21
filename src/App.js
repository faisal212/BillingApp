import React,{useEffect} from 'react';
import logo from './logo.svg';
import base64 from 'base-64';
import './App.css';
function App() {
  const user = "ssp-root";
  const password = "Lahore@007";

  const getXml = () => {
    fetch('https://portal.onairtel.com/xmlapi/xmlapi', {
      method: 'POST',
      headers: new Headers( { 'Authorization': 'Basic ' + base64.encode(user + ":" + password)} ) ,
      body: '<?xml version="1.0"?> <methodCall> <methodName>listCustomers</methodName><params><param><value><struct> <member> </member> </struct></value></param> </params> </methodCall>' 
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <button onClick={getXml}
        >Get xml</button>
      </header>
    </div>
  );
}

export default App;
