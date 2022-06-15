import { createElement as $ } from "react";
import { BodyIntro } from "../../styles/textStyles";
import { Container, Wrapper, Content, MediaOne, MediaTwo } from "./3PartsStyle";
import Image from "next/image";
import img1 from "./../../public/candles_beach.jpeg";

export const ThreeParts = ({
	paragraphThree,
	paragraphTwo,
	paragraphTwoBis,
}) => {
	console.log(paragraphTwoBis);
	return $(
		Container,
		null,
		$(
			Wrapper,
			null,
			$(
				Content,
				null,
				$(BodyIntro, null, paragraphTwo, $("br"), $("br")),
				$(BodyIntro, null, paragraphTwoBis, $("br"), $("br")),
				$(BodyIntro, null, paragraphThree)
			),
			$(
				MediaOne,
				null,
				$(
					"video",
					{
						width: "100%",
						height: "100%",
						controls: true,
					},
					$("source", { src: "/promo.mp4", type: "video/mp4" })
				)
			),
			$(
				MediaTwo,
				null,
				$(Image, {
					layout: "raw",
					src: img1,
					style: { objectFit: "cover", width: "100%", height: "100%" },
				})
			)
		)
	);
};
