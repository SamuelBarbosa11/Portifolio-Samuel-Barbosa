import { scrollToSection } from "../utils/scrollToSection";

import Text from "../components/Text";

export default function NavegationBar({
	className = "",
	showOnly = null,
	hideTags = [],
}) {
	const LINKS = [
		{ tag: "home", nome: "início" },
		{ tag: "about", nome: "sobre" },
		{ tag: "projects", nome: "projetos" },
		{ tag: "contact", nome: "contato" },
	];

	let visibleLinks = showOnly
		? LINKS.filter((link) => showOnly.includes(link.tag))
		: LINKS;

	visibleLinks = visibleLinks.filter((link) => !hideTags.includes(link.tag));

	return (
		<div className={`flex gap-4 lowercase tracking-wider ${className}`}>
			{visibleLinks.map((link) => (
				<Text
					as="button"
					key={link.tag}
					variant="heading"
					onClick={() => scrollToSection(`${link.tag}`)}
					className="nav-link cursor-pointer focus:outline-none"
				>
					{link.nome}
				</Text>
			))}
		</div>
	);
}
