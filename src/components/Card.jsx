import Text from "./Text";

export default function Card({
	title = "Projeto X",
	imageUrl,
	githubUrl = "https://github.com/SamuelBarbosa11",
}) {
	return (
		<figure
			className="
				group
				card-glow
				shrink-0
				snap-center
				w-64 md:w-56 lg:w-70 
				h-48 md:h-42 lg:h-54
				flex flex-col 
				items-center 
				gap-2
				p-4 
				border border-(--text-tertiary)
				rounded-xl
			"
		>
			<figcaption className="w-full h-36 md:h-48 rounded-lg overflow-hidden">
				<a
					href={githubUrl || "#"}
					target={githubUrl ? "_blank" : undefined}
					rel={githubUrl ? "noopener noreferrer" : undefined}
					className="
						w-full h-full
						block
						bg-linear-(--gradient-noir)
					"
				>
					{imageUrl ? (
						<img
							src={imageUrl}
							alt={title}
							className="
								w-full h-full object-cover object-top
								transition-transform duration-500
								group-hover:scale-115
							"
						/>
					) : (
						<div
							className="
								w-full h-full
								bg-linear-(--gradient-noir)
								flex items-center justify-center
							"
						></div>
					)}
				</a>
			</figcaption>

			<Text
				as="h3"
				variant="description"
				className="w-full text-center font-bold text-(--text-secondary) text-shadow-lg"
			>
				{title}
			</Text>
		</figure>
	);
}
