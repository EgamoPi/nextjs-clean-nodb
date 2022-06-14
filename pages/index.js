import { createElement as $ } from "react";
import { MainPageContainer } from "../styles/containerStyles";
import { H1 } from "../styles/textStyles";

const Home = () => {
	return $(
		MainPageContainer,
		{
			style: {
				height: 800,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			},
		},
		$(H1, { light: true }, "Welcome to Next.Js Clean Template - No DB")
	);
};

export default Home;
