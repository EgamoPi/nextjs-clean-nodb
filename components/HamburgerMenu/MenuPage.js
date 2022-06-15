import { createElement as $ } from "react";
import {
	Menu,
	MenuWrapper,
	IconWrapper,
	MenuBox,
	ContactBox,
	MapBox,
	MenuList,
	MenuItem,
	ContactInfo,
} from "./HamburgerStyle";
import { GiIronCross } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";
import { fadeMenu, displayMenu } from "../framerAnimations";
import { H2, MediumText, Caption } from "../../styles/textStyles";
import Image from "next/image";
import logo from "../../public/logo-nobg/Light.png";

const MenuPage = ({ setIsOpen, isOpen }) => {
	return $(
		AnimatePresence,
		{ initial: false },
		isOpen &&
			$(
				Menu,
				{
					key: "fullMenu",
					animate: "show",
					variants: displayMenu,
					initial: "hidden",
					exit: "exit",
				},
				$(
					IconWrapper,
					{
						whileHover: {
							scale: 1.5,
							rotate: 90,
						},
					},
					$(GiIronCross, {
						onClick: () => setIsOpen(!isOpen),
						style: { color: "white" },
					})
				),
				$(
					MenuWrapper,
					{ variants: fadeMenu },
					$(
						MenuBox,
						null,
						$(
							MenuList,
							null,
							$(MenuItem, null, "Home"),
							$(MenuItem, null, "The Kitchen"),
							$(MenuItem, null, "TODO")
						)
					),
					$(
						ContactBox,
						null,
						$(
							ContactInfo,
							null,
							$(H2, null, `Dizzy Lizzie's`),
							$(MediumText, null, "Kokrobite, Ghana"),
							$(MediumText, null, "FJWM+3C (Google Maps)"),
							$(Caption, null, "Call us")
						),
						$(Image, {
							src: logo,
							layout: "raw",
							width: 200,
							height: 200,
							style: {
								objectFit: "contain",
								flex: 1,
								height: "100%",
							},
						})
					),
					$(
						MapBox,
						null,
						$("iframe", {
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31771.823237493205!2d-0.3748174776557694!3d5.495815713419311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbc13f2e58785%3A0x528532b2286eb7a2!2sGhana!5e0!3m2!1sen!2sgh!4v1655311803105!5m2!1sen!2sgh",
							width: "100%",
							height: "100%",
							frameBorder: "",
							allowFullScreen: "",
							title: "location",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
						})
					)
				)
			)
	);
};

export default MenuPage;
