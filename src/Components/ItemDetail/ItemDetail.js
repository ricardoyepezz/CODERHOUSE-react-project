import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
	const [flag, setFlag] = useState(true);
	const { setCart } = useContext(CartContext);

	const onAddClick = (count) => {
		setFlag(false);
		//alert(count + "items were added to the cart");
		setCart(item);
	};
	return (
		<div key={item.id} className="Card CardItem">
			<h2 className="card-title">{item.title}</h2>
			<img
				src={item.img}
				alt={item.title}
				width="320"
				height="220"
				className="card-img-top"
			/>
			<p className="card-title">Description: {item.description}</p>
			<p className="card-title">Price: {item.price}</p>
			<div className="mx-3">
				{flag && <ItemCount item={item} onAdd={onAddClick} />}
			</div>

			<div className="text-center col-11">
				{
					<Link exact to="/Cart">
						<button className="btn btn-outline-dark flex-shrink-0 mb-2">
							CartView
						</button>
					</Link>
				}
			</div>
		</div>
	);
};
export default ItemDetail;
