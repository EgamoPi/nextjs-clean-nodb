import { createElement as $ } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillTwitterSquare,
} from "react-icons/ai";
import {
	FooterContainer,
	LogoAndSN,
	SNContainer,
	FooterMenu,
	FooterList,
	ListItem,
} from "./SimpleFooterStyle";
import logo from "../../public/logo-nobg/Light.png";

const SimpleFooter = () => {
	return $(
		FooterContainer,
		null,
		$(
			LogoAndSN,
			null,
			$(Link, { href: "/" }, $(Image, { src: logo, objectFit: "contain" })),
			$(
				SNContainer,
				null,
				$(
					"a",
					{
						href: "https://www.instagram.com/dizzylizziesbeach",
						target: "_blank",
						rel: "noreferrer noopener",
					},
					$(AiFillInstagram, { style: { cursor: "pointer", marginRight: 20 } })
				),
				$(
					"a",
					{
						href: "https://www.facebook.com/dizzylizziesbeachresort/",
						target: "_blank",
						rel: "noreferrer noopener",
					},
					$(AiFillFacebook, { style: { cursor: "pointer", marginRight: 20 } })
				),
				$(
					"a",
					{
						href: "https://twitter.com/dizzylizzies1",
						target: "_blank",
						rel: "noreferrer noopener",
					},
					$(AiFillTwitterSquare, { style: { cursor: "pointer" } })
				)
			)
		),
		$(
			FooterMenu,
			null,
			$(
				FooterList,
				null,
				$(Link, { href: "#" }, $(ListItem, null, "About Us")),
				$(Link, { href: "#" }, $(ListItem, null, "Community")),
				$(Link, { href: "#" }, $(ListItem, null, "Help & Support"))
			),
			$(
				FooterList,
				null,
				$(Link, { href: "#" }, $(ListItem, null, "Cookie Policy")),
				$(Link, { href: "#" }, $(ListItem, null, "Terms of Service")),
				$(Link, { href: "#" }, $(ListItem, null, "Sitemap"))
			)
		)
	);
};

export default SimpleFooter;
