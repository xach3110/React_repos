// comparison.tsx
import React, { FC, useState, useEffect } from 'react';
import { Modal, ModalContent, CloseButton } from './comparison.styled';
import Search from '../searchnum/searchnum';
import PaginaCards from '../pca/pca';

interface ComparisonProps {
  onClose: () => void;
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

const Comparison: FC<ComparisonProps> = ({ onClose }) => {
  const [carData, setCarData] = useState<Car | null | string>(null);
  const [searchNomer, setSearchNomer] = useState<string>("");
  const [carData1, setCarData1] = useState<Car | null | string>(null);
  const [searchNomer1, setSearchNomer1] = useState<string>("");


  return (
    <Modal>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <ModalContent>
        <Search setDataFromSearch={setCarData} setNomer={setSearchNomer} />
        <PaginaCards car={carData} nomer={searchNomer} />
      </ModalContent>
      <ModalContent>
        <Search setDataFromSearch={setCarData1} setNomer={setSearchNomer1} />
        <PaginaCards car={carData1} nomer={searchNomer1} />
      </ModalContent>
    </Modal>
  );
};

export default Comparison;
