import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartProducts = () => {
	const { cart, removeItem } = useContext(CartContext);
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.count,
		0
	);

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Product</th>
						<th scope="col">Quantity</th>
						<th scope="col">Price</th>
						<th scope="col"> </th>
					</tr>
				</thead>

				<tbody>
					{cart.length
						? cart.map((product) => (
								<tr className="text-center" key={product.id}>
									<td className="mx-5 my-5 h4">{product.title}</td>
									<td className="mx-5 my-5 h4">{product.count}</td>
									<td className="mx-5 my-5 h4">
										{product.price * product.count}
									</td>
									<td>
										<button
											className="btn btn-primary bg-dark m-2"
											onClick={removeItem}
										>
											X
										</button>
									</td>
								</tr>
						  ))
						: "No products"}
				</tbody>
			</table>
			<div className="text-center">
				<h3>Total: $ {totalPrice} </h3>
			</div>
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-outline-dark flex-shrink-0 mb-2 my-3">
						Return to shop
					</button>
				</Link>
			</div>
		</>
	);
};

export default CartProducts;
