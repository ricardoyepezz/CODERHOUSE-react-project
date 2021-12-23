import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import DataBase from "../../DataBase.json";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState();

	const getProduct = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject("La ruta no se pudo encontrar");
				}
			}, 1500);
		});

	useEffect(() => {
		getProduct(DataBase)
			.then((res) =>
				setProduct(res.product.find((product) => product.id === itemId))
			)
			.catch((err) => console.log(err));
	}, [itemId]);

	return <div>{product ? <ItemDetail item={product} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
