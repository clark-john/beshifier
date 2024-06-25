import { Component } from "../Component.js";

export class Textarea extends Component {
	constructor(){
		super("textarea");
		this.element.placeholder = "Enter some text";
		this.setAttribute("spellcheck", "false");
		this.setAttribute("rows", 23)
		this.addEventListener("input", this.onInput);
	}
	/**
	 * @param {InputEvent} ev
	*/
	onInput(ev){
		const text = ev.target.value;
		dispatchEvent(
			new CustomEvent(
				"convert", { 
					detail: { text }
				}
			)
		);
	}
}
