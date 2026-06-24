import useMediaQuery from "../hooks/useMediaQuery"

import Text from "../components/Text";
import Logo from "../components/Logo";
import LinkedIcon from "../components/LinkedIcon";
import NavegationBar from "../components/NavegationBar"

export default function Footer({ className = "" }) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<footer className="flex flex-col gap-4 sm:flex-row flex-wrap justify-between items-center">
			<div className="flex items-center">
				<Logo />
				<Text
					variant="muted"
					className="opacity-80 text-(--text-secondary)"
				>
					Samuel M Barbosa
				</Text>
			</div>

			{isDesktop && <NavegationBar showOnly={["home"]} />}

			<div className="flex gap-4">
				<LinkedIcon
					href="https://github.com/SamuelBarbosa11"
					alt="Github Logo"
				/>

				<LinkedIcon
					href="https://www.instagram.com/_samuks11/"
					alt="Instagram Logo"
				/>

				<LinkedIcon
					href="https://www.linkedin.com/in/samuel-miguel-barbosa/"
					alt="Linkedin Logo"
				/>
			</div>
		</footer>
	);
}
