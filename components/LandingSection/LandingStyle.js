import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	max-width: 1200px;
	//background: white;
`;

export const LandingImage = styled(Image)`
	height: 700px;
	width: 700px;
`;
