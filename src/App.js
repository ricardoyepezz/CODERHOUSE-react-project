import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";

function App() {
	return (
		<div className="App">
			<Navbar />

			<ItemListContainer
				greetings="Coderhouse Project"
				progress="Detalle de Producto"
			/>
			<ItemDetailContainer />
		</div>
	);
}

export default App;
