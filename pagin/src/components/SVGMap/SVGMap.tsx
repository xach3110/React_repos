
import React from 'react';
import { ReactSVG } from 'react-svg';
import { SvgContainer, Modal, CloseButton } from './SVGMap.styled';
import Map from './ukraine.svg'; 
interface SvgMapProps {
  isOpen: boolean;
  onClose: () => void;
}

const SvgMap: React.FC<SvgMapProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <SvgContainer>
        <ReactSVG
          src={Map}
          beforeInjection={(svg) => {
            console.log('SVG загружен', svg);
          }}
          onError={(error) => {
            console.error('Ошибка при загрузке SVG:', error);
            
          }}
          style={{ width: '100%', height: 'auto' }} // Устанавливаем стили для SVG
        />
      </SvgContainer>
    </Modal>
  );
};

export default SvgMap;
