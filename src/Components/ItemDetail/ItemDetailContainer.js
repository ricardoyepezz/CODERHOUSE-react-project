import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const DB_Products = [
	{
		Id: 1,
		Name: "Cámara Canon",
		Description: "Descripción producto 1",
		img: "../Images/product1.jpg",
		Price: "Precio 100$",
	},
	{
		Id: 2,
		Name: "Cámara Nikon",
		Description: "Descripción producto 2",
		img: "../Images/product2.jpg",
		Price: "Precio 200$",
	},
	{
		Id: 3,
		Name: "Cámara Polaroid Land",
		Description: "Descripción producto 3",
		img: "../Images/product3.jpg",
		Price: "Precio 300$",
	},
];

function crearPromesa() {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve(DB_Products[2]);
		}, 2000);
	});
}

// Contenedor de lógica y pedido de datos
const ItemDetailContainer = () => {
	const [item, setItem] = useState();

	useEffect(() => {
		// se crea la promesa
		let requestdatos = crearPromesa();
		requestdatos
			// se ejecuta promesa .then y se guardan datos en estado
			.then(function (item_promise) {
				console.log(item_promise);
				setItem(item_promise);
			})
			//Si surgen errores corre catch
			.catch(function (error) {
				console.log(error);
			})
			//Si se ejecuta promesa corre finally
			.finally(function () {
				console.log("Promesa Terminada");
			});
	}, []);

	return (
		<div>{item ? <ItemDetail product={item} /> : <div>Cargando...</div>}</div>
	);
};

export default ItemDetailContainer;
