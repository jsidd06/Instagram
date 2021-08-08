import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBarScreen from "./Components/NavBarScreen/NavBarScreen";
import ServicesOption from "./views/ServicesOption/ServicesOption";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import ContactScreen from './Components/ContactScreen/ContactScreen';
import HeaderScreen from "../src/Components/HeaderScreen/HeaderScreen"

function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderScreen />
      <NavBarScreen />
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/services" component={ServicesOption} />
      <Route path="/contact" component={ContactScreen} />
      </BrowserRouter>
    </>
  );
}

export default App;
