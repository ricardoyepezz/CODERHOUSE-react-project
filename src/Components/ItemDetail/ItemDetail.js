import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
	const [itemCountOff, setItemCountOff] = useState(true);

	const onAdd = () => {
		setItemCountOff(false);
	};

	return (
		<div className="Card CardItem">
			<h2 className="card-title">{product?.Name}</h2>
			<img
				src={product?.img}
				alt={product?.Name}
				width="320"
				height="220"
				className="card-img-top"
				alt="..."
			/>
			<p className="card-title">Descripción: {product?.Description}</p>
			<p className="card-title">Precio: {product?.Price}</p>
			{itemCountOff ? (
				<ItemCount onAdd={onAdd} />
			) : (
				<Link exact to="/Cart">
					<button className="btn btn-outline-dark">Terminar mi Compra</button>
				</Link>
			)}
		</div>
	);
};

export default ItemDetail;
