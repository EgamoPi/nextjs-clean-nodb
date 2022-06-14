import { createElement as $ } from "react";
import { Container, Wrapper } from "./DLMStyle";

export default function DLM({ isDarkTheme, toggleTheme }) {
	return $(
		Container,
		{ onClick: toggleTheme },
		isDarkTheme ? $(Wrapper, null, "🌞") : $(Wrapper, null, "🌚")
	);
}
