const products = [
	{
		Id: 1,
		Name: "Camara Canon EOS 90D ",
		Description:
			"Situada como una cámara versátil con características de foto y video capaces, la Canon EOS 90D es una elegante réflex digital que también se caracteriza por su sensor CMOS APS-C de 32.5MP de alta resolución.",
		img: "../Images/product1.jpg",
		Price: "699$ USD",
		category: "camaras",
		stock: "8",
	},
	{
		Id: 2,
		Name: "Camara Nikon D7500 ",
		Description:
			"Diseñado como un verdadero todoterreno, la Nikon D7500 es una DSLR de formato DX que ofrece un conjunto de características versátiles para atraer a fotógrafos y camarógrafos por igual. Basado en un sensor CMOS de 20.9MP y un procesador de imagen EXPEED 5, este experto multimedia cuenta con una velocidad de disparo continuo de 8 fps para hasta 100 JPEGS consecutivos, un rango de sensibilidad nativo a ISO 51,200 que se puede ampliar hasta ISO 1,640,000 y video 4K UHD y capacidades de grabación de lapso de tiempo. ",
		img: "../Images/product2.jpg",
		Price: "750$ USD",
		category: "camaras",
		stock: "3",
	},
	{
		Id: 3,
		Name: "Canon, EOS 70D Lens",
		Description: "Lente para Canon modelo EOS 70D",
		img: "../Images/product3.jpg",
		Price: "290$ USD",
		category: "accesorios",
		stock: "3",
	},
];

const categories = [
	{ id: "camaras", Description: "Cámaras" },
	{ id: "accesorios", Description: "Accesorios" },
];

export const getProducts = (category) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			category
				? resolve(products.filter((product) => product.category === category))
				: resolve(products);
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

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(categories);
		}, 5000);
	});
};
