// comparison.styled.ts
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 20px; /* Сдвигаем содержимое вниз от центра */
  margin-left: 30px; /* Сдвигаем содержимое вправо от центра */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff0000; /* Красный фон кнопки закрытия */
  color: #fff; /* Белый текст на кнопке */
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1010; /* Убедитесь, что кнопка поверх SVG */
  
  &:hover {
    background: #cc0000; /* Темнее красный при наведении */
  }
  
  &:focus {
    outline: none; /* Убираем обводку при фокусе */
  }
`;