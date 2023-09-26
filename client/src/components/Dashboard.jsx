import React, { useEffect, useState } from 'react';
import "./dashboard.css";

// const api = {
//     key: "f1ec36785ca1d3a27da5607058873b3f",
//     base: "https://api.openweathermap.org/data/2.5/",
// };

function Dashboard() {
    const [city, setCity] = useState(' '); // Default city
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
    }, [city]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!city) return;
        try {
            const url = await fetch(`http://localhost:5000/api/search/weather?city=${city}`)
            const resJson = await url.json();
            setWeatherData(resJson);
            console.log(resJson);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='container'>
            <h1 className='header'>Weather App</h1>
            <div className='engine'>
                <input
                    type="text"
                    placeholder="CityName"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <button className='btn' onClick={handleSubmit}>search</button>
            </div>

            <hr />
            <div className='info'>
                <div className='content'>
                    <p>Cityname: {weatherData?.name}</p>
                    <p>Temperature: {weatherData?.main?.temp} C</p>
                    <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
                </div>
                <div className='content'>
                    <p>Country: {weatherData?.sys?.country}</p>
                    <p>Humidity: {weatherData?.main?.humidity} g.m</p>
                    <p>Weather: {weatherData?.weather[0]?.description}</p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
