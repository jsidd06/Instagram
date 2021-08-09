import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBarScreen from "./Components/NavBarScreen/NavBarScreen";
import ServicesOption from "./views/ServicesOption/ServicesOption";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import HeaderScreen from "../src/Components/HeaderScreen/HeaderScreen"
import LogInScreen from "./Components/LogInScreen/LogInScreen";
import OrderScreen from "./views/OrderScreen/OrderScreen";
import ContactScreen from './Components/ContactScreen/ContactScreen';
import RegisterScreen from "./Components/RegisterScreen/RegisterScreen";


function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderScreen />
      <NavBarScreen />
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/services" component={ServicesOption} />
      <Route path='/login' component={LogInScreen} />
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/order' component={OrderScreen}></Route>
      <Route path='/contact' component={ContactScreen}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
