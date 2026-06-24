import Text from "./Text";

export default function RevealWords({
	text,
	visible,
	delay = 0,
	as = "span",
	variant = "default",
	className = "",
}) {
	return text.split(" ").map((word, index) => (
		<Text
			as={as}
			variant={variant}
			key={`${word}-${index}`}
			className={`word ${visible ? "visible" : ""} ${className}`}
			style={{
				transitionDelay: `${delay + index * 80}ms`,
			}}
		>
			{word}&nbsp;
		</Text>
	));
}
