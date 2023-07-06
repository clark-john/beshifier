import { Component } from "../Component.js";

export class Output extends Component {
	constructor(){
		super('div');
		this.addClass("output");
		this.addEventListener("convert", this.onConvert, true);
	}
	/**
	 * @param {CustomEvent} ev
	*/
	onConvert = ev => {
		this.element.textContent = this.beshify(ev.detail.text);
	}
	beshify(str){
		return str.replaceAll(/\s+/g, ' 🤸🏻‍♂️ ');
	}
}
