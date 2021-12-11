import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../DBProducts/products";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState();
	const { paramId } = useParams();
	console.log(paramId);
	useEffect(() => {
		getProductById(paramId)
			.then((item) => {
				setProduct(item);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			setProduct();
		};
	}, [paramId]);

	return <div>{product ? <ItemDetail product={product} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
