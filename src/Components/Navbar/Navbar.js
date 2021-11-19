import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					REACT PROJECT CODERHOUSE
				</a>
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
							<a className="nav-link" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://github.com/ricardoyepezz/cursoreact"
								target="_blank"
							>
								Github
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Marketplace
							</a>
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
								Resources
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<li>
									<a className="dropdown-item" href="#">
										Prices
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Products
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Sales
									</a>
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
