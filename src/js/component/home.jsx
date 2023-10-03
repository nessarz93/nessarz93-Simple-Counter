import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className= "row reloj">
			<div className="col counter">
				<i className="far fa-clock"></i>
			</div>
			<div className="col counter">
				{props.digit6}
			</div>
			<div className="col counter">
				{props.digit5}
			</div>
			<div className="col counter">
				{props.digit4}
			</div>
			<div className="col counter">
				{props.digit3}
			</div>
			<div className="col counter">
				{props.digit2}
			</div>
			<div className="col counter">
				{props.digit1}
			</div>
		</div>
	);
};

export default Home;
