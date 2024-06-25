import { Component } from "../Component.js";
import { Output } from "./Output.js";
import { Textarea } from "./Textarea.js";

export class Box extends Component {
	constructor(){
		super("div");
		this.addClass("box");
		this.append(new Textarea().getElement());
		this.append(new Output().getElement());
		
		this.append(this.button());
	}
	
	button(){
		return Object.assign(document.createElement("button"), {
			textContent: "Copy to Clipboard",
			className: 'copy',
			onclick: () => this.copyText(),
		});
	}

	copyText(){
		const outEl = document.querySelector("div.output");
		navigator.clipboard.writeText(outEl.textContent)
			.then(() => alert("Copied successfully"))
			.catch(() => alert("An error occurred!"));
	}
}
