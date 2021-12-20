import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartProducts from "./components/CartProducts/CartProducts";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvider from "./context/CartContext";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<ItemListContainer />
						</Route>
						<Route exact path="/category/:categoryId">
							<ItemListContainer />
						</Route>
						<Route exact path="/detail/:paramId">
							<ItemDetailContainer />
						</Route>
						<Route exact path="/Cart">
							<CartProducts />
						</Route>

						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
