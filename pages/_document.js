import { createElement as $ } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return $(
			Html,
			{ lang: "en" },
			$(
				Head,
				null,
				$("meta", {
					httpEquiv: "Content-Type",
					content: "text/html; charset=utf-8",
				}),
				$("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
				$("link", {
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "true",
				}),
				$("link", {
					href: "https://fonts.googleapis.com/css2?family=Mukta:wght@200;400&family=Train+One&display=swap",
					rel: "stylesheet",
				})
			),
			$("body", null, $(Main), $(NextScript))
		);
	}
}

export default MyDocument;

/* 
[+] Notes [+]
A custom Document can update the <html> and <body> tags used to render a Page.

* The <Head /> component used in _document is not the same as next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. For all other cases, such as <title> tags, we recommend using next/head in your pages or components.

* React components outside of <Main /> will not be initialized by the browser. Do not add application logic here or custom CSS (like styled-jsx). If you need shared components in all your pages (like a menu or a toolbar), read Layouts instead.

(https://nextjs.org/docs/advanced-features/custom-document)
*/
