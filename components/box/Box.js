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
			ontouchstart: (evt) => {
				evt.preventDefault();
				this.copyText(true);
			},
			onmousedown: () => {
				this.copyText(false);
			}
		});
	}

	copyText(isMobile){
		const outEl = document.querySelector("div.output");
		const text = outEl.textContent;
		if (isMobile) {
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
		} else {
			navigator.clipboard.writeText(text);			
		}
		alert("Copied successfully");
	}
}
