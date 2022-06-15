import { createElement as $ } from "react";
import Image from "next/image";
import { BodyIntro } from "../../styles/textStyles";
import { Container, Wrapper, Text, Media } from "./TwoPartsStyle";

export const TwoParts = ({ text, media }) => {
	return $(
		Container,
		null,
		$(
			Wrapper,
			null,
			$(
				Media,
				null,
				$(Image, {
					layout: "raw",
					src: media,
					style: { objectFit: "cover", width: "100%", height: "100%" },
				})
			),
			$(
				Text,
				null,
				text.map((el, index) =>
					$(BodyIntro, { key: index }, el, $("br"), $("br"))
				)
			)
		)
	);
};
