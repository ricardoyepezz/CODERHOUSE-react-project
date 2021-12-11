import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
	return (
		<ul className="d-flex justify-content-sm-around">
			{products.map((product) => (
				<Item key={product.Id} product={product} />
			))}
		</ul>
	);
};

export default ItemList;
