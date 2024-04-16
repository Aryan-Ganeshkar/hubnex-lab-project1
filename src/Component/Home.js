import React from "react";
import Navs from "./Navs";
import { Link } from "react-router-dom";
import Brands from "./Brands";
import System from "./System";
import Card from "./Card";
import Customer from "./Customer";
import Succes from "./Succes";
import Accordion from "./Accordion";
import Service from "./Service";
import Header from "./Header";


function Home() {
  return (
    <>

     <Navs></Navs>
      <Header></Header>
      <Brands></Brands>
      <System></System>
      <Card></Card>
      <Customer></Customer>
      <Succes></Succes>
      <Accordion></Accordion>
      <Service></Service>

    </>
  );
}

export default Home;
