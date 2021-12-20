import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext);

	const [buy, setBuy] = useState(false);
	const [qty, setQty] = useState(0);

	const handleBuy = (qty) => {
		setBuy(true);
		setQty(qty);
	};

	const handlePurchase = () => {
		addItem(product, qty);
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
			{!buy ? (
				<ItemCount stock={10} onAdd={(qty) => handleBuy(qty)} />
			) : (
				<button onClick={handlePurchase}>
					<Link to="/Cart"> Purchase </Link>
				</button>
			)}
		</div>
	);
};
export default ItemDetail;
