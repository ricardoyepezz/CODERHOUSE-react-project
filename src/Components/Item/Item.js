import React from "react";
import { Link } from "react-router-dom";

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
					<Link to={`/detail/${product.Id}`}>Ver detalle</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
