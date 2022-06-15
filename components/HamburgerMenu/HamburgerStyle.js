import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

/* Navbar */
/* Main wrapper, nav element is a block. Takes the whole row 
Display is flex to easy center/align content.
Position is sticky + top 0 for it to always stay at the top.
Big zindex value to avoid other ui elements to overlap
*/
export const Nav = styled(motion.nav)`
	background: transparent;
	height: 120px;
	//margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.8s all ease;
`;

/* Second wrapper (Adds more flexibility), 
Will contain the logo and links.
*/
export const NavbarContainer = styled(motion.div)`
	background: transparent;
	display: flex;
	width: 100%;
	height: 100%;
	padding: 0 24px;
	max-width: 1100px;
	align-items: center;
	justify-content: space-between;
`;

/* Logo style */
export const LogoLink = styled.a`
	display: flex;
	justify-self: flex-start;
	align-items: center;
	margin-left: 24px;
	cursor: pointer;
	color: #fff;
	position: relative;
	font-family: "Rubik Glitch", sans-serif;
	font-size: 3rem;
`;

/* Hamburger Icon for mobiles */
export const MobileIcon = styled(motion.div)`
	display: none;

	@media screen and (max-width: 768px) {
		color: #fff;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.7rem;
	}
`;

/* Menu */

export const Menu = styled(motion.div)`
	background-color: black;
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	justify-content: center;
	//align-items: center;
	@media screen and (max-width: 768px) {
		overflow: scroll;
	}
`;

export const IconWrapper = styled(motion.span)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 2rem;
	cursor: pointer;
`;

export const MenuWrapper = styled(motion.div)`
	height: 80vh;
	width: 100%;
	margin: 0 4rem;
	margin-top: 1rem;
	max-width: 1100px;
	z-index: 1100;
	display: grid;
	grid-template-areas:
		"menubox contactbox contactbox"
		"menubox contactbox contactbox"
		"menubox mapbox mapbox";
	gap: 1.5rem;

	@media screen and (max-width: 768px) {
		grid-template-areas:
			"menubox "
			"contactbox"
			"mapbox";
		height: auto;
		margin: 3rem 1rem;
	}
`;

export const MenuBox = styled(motion.div)`
	grid-area: menubox;
	background-color: bisque;
	//overflow: hidden;
	@media screen and (max-width: 768px) {
		height: 500px;
	}
`;

export const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
`;
export const MenuItem = styled.li`
	color: black;
	padding: 0 1rem;
	cursor: pointer;
	text-align: center;
	font-family: "Train One", cursive;
	font-size: 1.4rem;
`;

export const ContactBox = styled(motion.div)`
	grid-area: contactbox;
	background-color: beige;
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ContactInfo = styled(motion.div)`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 100%;
`;
export const MapBox = styled(motion.div)`
	grid-area: mapbox;
	background-color: peru;
`;

export const IFrame = styled.iframe`
	width: 100%;
	//height: 300px;
`;

export const AImage = styled(Image)`
	width: 100%;
	height: 100%;
`;
