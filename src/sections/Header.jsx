import Text from "../components/Text";

import Logo from "../components/Logo";
import NavegationBar from "../components/NavegationBar";
import ToggleThemeButton from "../components/ToggleThemeButton";

export default function Header() {
	return (
		<header
			className={`flex h-24 w-full justify-between items-center m-auto md:px-8`}
		>
			<Logo />

			<NavegationBar hideTags={["home"]} />

			<ToggleThemeButton />
		</header>
	);
}
