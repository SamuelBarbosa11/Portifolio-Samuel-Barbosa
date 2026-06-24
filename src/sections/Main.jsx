import HeroSection from "./main/HeroSection";
import About from "./main/About";
import Projects from "./main/Projects";
import Contact from "./main/Contact";

export default function Main({ className = "" }) {
	return (
		<div className={`${className}`}>
			<HeroSection />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
