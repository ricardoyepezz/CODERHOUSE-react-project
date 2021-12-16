import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ onAdd }) => {
	const [contador, setContador] = useState(0);

	//Función para el botón Agregar

	const agregar = () => {
		const stock = 10;
		if (stock > 0 && contador < stock) {
			setContador(contador + 1);
		}
		if (contador > stock) {
			setContador(contador === 0);
		}
	};

	//  Función para el botón Disminuir
	const disminuir = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<div>
			<button className="btn btn-primary" onClick={disminuir}>
				-
			</button>
			<span className="border border-5">Cantidad: {contador}</span>
			<button className="btn btn-primary" onClick={agregar}>
				+
			</button>
			<button className="btn btn-info" onClick={onAdd}>
				Agregar al Carrito
			</button>
		</div>
	);
};

export default ItemCount;
