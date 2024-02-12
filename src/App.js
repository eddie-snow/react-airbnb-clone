
import React from "react"
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-parent">
        <Card  //props reusable components
          img ={require("./images/image 12.png")}
          ratings = "5.0"
          reviewCount ={6}
          country = "USA"
          title="Life lessons with Katie Zaferes"
          price ={137}
        />

        <Card
          img ={require("./images/image 13.png")}
          ratings = "5.0"
          reviewCount ={30}
          country = "USA"
          title="Learning wedding photography"
          price ={125}
        />

        <Card 
          img ={require("./images/image 14.png")}
          ratings = "4.8"
          reviewCount ={2}
          country = "USA"
          title="Group Mountain biking"
          price ={50}
        />
      </div>
      
    </div>
   
  );
}

export default App;
