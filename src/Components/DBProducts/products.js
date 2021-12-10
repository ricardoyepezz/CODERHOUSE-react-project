const products = [
	{
		Id: 1,
		Name: "Producto 1",
		Description: "Descripción producto 1",
		img: "../Images/product1.jpg",
		Price: "100 Usd",
		category: "Camaras",
	},
	{
		Id: 2,
		Name: "Producto 2",
		Description: "Descripción producto 2",
		img: "../Images/product2.jpg",
		Price: "200 Usd",
		category: "Camaras",
	},
	{
		Id: 3,
		Name: "Producto 3",
		Description: "Descripción producto 3",
		img: "../Images/product3.jpg",
		Price: "300 Usd",
		category: "Accesorios",
	},
];

export const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

export const getItem = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products[0]);
		}, 2000);
	});
};

export const getProductById = (Id) => {
	return new Promise((resolve, reject) => {
		const product = products.find((prod) => parseInt(prod.Id) === parseInt(Id));
		setTimeout(() => resolve(product), 1000);
	});
};

export const getCategories = (Category) => {
	return new Promise((resolve, reject) => {
		const categories = products.find(Category);

		setTimeout(() => {
			resolve(categories);
		}, 1000);
	});
};
