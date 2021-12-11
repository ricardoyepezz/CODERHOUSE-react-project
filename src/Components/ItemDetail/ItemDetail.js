import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
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
		</div>
	);
};

export default ItemDetail;
