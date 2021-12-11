import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
	return (
		<div>
			<div className="Card CardItem">
				<img
					src={product.img}
					width="320"
					height="220"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{product.Name}</h5>
					<h5 className="card-title">{product.Price}</h5>

					<Link to={`/detail/${product.Id}`}>
						<button type="button" className="btn btn-dark">
							Ver detalle
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
