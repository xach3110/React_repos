import React, { FC, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CardCar from './components/CardCar/CardCar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/ButtonMap/ButtonMap';
import SvgMap from './components/SVGMap/SVGMap';

interface Region {
  id: string;
  color: string;
}

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

const App: FC = () => {
  const url = `https://baza-gai.com.ua/nomer/${numer}`;
  const key = '9c16e05f3ed9a9d34bda42abd1fd91d5';

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Accept: 'application/json',
          'X-Api-Key': key,
        },
      })
      .then((response) => {
        setCar(response.data);
        const newRegions: Region[] = [
          { id: 'dnipropetrovsk-31', color: response.data.region.name === "Днепропетровская область" ? 'blue' : 'gray' },
          // Добавьте другие регионы здесь
        ];

        setRegions(newRegions);

        // Выводим содержимое regions в консоль
        console.log('Regions:', newRegions);

        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Произошла ошибка при загрузке данных');
        setLoading(false);
      });
  }, []);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!car) {
    return <div>Нет данных о машинах</div>;
  }

  return (
    <div className="App">
      {/* <div className="background"></div>
      <search></search>
      <CardCar
        num={numer}
        vin={car.vin.toString()}
        img={car.photo_url}
        wanted={car.is_stolen}
        brand={car.vendor}
        model={car.model}
        modelyear={car.model_year.toString()}
        region={car.region.name}
      />
      <ButtonComponent onClick={handleButtonClick} />
      <SvgMap isOpen={modalIsOpen} onClose={closeModal} regions={regions} /> */}

      
    </div>

  );
};

export default App;
