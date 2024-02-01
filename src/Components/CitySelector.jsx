import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';


const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Welcome To Weather Forecast</h1>
            <h2>Enter Your City Name:</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={2}>
            <FormControl
              placeholder="Enter Your City"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button class="btn btn-info" onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;