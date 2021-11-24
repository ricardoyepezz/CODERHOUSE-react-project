import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
	return (
		<div>
			<p>Welcome to {props.greetings}</p>
			<p>Current Progress: {props.progress}</p>
			{/* "stock" setea el valor de stock máximo para el componente ItemCount */}
			<ItemCount stock="3" />
		</div>
	);
};

export default ItemListContainer;
