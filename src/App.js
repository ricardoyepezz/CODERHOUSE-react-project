import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer
							greetings="Coderhouse Project"
							progress="Detalle de Producto"
						/>
					</Route>
					<Route exact path="/category/:categoryId">
						<ItemListContainer />
					</Route>
					<Route exact path="/detail/:paramId">
						<ItemDetailContainer />
					</Route>
					<Route exact path="/count">
						<ItemCount />
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
