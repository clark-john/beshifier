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
			onclick: () => {
				const text = document.querySelector("div.output").textContent;
				navigator.clipboard.writeText(text).then(() => {
					alert("Copied successfully");
				});
			}
		});
	}
}
