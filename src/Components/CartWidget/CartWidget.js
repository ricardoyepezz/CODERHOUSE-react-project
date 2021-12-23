import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	const counterWidget = cart.reduce((total, item) => total + item.count, 0);
	return (
		<div className="justify-content-end me-4">
			<img src={"../Images/icon-cart.svg"} alt="icon-cart" />
			<div className=" bg-secondary rounded-pill text-white ">
				{counterWidget}
			</div>
			<br />
		</div>
	);
};

export default CartWidget;
