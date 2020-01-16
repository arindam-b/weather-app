import React from 'react';

const Forms = (props) => (
	<form onSubmit={props.getWeather}>
		<div>
			<input type="text" name="city" placeholder="City" />
			&nbsp;<input type="text" name="country" placeholder="Country" />
			&nbsp;<button className="btn btn-danger">Get Weather</button>
		</div>
	</form>
);

export default Forms;
