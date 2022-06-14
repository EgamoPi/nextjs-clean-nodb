import { createElement as $, Fragment } from "react";
import DLM from "./DarkLightMode";
import { H3 } from "../styles/textStyles";

export const Layout = ({ children, toggleTheme, dark, light, isDarkTheme }) => {
	return $(
		Fragment,
		null,
		$("div", { style: headerStyle }, $(H3, null, "Header")),
		$(DLM, {
			isDarkTheme: isDarkTheme,
			toggleTheme,
		}),
		children,
		$("div", { style: footerStyle }, $(H3, null, "Footer"))
	);
};

const headerStyle = {
	height: 80,
	backgroundColor: "black",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};
const footerStyle = {
	height: 100,
	backgroundColor: "#010526",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	//position: "absolute",
	bottom: 0,
	width: "100%",
};

/* 
[NOTES]
This file controls the general layout of the application.
You can define shared or nested layouts.
*/
