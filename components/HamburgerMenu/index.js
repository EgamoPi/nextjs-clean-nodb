import { createElement as $, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
// Navbar UI el
import { Nav, NavbarContainer } from "./HamburgerStyle";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isOpen, setIsOpen, isDarkTheme }) => {
	return $(
		Fragment,
		null,
		$(
			Nav,
			null,
			$(
				NavbarContainer,
				null,
				$(
					Link,
					{ href: "/" },
					$(Image, {
						src: isDarkTheme ? "/logo-nobg/Dark.png" : "/logo-nobg/Light.png",
						layout: "raw",
						width: 100,
						height: 100,
					})
				),
				$(GiHamburgerMenu, {
					style: {
						color: isDarkTheme ? "white" : "black",
						cursor: "pointer",
						fontSize: "1.3rem",
					},
					onClick: () => setIsOpen(!isOpen),
				})
			)
		)
	);
};

export default Navbar;
