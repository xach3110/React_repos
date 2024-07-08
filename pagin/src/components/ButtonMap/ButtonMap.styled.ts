import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000; 

  &:hover {
    background-color: #45a049;
  }
`;