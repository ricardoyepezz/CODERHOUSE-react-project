import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) => {
	const [contador, setContador] = useState(0);

	/*   Función para el botón Agregar */

	const agregar = () => {
		if (props.stock > 0 && contador < props.stock) {
			setContador(contador + 1);
		}
		if (contador > props.stock) {
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
		<div className="Card">
			<img src="./Images/icon-cart.svg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Producto</h5>
				<p className="card-text">Ejemplo de Descripción de Producto</p>
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
			<span className="border border-5">Stock Disponible: {props.stock}</span>
		</div>
	);
};

export default ItemCount;
