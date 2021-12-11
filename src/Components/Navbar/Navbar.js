import { useState, useEffect } from "react";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { getCategories } from "../DBProducts/products";

const Navbar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((categories) => {
			setCategories(categories);
		});
	}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to={"/"}>
					PHOTO PLACE
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to={"/"}>
								Home
							</Link>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Categorías
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<li>
									{categories.map((cat) => (
										<Link
											className="nav-link"
											key={cat.id}
											to={`/category/${cat.id}`}
										>
											{cat.Description}
										</Link>
									))}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<CartWidget />
		</nav>
	);
};

export default Navbar;
