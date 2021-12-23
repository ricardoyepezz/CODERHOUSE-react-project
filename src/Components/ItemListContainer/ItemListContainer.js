import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../../DBProducts.json";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	const getProduct = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject("La ruta no se pudo encontrar");
				}
			}, 2000);
		});
	useEffect(() => {
		getProduct(DataBase)
			.then((res) =>
				setProducts(res.filter((product) => product.category === categoryId))
			)
			.catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<>
			<ItemList key={products.id} items={products} />
		</>
	);
};
export default ItemListContainer;
