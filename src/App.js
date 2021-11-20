import logo from "./logo.png";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<ItemListContainer
					greetings="Coderhouse Project"
					progress="Components I"
				/>

				<a
					className="App-link"
					href="https://github.com/ricardoyepezz/cursoreact"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github!
				</a>
			</header>
		</div>
	);
}

export default App;
