import { useEffect, useState, useRef } from "react";

import useReveal from "../../hooks/useReveal";
import useProjects from "../../hooks/useProjects";
import useMediaQuery from "../../hooks/useMediaQuery";

import Text from "../../components/Text";
import RevealWords from "../../components/RevealWords";
import ProjectGallery from "../../components/ProjectsGallery";
import LoaderDots from "../../components/LoaderDots";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const { ref: revealRef, visible } = useReveal();
	const projectsRef = useRef(null);

	const setRefs = (element) => {
		revealRef.current = element;
		projectsRef.current = element;
	};

	const { projects, loading, error } = useProjects();
	const [expanded, setExpanded] = useState(false);
	const firstRender = useRef(true);

	function VerTudo() {
		setExpanded(true);
	}

	function VerMenos() {
		setExpanded(false);
	}

	useEffect(() => {
		if (!isDesktop) {
			setExpanded(false);
		}
	}, [isDesktop]);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		if (!expanded) {
			projectsRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, [expanded]);

	return (
		<section
			id="projects"
			ref={setRefs}
			className={`reveal ${visible ? "visible" : ""}`}
		>
			<div className="flex justify-center sm:justify-between items-end mb-12">
				<div id="title">
					<RevealWords
						text="Projetos de"
						variant="title"
						className="sm:text-start"
						visible={visible}
					/>

					<RevealWords
						text="Destaque"
						variant="title"
						className="text-(--accent-secondary)"
						visible={visible}
						delay={160}
					/>
				</div>

				{isDesktop && !expanded && (
					<div
						className="
						cursor-pointer
						md:flex md:justify-end items-end
						opacity-70 hover:opacity-100 
						trasition-opacity duration-300
					"
					>
						<button
							className="w-full h-full font-medium cursor-pointer"
							onClick={VerTudo}
						>
							Ver tudo
						</button>
						<TiArrowSortedDown size="1.25rem" />
					</div>
				)}
			</div>

			{loading || error ? (
				<LoaderDots />
			) : (
				<ProjectGallery expanded={expanded} />
			)}

			{expanded && (
				<div className="flex justify-between items-center">
					<Text
						as="a"
						href="https://github.com/SamuelBarbosa11"
						target="_blank"
						rel="noopener noreferrer"
						variant="button"
						className="button px-4 gap-3"
					>
						Mais no meu <FaGithub size={26} />
					</Text>

					<div
						className="
						cursor-pointer
						flex justify-center items-end
						gap-1
						opacity-70 hover:opacity-100
						trasition-opacity duration-300
					"
					>
						<button className="cursor-pointer font-medium" onClick={VerMenos}>
							Ver Menos
						</button>
						<TiArrowSortedUp size="1.25rem" />
					</div>
				</div>
			)}
		</section>
	);
}
