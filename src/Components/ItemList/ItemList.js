import React from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const ItemList = ({ items }) => {
	return (
		<ul className="d-flex justify-content-sm-around">
			{items.length ? (
				items.map((products) => <Item item={products} key={products.title} />)
			) : (
				<Loader />
			)}
		</ul>
	);
};

export default ItemList;
