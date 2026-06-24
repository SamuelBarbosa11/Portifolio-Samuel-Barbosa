import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme) return savedTheme;

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);

		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}