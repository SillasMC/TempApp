import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather (cityData) {
		const temps = cityData.list.map(weather => weather.main.temp)
						.map(temp => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={cityData.city.id}>
				<td>{cityData.city.name}</td>
				<td><Chart data={temps} color="red" unity="ºC" /></td>
				<td><Chart data={pressures} color="green" unity="hPa" /></td>
				<td><Chart data={humidities} color="blue" unity="%" /></td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (ºC)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);