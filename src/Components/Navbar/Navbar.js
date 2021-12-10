import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to={"/"}>
					REACT PROJECT CODERHOUSE
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
								List
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/detail"}>
								Detail
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/count"}>
								Count
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
								Categories
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<li>
									<Link className="nav-link" to={"/categories/camaras"}>
										Cámaras
									</Link>
								</li>
								<li>
									<Link className="nav-link" to={"/categories/accesorios"}>
										Accesorios
									</Link>
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
