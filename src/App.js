import React from 'react';
import Logo from "./assets/logo.svg";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="" className="logo"/>
      <div className="u-padding-top-large">
        <Form/>
        
      </div>
    </div>
  );
}

export default App;
