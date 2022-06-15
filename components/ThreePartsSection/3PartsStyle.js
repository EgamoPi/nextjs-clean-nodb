import styled from "styled-components";

export const Container = styled.div`
	margin: 1rem 0;
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	min-height: 300px;
	max-width: 1200px;
	flex: 1;
	display: grid;
	gap: 2rem;
	grid-template-areas:
		"content media1"
		"content media2";

	@media screen and (max-width: 768px) {
		grid-template-areas:
			"media1"
			"content"
			"media2";
		padding: 0 1rem;
	}
`;

export const Content = styled.div`
	grid-area: content;
	width: 100%;
	height: auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MediaOne = styled.div`
	background-color: beige;
	grid-area: media1;
	width: 100%;
	height: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const MediaTwo = styled.div`
	grid-area: media2;
	width: 100%;
	height: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
