import React from 'react';
import CitySelector from './Components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import WeatherList from './Components/WeatherList.jsx';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data);

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };


  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

   
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
};

export default App;