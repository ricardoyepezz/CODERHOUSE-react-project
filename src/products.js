const products = [
	{
		Id: 1,
		Name: "Producto 1",
		Description: "Descripción producto 1",
		img: "../Images/product1.jpg",
	},
	{
		Id: 2,
		Name: "Producto 2",
		Description: "Descripción producto 2",
		img: "../Images/product2.jpg",
	},
	{
		Id: 3,
		Name: "Producto 3",
		Description: "Descripción producto 3",
		img: "../Images/product3.jpg",
	},
];

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};
