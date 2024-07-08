import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Search from '../searchnum/searchnum'
import PaginaCards from '../pca/pca'
import CardCar from '../CardCar/CardCar';

interface Car {
  comments: string[];
  digits: string;
  is_stolen: boolean;
  model: string;
  model_year: number;
  operations: Array<any>;
  photo_url: string;
  region: {
    name: string;
    name_ua: string;
    slug: string;
    old_code: string;
    new_code: string;
  };
  stolen_details: any;
  vendor: string;
  vin: string;
}




function App() {

  const [carData, setCarData] = useState<Car | null | string>(null);
  const [Searchnomer, setNomer] = useState<string>(" ");

  console.log(carData);

  return (
    <div className="App">
          <div className="background"></div>
          <Search setDataFromSearch = {setCarData} setNomer = {setNomer} ></Search>
          <PaginaCards car = {carData} nomer = {Searchnomer}></PaginaCards>        
    </div>
  );
}

export default App;
