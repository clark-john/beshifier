
/**
 * @param {HTMLHeadElement} head
*/
export function createMetadata(head){
	const metadata = {
		charset: "UTF-8",
		viewport: "width=device-width,initial-scale=1.0",
		description: "Convert normal text to \"beshy\"-ied text"
	};

	for (const [key, content] of Object.entries(metadata)) {
		const meta = document.createElement("meta");
		if (key === 'charset') meta.setAttribute(key, content);
		else
			for (const [k, v] of [["name", key], ["content", content]])
				meta.setAttribute(k, v);
		head.append(meta);
	}

	// icon
	const icon = document.createElement("link");
	icon.rel = "icon";
	icon.href = "favicon.svg";

	head.append(icon);
}
