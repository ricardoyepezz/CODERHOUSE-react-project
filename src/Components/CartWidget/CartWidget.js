import React from "react";
import cart from "./icon-cart.svg";

const CartWidget = () => {
	return (
		<div className="justify-content-end me-4">
			<a href="#">
				<img src={cart} alt="icon-cart" />
			</a>
		</div>
	);
};

export default CartWidget;
