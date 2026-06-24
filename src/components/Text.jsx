import React from "react";

export const textVariants = {
	default: "text-sm md:text-lg lg:text-xl font-poppins",
	
	title: "text-2xl md:text-3xl lg:text-4xl font-medium font-jb-mono text-shadow-lg/20",

	subtitle:
		"text-xl md:text-2xl lg:text-3xl font-medium font-jb-mono text-shadow-lg/20",

	description: "text-sm md:text-md lg:text-lg font-jb-mono",

	muted: "text-sm md:text-md lg:text-lg",

	heading: "text-xs sm:text-sm md:text-base font-jb-mono font-bold text-shadow-lg",

	button: "text-sm md:text-md lg:text-lg font-jb-mono font-bold text-shadow-lg",

	gradient:
		"text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-transparent bg-clip-text bg-linear-(--title-gradient)",

	gradient_subtitle:
		"text-sm md:text-md lg:text-xl font-jb-mono font-medium text-transparent bg-clip-text bg-linear-(--subtitle-gradient) text-shadow-lg/20",
};

export default function Text({
	as = "span",
	variant = "default",
	className = "",
	children,
	...props
}) {
	return React.createElement(
		as,
		{
			className: `${textVariants[variant]} ${className}`,
			...props,
		},
		children
	);
}
