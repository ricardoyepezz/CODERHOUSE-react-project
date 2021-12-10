const ItemDetail = ({ product }) => {
	return (
		<article>
			<header>
				<h2>{product?.Name}</h2>
			</header>
			<picture>
				<img src={product?.img} alt={product?.Name} className="ItemImg" />
			</picture>
			<section>
				<p>Categoria: {product?.category}</p>
				<p>Descripción: {product?.Description}</p>
				<p>Precio: {product?.Price}</p>
			</section>
		</article>
	);
};

export default ItemDetail;
