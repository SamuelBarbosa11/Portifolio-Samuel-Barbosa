import useTheme from "../hooks/useTheme";

import gojoDark from "../assets/special_effects/gojo-dark.mp4";
import gojoLight from "../assets/special_effects/gojo-cool-guy.png";

export default function Gojo({ className = "" }) {
	const { theme } = useTheme();

	return (
		<div className={`gojo ${className}`}>
			{theme == "dark" ? (
				<video autoPlay loop muted playsInline>
					<source src={gojoDark} type="video/mp4" />
				</video>
			) : (
				<img src={gojoLight} className="gojo-light"/>
			)}
		</div>
	);
}
