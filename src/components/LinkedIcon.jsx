import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import instagramLogo from "../assets/socials/instagram.svg";

export default function LinkedIcon({
	href = "",
	alt = "Linked Icon",
	className = "",
	...props
}) {
	
	const SOCIALS = {
		github: {
			Component: () => <FaGithub size={32} />,
		},

		instagram: {
			Component: () => (
				<img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
			),
		},

		linkedin: {
			Component: () => <BiLogoLinkedin size={32} className="text-blue-600" />,
		},
	};

	function getSocialData(href) {
		const url = href.trim().toLowerCase();

		for (const [social, data] of Object.entries(SOCIALS)) {
			if (url.includes(social)) {
				return data;
			}
		}

		return SOCIALS.github;
	}

	const { Component } = getSocialData(href);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`link-icon ${className}`}
			{...props}
		>
			<Component />
		</a>
	);
}
