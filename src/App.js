import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
			<Navbar />

			<ItemListContainer
				greetings="Coderhouse Project"
				progress="Components II"
			/>

			<a
				className="App-link"
				href="https://github.com/ricardoyepezz/cursoreact"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github!
			</a>
		</div>
	);
}

export default App;
