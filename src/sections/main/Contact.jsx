import useReveal from "../../hooks/useReveal";

import Text from "../../components/Text";
import RevealWords from "../../components/RevealWords";
import ToggleThemeButton from "../../components/ToggleThemeButton";

import { GiFox } from "react-icons/gi";

export default function Contact({ className = "" }) {
	const { ref, visible } = useReveal();

	return (
		<section
			id="contact"
			ref={ref}
			className={`
				reveal ${visible ? "visible" : ""} 
				relative flex flex-col 
				justify-center items-center 
				h-120 
				mt-16 
				px-4 sm:px-8 md:px-12
			`}
		>
			<div className="split absolute top-0"></div>
			<ToggleThemeButton className="absolute top-1 right-0" />

			<div className="flex flex-wrap justify-center items-center">
				<RevealWords text="Entre em" variant="title" visible={visible} />
				<RevealWords
					text="contato"
					variant="title"
					className="text-pink-600"
					visible={visible}
					delay={160}
				/>
				<RevealWords
					text="comigo"
					variant="title"
					visible={visible}
					delay={240}
				/>
				<div
					className={`word ${visible ? "visible" : ""}`}
					style={{
						transitionDelay: `${360}ms`,
					}}
				>
					<GiFox size={32} />
				</div>
			</div>

			<Text
				variant="muted"
				className="text-(--text-secondary) text-center my-4"
			>
				Estou sempre aberto a discutir novos projetos, ideias criativas ou
				oportunidades para fazer parte da sua visão.
			</Text>

			<Text
				as="a"
				variant="button"
				href="https://www.linkedin.com/in/samuel-miguel-barbosa/"
				target="_blank"
				rel="noopener noreferrer"
				className="button-gradient text-center"
			>
				Disponível para oportunidades
			</Text>
		</section>
	);
}
