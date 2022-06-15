import { createElement as $ } from "react";
import { LandingImage, Container, Wrapper } from "./LandingStyle";

export const Landing = ({ isDarkTheme, dark, light }) => {
	return $(
		Container,
		null,
		$(
			Wrapper,
			null,
			$(LandingImage, {
				layout: "raw",
				src: isDarkTheme ? dark : light,
			})
		)
	);
};
