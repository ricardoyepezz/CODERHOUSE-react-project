import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

/* const DB_Products = [
	{
		Id: 1,
		Name: "Producto 1",
		Description: "Descripción producto 1",
		img: "../Images/product1.jpg",
	},
	{
		Id: 2,
		Name: "Producto 2",
		Description: "Descripción producto 2",
		img: "../Images/product2.jpg",
	},
	{
		Id: 3,
		Name: "Producto 3",
		Description: "Descripción producto 3",
		img: "../Images/product3.jpg",
	},
];

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(DB_Products);
		}, 2000);
	});
}; */

const ItemListContainer = (props) => {
	/* const [DB_Products, setProducts] = useState([]);

	useEffect(() => {
		const list = getProducts();
		list.then((list) => {
			setProducts(list);
		});
		return () => {
			setProducts([]);
		};
	}, []); */

	return (
		<div>
			<p className="mt-5">Welcome to {props.greetings}</p>
			<p className="mb-5">Current Progress: {props.progress}</p>
			<a
				className="App-link mb-5"
				href="https://github.com/ricardoyepezz/cursoreact"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github!
			</a>
		</div>
	);
};

export default ItemListContainer;
