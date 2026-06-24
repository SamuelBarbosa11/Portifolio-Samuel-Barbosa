import Header from "./sections/Header";
import Gojo from "./components/Gojo";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

function App() {
	return (
		<main className="max-w-7xl mx-auto pb-16 px-4 md:px-8">
			<Header />

			<Gojo />

			<Main />

			<Footer />
		</main>
	);
}

export default App;
