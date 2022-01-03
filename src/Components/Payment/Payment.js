import React from "react";
import { getFirestore } from "../../firebase/firebase";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Payment = () => {
	const { setCart } = useContext(CartContext);

	const inputs = [
		{
			label: "Name",
			name: "name",
		},
		{
			label: "LastName",
			name: "surname",
		},
		{
			label: "Email",
			name: "email",
		},
		{
			label: "address and number",
			name: "address",
		},
		{
			label: "Phone Number",
			name: "phoneNumber",
		},
	];

	const [formFields, setFormFields] = useState({
		name: "",
		surname: "",
		email: "",
		address: "",
		phoneNumber: "",
	});

	function handleChange(evt) {
		setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
	}

	const sendOrder = () => {
		const order = {
			buyer: [
				{
					name: formFields.name,
					surname: formFields.surname,
					email: formFields.email,
					address: formFields.address,
					phoneNumber: formFields.phoneNumber,
				},
			],
		};
		setCart([]);
		const db = getFirestore();
		addDoc(collection(db, "orders"), order).then(({ id }) => console.log(id));
	};
	return (
		<>
			<div className="mx-5 col-4 text-center">
				<h2>BUYER DATA</h2>
				{inputs.map((input) => (
					<div key={input.name} className="text-center my-3 col-9 mx-5">
						<label className="m-1 h5">{input.label}</label>
						<input
							value={formFields[input.name]}
							name={input.name}
							type="text"
							onChange={handleChange}
							className="form-control"
						/>
					</div>
				))}
				<Link to="/" className="text-decoration-none text-dark col-10">
					<button
						className="btn btn-danger text-center col-3 p-2"
						disabled={
							!formFields.name &&
							formFields.surname &&
							formFields.email &&
							formFields.address &&
							formFields.phoneNumber
						}
						onClick={sendOrder}
					>
						Finish Buying
					</button>
				</Link>
			</div>
		</>
	);
};

export default Payment;
