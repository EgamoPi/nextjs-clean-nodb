import { createElement as $, Fragment } from "react";
import { Landing } from "../components/LandingSection";
import { ThreeParts } from "../components/ThreePartsSection/3Parts";
import { TwoParts } from "../components/TwoPartsSection";
import { indexData } from "../public/data/indexData";
import img1 from "./../public/lizzie@2x.png";
import img2 from "./../public/ghana_beach.jpeg";
import darkLady from "../public/lady-coconut-nobg/Dark.png";
import lightLady from "../public/lady-coconut-nobg/Light.png";

const Home = ({ isDarkTheme }) => {
	const {
		paragraphOne,
		paragraphTwo,
		paragraphTwoBis,
		paragraphThree,
		paragraphFour,
		paragraphFourBis,
		paragraphFive,
		paragraphFiveBis,
	} = indexData;
	return $(
		Fragment,
		null,
		$(Landing, {
			isDarkTheme,
			paragraphOne,
			paragraphTwo,
			dark: darkLady,
			light: lightLady,
		}),
		$(ThreeParts, { paragraphTwo, paragraphThree, paragraphTwoBis }),
		$(TwoParts, {
			text: [paragraphFour, paragraphFourBis],
			media: img1,
			style: { marginTop: 20 },
		}),
		$(TwoParts, {
			text: [paragraphFive, paragraphFiveBis],
			media: img2,
			style: { marginTop: 20 },
		})
	);
};

export default Home;
