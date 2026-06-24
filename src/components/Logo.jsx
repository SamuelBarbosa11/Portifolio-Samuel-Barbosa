import favicon from "../assets/favicon.png";

export default function Logo({ className = "" }) {
	return (
		<img
			id="Logo"
			className={`h-10 md:h-12 rounded-lg ${className}`}
			src={favicon}
		/>
	);
}
