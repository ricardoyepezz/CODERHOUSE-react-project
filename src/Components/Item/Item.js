import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div>
			<div className="Card CardItem">
				<img
					src={item.img}
					width="320"
					height="220"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h1 className="card-title, display-6">{item.title}</h1>
					<h5 className="card-title">Price: {item.price} $</h5>
					<h5 className="card-title">Units available: {item.stock}</h5>

					<Link to={`/item/${item.id}`}>
						<button type="button" className="btn btn-dark">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
