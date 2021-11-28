import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
			<Navbar />

			<ItemListContainer
				greetings="Coderhouse Project"
				progress="Catálogo con MAPS y Promises"
			/>
		</div>
	);
}

export default App;
