import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div className="weather__info">
				{this.props.description && <p className="weather__key"> Description: {this.props.description} </p>}
				{this.props.temparature && <p className="weather__key"> Temaparature: {this.props.temparature} </p>}
				{this.props.humidity && <p className="weather__key"> Humidity: {this.props.humidity} </p>}
				{this.props.temp_min && <p className="weather__key"> Minimum Temaparature: {this.props.temp_min} </p>}
				{this.props.temp_max && <p className="weather__key"> Maximum Temaparature: {this.props.temp_max} </p>}
				{this.props.error && <p className="weather__error"> {this.props.error} </p>}
			</div>
		);
	}
}

export default Weather;
