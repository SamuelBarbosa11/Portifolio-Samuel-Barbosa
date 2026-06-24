import Text from "./Text";

export default function Skill({ children, className = "", ...props }) {
	return (
		<Text
			variant="muted"
			className={`skill text-(--text-secondary) font-medium ${className}`}
			{...props}
		>
			{children}
		</Text>
	);
}
