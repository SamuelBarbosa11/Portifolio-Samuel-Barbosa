import useReveal from "../../hooks/useReveal";

import { scrollToSection } from "../../utils/scrollToSection";

import Text from "../../components/Text";
import RevealWords from "../../components/RevealWords";
import ProfilePicture from "../../components/ProfilePicture";
import LinkedIcon from "../../components/LinkedIcon";

import pfp from "../../assets/pfp/pfp.png";
import pfpDark from "../../assets/pfp/dark-pfp.jpg";

export default function HeroSection() {
	const { ref, visible } = useReveal();

	return (
		<section
			id="home"
			ref={ref}
			className={`
				reveal ${visible ? "visible" : ""}
				grid grid-cols-1 sm:grid-cols-3
				h-120
				mt-4 sm:mt-12 lg:mt-24
				gap-4 sm:gap-6 md:gap-8
			`}
		>
			<ProfilePicture src={pfp} srcDark={pfpDark} />

			<div as="div" className="m-auto sm:col-span-2">
				<div
					id="hello"
					className="
						flex 
						flex-wrap
						text-center
						justify-center sm:justify-start
					"
				>
					<RevealWords text="Olá, sou o" variant="title" visible={visible} />

					<Text
						variant="gradient"
						className={`
							gradient-flow
							gradient-glow
							word
							${visible ? "visible" : ""}
						`}
						style={{
							transitionDelay: "300ms",
						}}
					>
						Samuel Barbosa
					</Text>
				</div>

				<div id="fast-about" className="grid gap-6 mt-4 items-center">
					<Text
						id="job"
						variant="gradient_subtitle"
						className={`
							text-center
							sm:text-start
							gradient-animated
							word
							${visible ? "visible" : ""}
						`}
						style={{
							transitionDelay: "600ms",
						}}
					>
						Full-Stack Developer Trainee
					</Text>

					<Text
						as="h2"
						className="flex flex-wrap justify-center sm:justify-start"
					>
						<RevealWords
							variant="muted"
							className="text-(--text-secondary) text-shadow-xl/20 dark:text-shadow-none"
							visible={visible}
							delay={900}
							text="Sou Desenvolvedor Full-Stack em formação, com atuação prática no desenvolvimento de interfaces web, manipulação de dados, implementação de melhorias contínuas."
						/>
					</Text>
				</div>

				<div
					id="links-contact"
					className="
						flex 
						gap-4 sm:gap-8 
						my-6 sm:my-10
						justify-center sm:justify-start
					"
				>
					<LinkedIcon
						href="https://github.com/SamuelBarbosa11"
						alt="Github Logo"
					/>

					<LinkedIcon
						href="https://www.instagram.com/_samuks11/"
						alt="Instagram Logo"
					/>

					<LinkedIcon
						href="https://www.linkedin.com/in/samuel-miguel-barbosa/"
						alt="Linkedin Logo"
					/>
				</div>

				<Text
					as="button"
					variant="button"
					onClick={() => scrollToSection("projects")}
					className="button mx-auto sm:mx-0"
				>
					Ver Projetos
				</Text>
			</div>
		</section>
	);
}
