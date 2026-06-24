import useReveal from "../../hooks/useReveal";
import useSkills from "../../hooks/useSkills";

import Text from "../../components/Text";
import RevealWords from "../../components/RevealWords";
import Skill from "../../components/Skill";
import Impostor from "../../components/Gojo";

export default function About() {
	const { ref, visible } = useReveal();

	const { skills, loading, error } = useSkills();

	return (
		<section
			id="about"
			ref={ref}
			className={`
				reveal ${visible ? "visible" : ""}
				flex flex-col sm:flex-row 
				sm:items-center 
				mt-70 md:mt-24 lg:mt-32
				mb-16
				gap-8 sm:gap-12 md:gap-16
			`}
		>
			<div className="sm:w-5/10">
				<RevealWords
					text="Sobre"
					variant="title"
					className="font-bold sm:text-start mb-2 md:mb-4"
					visible={visible}
				/>
				<RevealWords
					text="mim"
					variant="title"
					className="text-(--red-light)"
					visible={visible}
					delay={80}
				/>

				<div className="flex flex-col gap-4">
					<Text variant="muted" className="text-(--text-secondary)">
						Me chamo Samuel Barbosa, estou graduando em Ciência da Computação e
						sou desenvolvedor full-stack em formação apaixonado por criar
						experiências digitais modernas, visualmente envolventes e focadas no
						usuário.
					</Text>

					<Text variant="muted" className="text-(--text-secondary)">
						Trabalho em toda a pilha de desenvolvimento, desde a criação de
						interfaces frontend intuitivas até a construção de sistemas backend
						robustos, APIs e arquiteturas de banco de dados. Sigo as melhores
						práticas do setor, como controle de versão, fluxos de trabalho ágeis
						e pipelines de CI/CD para fornecer soluções de alta qualidade,
						sustentáveis e de alto desempenho.
					</Text>

					<Text variant="muted" className="text-(--text-secondary)">
						Tenho um forte senso de design e acredito que grandes produtos
						digitais são criados na intersecção entre estética, usabilidade e
						engenharia. Gosto de aprender continuamente, resolver problemas
						complexos e transformar ideias em soluções digitais impactantes.
					</Text>
				</div>
			</div>

			<div className="sm:w-5/10">
				<RevealWords
					text="Habilidades e Tecnologias"
					variant="subtitle"
					className="mb-4 text-center sm:text-start"
					visible={visible}
					delay={600}
				/>

				<div className="flex flex-wrap gap-4">
					{skills.map((skill, index) => (
						<Skill
							key={skill.id}
							className={`skill ${visible ? "skill-visible" : ""}`}
							style={{
								transitionDelay: `${(index + 1) * 250}ms`,
							}}
						>
							{skill.name}
						</Skill>
					))}
				</div>
			</div>
		</section>
	);
}
