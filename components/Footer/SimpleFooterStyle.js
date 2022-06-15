import styled from "styled-components";

export const FooterContainer = styled.div`
	height: 250px;
	background-color: #040200;
	border-top: 1px solid white;
	display: flex;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export const LogoAndSN = styled.aside`
	width: 40%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const FooterMenu = styled.aside`
	height: 100%;
	flex: 1;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const SNContainer = styled.div`
	font-size: 1.6rem;
	margin-top: 1.4rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid black;
`;

/* Logo style */
export const LogoLink = styled.a`
	cursor: pointer;
	color: black;
	position: relative;
	font-family: "Rubik Glitch", cursive;
	font-size: 3rem;
`;

export const FooterList = styled.ul`
	color: white;
	line-height: 2;
	font-family: "Mukta", sans-serif;
`;
export const ListItem = styled.li`
	:hover {
		transform: scale(1.2);
		color: yellow;
		transition: cubic-bezier(0.075, 0.82, 0.165, 1);
		cursor: pointer;
	}
`;
