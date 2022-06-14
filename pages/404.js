import { createElement as $ } from "react";
import { H1 } from "../styles/textStyles";

export default function Custom404() {
	return $(H1, null, "Error 404 - No Page Found");
}
