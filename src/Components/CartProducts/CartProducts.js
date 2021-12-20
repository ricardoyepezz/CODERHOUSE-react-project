import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartProducts = () => {
	const { cart } = useContext(CartContext);

	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Foto</th>
					<th scope="col">Descripción</th>
					<th scope="col">Cantidad</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((product) => {
					return (
						<tr>
							<td> {product?.img}</td>
							<td> {product?.description} </td>
							<td> {product?.cantidad} </td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CartProducts;
