import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Dashboard";
import {Switch, Route } from "react-router-dom";
import Home from "./Home/index"
function App() {
  const [isLogin,setIslogin] = useState(false);
  const handelLogin=()=>{
    setIslogin(true)
  }
  return ( 
  <BrowserRouter> 
    <div className="App">
      {
        isLogin ? <><Switch>
        <Route exact path="/home">
            <Home/>
         </Route></Switch></>:  <Login LoginFun={handelLogin}/>
      }
    </div> 
  </BrowserRouter> );
{/* <>
<Login></Login></> */}
  
}

export default App;
