import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartProducts from "./components/CartProducts/CartProducts";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Payment from "./components/Payment/Payment";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<Navbar />
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route exact={true} path="/Cart" component={CartProducts} />
						<Route
							exact={true}
							path="/category/:categoryId"
							component={ItemListContainer}
						/>
						<Route
							exact={true}
							path="/item/:itemId"
							component={ItemDetailContainer}
						/>
						<Route exact={true} path="/Payment" component={Payment} />
					</Switch>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
