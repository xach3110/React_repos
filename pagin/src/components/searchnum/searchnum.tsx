import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  const [showSearchAlert, setShowSearchAlert] = useState(false);

  return (
    <>
      <MDBInputGroup>
        <MDBInput label='Search' />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>

      
    </>
  );
}