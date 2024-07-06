import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Search from './components/searchnum/searchnum'
import PaginaCards from './components/pca/pca'
import CardCar from './components/CardCar/CardCar';

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
  const [nomer, setNomer] = useState<string>(" ");


  return (
    <div className="App">
          <div className="background"></div>
          <Search setDataFromSearch = {setCarData} setNomer = {setNomer} ></Search>
          <PaginaCards car = {carData}></PaginaCards>
          {/* {typeof carData === 'object' && carData !== null && 'vin' in carData && (
            <CardCar
              num={nomer}
              img={carData.photo_url || ''}
              wanted={Boolean(carData.is_stolen)}
              brand={carData.vendor || ''}
              model={carData.model || ''}
              modelyear={(carData.model_year || '').toString()}
              region={(carData.region && carData.region.name) || ''}
              datereg={(carData.operations[0].registered_at) || ''}
              color={(carData.operations[0].color.ru) || ''}
              fuel={(carData.operations[0].fuel.ru) || ''}
            />
        )} */}
    </div>
  );
}

export default App;
