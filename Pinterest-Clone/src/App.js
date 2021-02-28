import React, { useState, useEffect  } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js';
import Mainboard from './components/Mainboard.js'
import axios from './api/unsplash'
import unsplash from './api/unsplash';

function App(){

  const [pins,setNewPins] = useState([]) //"pins" will be containing the data that needs to be shown in the pins of Mainboard.

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos",{

     params: {
       query: term // object you want to search for.
     }
    });
  };





  const onSearchSubmit = (term) => { //we will be calling images from unsplash
    console.log("on search submit", term);
      getImages(term).then((res) => {

        let results = res.data.results;

        let newPins = [
          ...results,
          ...pins,
        ]

        newPins.sort(function(a, b) {
          return 0.5 - Math.random();
        });

        setNewPins(newPins);

      })
  }

  const getNewPins = () => {
    let promises = [ ];
    let pinData = [ ];
    let pins = ['ocean','sky','earth','nature','love' ];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
        let results = res.data.results;
        pinData = pinData.concat(results);
        pinData.sort(function(a,b){
          return 0.5 - Math.random();
        });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => { 
  
    getNewPins();// whenever the page loads, we will be calling this function
  }, []);

  return (
    <div className = "app">
      <Header onSubmit = {onSearchSubmit}/>
      <Mainboard pins = {pins}/>
    </div>

  )

}

export default App;

