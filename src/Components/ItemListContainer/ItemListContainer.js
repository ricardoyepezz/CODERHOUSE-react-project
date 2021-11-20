import React from "react";

const ItemListContainer = (props) => {
	return (
		<div>
			<p>Welcome to {props.greetings}</p>
			<p>Current Progress: {props.progress}</p>
		</div>
	);
};

export default ItemListContainer;
