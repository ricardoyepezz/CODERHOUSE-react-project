import { useContext } from "react";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
	const { getCantidad } = useContext(CartContext);

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
									<NavLink className="nav-link" to={`/category/camaras`}>
										Cámaras
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to={`/category/accesorios`}>
										Accesorios
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<Link to="/cart">
				<CartWidget />
			</Link>
			<p>{getCantidad}</p>
		</nav>
	);
};

export default Navbar;
