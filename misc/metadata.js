import { insertFont } from "./insertFont.js";

/**
 * @param {HTMLHeadElement} head
*/
export function createMetadata(head){
	const metadata = {
		charset: "UTF-8",
		viewport: "width=device-width,initial-scale=1.0",
		description: "Convert normal text to \"beshy\"-ied text"
	};

	for (const x of Object.keys(metadata)) {
		const meta = document.createElement("meta");
		const content = metadata[x];
		if (x === 'charset') {
			meta.setAttribute(x, content);
		} else {
			meta.setAttribute("name", x);
			meta.setAttribute("content", content);
		}
		head.append(meta);
	}

	// icon
	const icon = document.createElement("link");
	icon.rel = "icon";
	icon.href = "favicon.svg";

	head.append(icon);

	// font
	insertFont(head);
}
