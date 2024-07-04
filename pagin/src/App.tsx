import React, { FC, useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CardCar from './components/CardCar/CardCar';

import search from './components/searchnum/searchnum'

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


const numer = 'АЕ7777АЕ';


function App() {
  const url = `https://baza-gai.com.ua/nomer/${numer}`;
  const key = "dcb856e75162ec68a57c4e5f54f430ca";

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "X-Api-Key": key
      }
    })
    .then(response => {
      setCar(response.data);
      console.log(response.data);
      setLoading(false);
    })
    .catch(err => {
      setError("An error occurred while fetching data");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!car) {
    return <div>No Cars data available</div>;
  }
  

  

  return (
    <div className="App">
          <div className="background"></div>
          <search></search>
            <CardCar
                num = {numer}
                vin={car.vin.toString()}
                img={car.photo_url}
                wanted={car.is_stolen}
                brand={car.vendor}
                model={car.model}
                modelyear={car.model_year.toString()}
                region={car.region.name}
            />
    </div>
  );
}

export default App;
