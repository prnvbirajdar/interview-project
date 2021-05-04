import React from 'react';
import axios from 'axios';

const api = {
  ApiKey: 'b63cf6b2035740bbcb1f36c5a720c5c6',
  base: 'https://api.openweathermap.org/data/2.5/'
};

export default function weatherApp() {
  const [search, setSearch] = React.useState({ city: '', country: '' });
  const [weatherData, setWeatherData] = React.useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async () => {

    try {
      const resp = await axios.get(
        `${api.base}weather?q=${search.city}&appid=${api.ApiKey}&units=metric`
      );
      const data = await resp.data;
      setWeatherData(data);
    } catch (error) {
      console.log('Api Error:', error);
    }

    setSearch({ city: '', country: '' });
  };

  return (
    <>
      <div>
        <label htmlFor="input">Enter city:</label>
        <input
          type="text"
          name="city"
          value={search.city}
          onChange={handleChange}
        />
        <label htmlFor="input">Enter country code:</label>
        <input
          type="text"
          name="country"
          value={search.country}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      {weatherData && (
        <div>
          <p>{weatherData.name}</p>
          <p>{weatherData?.main?.temp}</p>
        </div>
      )}
    </>
  );
}
