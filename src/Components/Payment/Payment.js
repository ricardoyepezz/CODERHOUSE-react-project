import React from "react";
import { getFirestore } from "../../firebase/firebase";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";

const Payment = () => {
	const { cart } = useContext(CartContext);
	console.log(cart);

	const sendOrder = () => {
		const order = {
			buyer: [
				{
					name: "Ricardo",
					lastName: "Yepez",
					phone: "3123344567",
					email: "ry@gmail.com",
					location: "chile 1",
				},
			],
			items: [{ cart }],
		};

		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	return (
		<>
			<button
				className="btn btn-outline-dark flex-shrink-0 mb-2"
				onClick={sendOrder}
			>
				Finish shopping
			</button>
		</>
	);
};

export default Payment;
