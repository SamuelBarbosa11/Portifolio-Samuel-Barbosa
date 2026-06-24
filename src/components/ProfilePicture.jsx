import useTheme from "../hooks/useTheme";

export default function ProfilePicture({ src, srcDark, className = "" }) {
	const { theme } = useTheme();

	if (!srcDark) {
		return (
			<div className="flex col-span-1 justify-center items-center">
				<div
					className="profile-border 
          w-40 sm:w-48 md:w-64 lg:w-72
          h-40 sm:h-48 md:h-64 lg:h-72"
				>
					<img
						src={src}
						alt="foto de perfil"
						className={`
							profile-image
							${className}
						`}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="flex col-span-1 justify-center items-center">
			<div
				className="
					profile-border
					w-40 sm:w-48 md:w-64 lg:w-72
					h-40 sm:h-48 md:h-64 lg:h-72
				"
			>
				<img
					src={src}
					alt="foto de perfil"
					className={`
						profile-image
						transition-opacity duration-700
						${theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"}
						${className}
					`}
				/>

				<img
					src={srcDark}
					alt="foto de perfil"
					className={`
						profile-image
						transition-opacity duration-700
						${theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"}
						${className}
					`}
				/>
			</div>
		</div>
	);
}
