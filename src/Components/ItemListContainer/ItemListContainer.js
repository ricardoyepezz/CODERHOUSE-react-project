import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../DBProducts/products";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const list = getProducts();
		list.then((list) => {
			setProducts(list);
		});
		return () => {
			setProducts([]);
		};
	}, [categoryId]);

	return (
		<div>
			<p className="mt-5">Welcome to {props.greetings}</p>
			<p className="mb-5">Current Progress: {props.progress}</p>
			<>
				<ItemList products={products} />
			</>
			<a
				className="App-link"
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
