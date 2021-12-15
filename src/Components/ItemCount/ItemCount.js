import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ product }) => {
	const [contador, setContador] = useState(0);

	/*   Función para el botón Agregar */

	const agregar = () => {
		if (product?.stock > 0 && contador < product?.stock) {
			setContador(contador + 1);
		}
		if (contador > product?.stock) {
			setContador(contador === 0);
		}
	};

	/*   Función para el botón Disminuir */
	const disminuir = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	/*   Función para el botón Agregar al carrito */
	const onAdd = () => {
		if (contador > 1) {
			console.log(`Se agregaron ${contador} productos.`);
		}
		if (contador === 1) {
			console.log(`Se agregó  ${contador} producto.`);
		}
		if (contador === 0) {
			console.log("No se ha agregado ningún producto.");
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
			<p className="border border-5">Stock Disponible: {product?.stock}</p>
		</div>
	);
};

export default ItemCount;
