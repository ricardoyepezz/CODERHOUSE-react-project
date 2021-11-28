import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/ItemCount.css";

const Item = ({ product }) => {
	return (
		<div>
			<div className="Card">
				<img
					src={product.img}
					width="320"
					height="220"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{product.Name}</h5>
					<p className="card-text">{product.Description}</p>
					<ItemCount stock="3" />
				</div>
			</div>
		</div>
	);
};

export default Item;
