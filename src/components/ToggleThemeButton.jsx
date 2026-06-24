import useTheme from "../hooks/useTheme";

import { LuMoonStar } from "react-icons/lu";
import { IoMdSunny } from "react-icons/io";

export default function ToggleThemeButton({ className = "", ...props }) {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<button
			onClick={toggleTheme}
			className={`
				w-10
				h-10
				border-2
				border-(--text-tertiary)
				rounded-xl
				flex
				items-center
				justify-center
				cursor-pointer
				${className}
			`}
		>
			<div
				className={`
					flex
					justify-center
					align-center
					${
						theme === "dark"
							? "hover:animate-[spin_2s_linear_infinite]"
							: "hover:animate-[float_2s_ease-in-out_infinite]"
					}
			`}
			>
				{theme === "dark" ? <IoMdSunny color="yellow" /> : <LuMoonStar />}
			</div>
		</button>
	);
}
