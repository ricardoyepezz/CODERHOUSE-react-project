import React from "react";

const Home = () => {
	return (
		<div>
			<h1 className="display-3 pb-3">20% discount offers for Christmas</h1>

			<div className="container w-50">
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="../Images/product1.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Canon EOS 90D</h5>
								<p>For professional uses</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../Images/product2.jpg"
								class="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Nikon D7500</h5>
								<p>Professional and amateur use, light</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../Images/product3.jpg"
								class="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Canon EOS 70D Len</h5>
								<p>For professional uses</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
