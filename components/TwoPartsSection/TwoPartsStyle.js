import styled from "styled-components";

export const Container = styled.div`
	margin: 1rem 0;
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	//overflow-x: hidden;
	max-width: 1200px;
	flex: 1;
	display: grid;
	gap: 1rem;
	grid-template-areas: "media text";

	@media screen and (max-width: 768px) {
		grid-template-areas:
			"media"
			"text";
		padding: 0 1rem;
		height: auto;
	}
`;

export const Text = styled.div`
	width: 100%;
	height: auto;
	grid-area: text;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const Media = styled.div`
	width: 100%;
	height: auto;
	grid-area: media;
`;
