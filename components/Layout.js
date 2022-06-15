import { createElement as $, Fragment, useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import DLM from "./DarkLightMode";
import Navbar from "./HamburgerMenu";
import MenuPage from "./HamburgerMenu/MenuPage";
import SimpleFooter from "./Footer";

export const Layout = ({ children, toggleTheme, isDarkTheme }) => {
	// Nav bar state
	const [isOpen, setIsOpen] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		isOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isOpen]);

	return $(
		Fragment,
		null,
		$(MenuPage, {
			controls,
			setIsOpen,
			isOpen,
		}),
		$(Navbar, { setIsOpen, isOpen, isDarkTheme }),
		$(DLM, {
			isDarkTheme: isDarkTheme,
			toggleTheme,
		}),
		children,
		$(SimpleFooter)
	);
};

/* 
[NOTES]
This file controls the general layout of the application.
You can define shared or nested layouts.
*/
