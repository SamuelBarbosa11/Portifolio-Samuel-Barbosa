import useProjects from "../hooks/useProjects";
import useMediaQuery from "../hooks/useMediaQuery";

import Card from "../components/Card";

export default function ProjectGallery({
	expanded = false,
	className = "",
	...props
}) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const { projects, loading, error } = useProjects();
	const showAnimation = isDesktop && expanded;

	return (
		<div className="overflow-hidden">
			<div
				id="cards"
				className={`
          flex
          gap-4 lg:gap-8
          ${expanded ? "overflow-hidden" : "overflow-x-auto"}
          snap-x snap-mandatory
          scroll-smooth scrollbar-hide
          px-4 py-8
          ${expanded && "flex-wrap"}
          justify-start md:justify-center
          ${className}
        `}
			>
				{(expanded || !isDesktop ? projects : projects.slice(0, 3)).map(
					(project, index) => (
						<div
							key={project.id}
							className={
								showAnimation && index >= 3 ? "extra-project-card" : ""
							}
							style={
								showAnimation && index >= 3
									? {
											animationDelay: `${(index - 3) * 80}ms`,
										}
									: undefined
							}
						>
							<Card
								title={project.title}
								imageUrl={project.imageUrl}
								githubUrl={project.github}
							/>
						</div>
					)
				)}
			</div>
		</div>
	);
}
