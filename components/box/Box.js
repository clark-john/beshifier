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
			onclick: this.copyText
		});
	}
	copyText = () => {
		const outEl = document.querySelector("div.output");
		const text = outEl.textContent;
		if (!this.isMobile()) {
			navigator.clipboard.writeText(text).then(() => {
				alert("Copied successfully");
			});			
		} else {
			/**
			 * @type {HTMLInputElement} fakeInp
			*/
			const fakeInp = document.createElement("input");
			fakeInp.value = text;
			outEl.append(fakeInp);
			fakeInp.select();
			fakeInp.setSelectionRange(0, text.length + 1);
			document.execCommand("copy");
			fakeInp.remove();
		}
	}
	isMobile(){
		return document.body.clientWidth < 720;
	}
}
