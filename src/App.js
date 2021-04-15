import React from 'react';
import Logo from "./assets/logo.svg";
import Form from "./components/Form";
import {Route} from "react-router-dom";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="" className="logo"/>
      <Route exact path="/" render={()=>(
        <div className="u-padding-top-large">
              <Form/>  
        </div>
      )}/>

      <Route exact path="/create" component={Create}/>
    </div>
  );
}

export default App;
