import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import CartProducts from "./Components/CartProducts/CartProducts";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
