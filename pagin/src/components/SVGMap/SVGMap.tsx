import React from 'react';
import { ReactSVG } from 'react-svg';
import { SvgContainer, Modal, CloseButton } from './SVGMap.styled';
import Map from './ukraine.svg';

interface Region {
  id: string;
  color: string;
}

interface SvgMapProps {
  isOpen: boolean;
  onClose: () => void;
  regions: Region[];
}

const SvgMap: React.FC<SvgMapProps> = ({ isOpen, onClose, regions }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <SvgContainer>
        <ReactSVG
          src={Map}
          beforeInjection={(svg) => {
            console.log('SVG загружен', svg);

            console.log('Regions in SvgMap:', regions);

            regions.forEach((region) => {
              const element = svg.querySelector(`#${region.id}`);
              if (element) {
                element.setAttribute('style', `fill: ${region.color};`);
              }
            });
          }}
          onError={(error) => {
            console.error('Ошибка при загрузке SVG:', error);
          }}
          style={{ width: '100%', height: 'auto' }} 
        />
      </SvgContainer>
    </Modal>
  );
};

export default SvgMap;
