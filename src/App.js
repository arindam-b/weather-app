import React from 'react';
import './App.css';
import Weather from './components/weather';
import Forms from './components/Forms';
import Titles from './components/Titles';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
	state = {
		temp: undefined,
		description: undefined,
		humidity: undefined,
		temp_min: undefined,
		temp_max: undefined,
		country: undefined,
		city: undefined,
		error: undefined
	};

	getWeather = async (e) => {
		//This is to stop default behavior of page refresh on button submit
		//This is useful for single page application
		e.preventDefault();

		//Now to capture the value of the field from event
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;

		if (city && country) {
			const api_response = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
			);
			const data = await api_response.json();
			this.updateStates(data);
		} else {
			const message = 'Please provide City and Country';
			this.validate(message);
		}
	};

	updateStates(data) {
		try {
			this.setState({
				temp: data.main.temp,
				description: data.weather[0].description,
				humidity: data.main.humidity,
				temp_min: data.main.temp_min,
				temp_max: data.main.temp_max,
				country: data.sys.country,
				city: data.name,
				error: undefined
			});
		} catch (error) {
			this.validate('Please check inputs and re-enter, could not fetch details');
		}
	}

	validate(message) {
		this.setState({
			temp: undefined,
			description: undefined,
			humidity: undefined,
			temp_min: undefined,
			temp_max: undefined,
			country: undefined,
			city: undefined,
			error: message
		});
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="cols-xs-5 title-container">
								<Titles />
							</div>
							<div className="cols-xs-7 form-container">
								<Forms getWeather={this.getWeather} />
								<Weather
									temparature={this.state.temp}
									humidity={this.state.humidity}
									temp_min={this.state.temp_min}
									temp_max={this.state.temp_max}
									description={this.state.description}
									error={this.state.error}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
