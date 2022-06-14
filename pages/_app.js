import { createElement as $, useState, useEffect } from "react";
//import "../styles/globals.css";
import { GlobalStyle } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { themes } from "../styles/colorStyles";

function MyApp({ Component, pageProps }) {
	/* DARK LIGHT MODE - DLM */
	const { dark, light } = themes;
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	// Check for user's DLM preference
	useEffect(() => {
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (prefersDark) setIsDarkTheme(true);
	}, []);
	return $(
		ThemeProvider,
		{ theme: isDarkTheme ? dark : light },
		$(GlobalStyle),
		$(
			Layout,
			{ toggleTheme, dark, light, isDarkTheme },
			$(Component, { ...pageProps })
		)
	);
}

export default MyApp;

/* 
[+] Notes [+]
Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

* Persisting layout between page changes
* Keeping state when navigating pages
* Custom error handling using componentDidCatch
* Inject additional data into pages
* Add global CSS

(https://nextjs.org/docs/advanced-features/custom-app)
*/
