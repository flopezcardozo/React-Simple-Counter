import React from "react";
import PropTypes from "prop-types";

const Number = props => {
	return (
		<div>
			<h1 className="text-danger p-5">{props.number}</h1>;
		</div>
	);
};

Number.propTypes = {
	number: PropTypes.number
};
export default Number;
