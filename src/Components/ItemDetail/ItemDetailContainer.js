import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getFirestore } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		const db = getFirestore();

		const theItem = doc(db, "items", itemId);
		getDoc(theItem).then((snapshot) => {
			if (snapshot.exists()) {
				setProduct(snapshot.data());
			}
		});
	}, [itemId]);

	return <div>{product ? <ItemDetail item={product} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
