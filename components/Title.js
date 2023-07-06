import { Component } from "./Component.js";

export class Title extends Component {
	constructor(){
		super("div");
		const div = document.createElement("div");
		const desc = document.createElement("div");

		this.addClass("title");
		
		div.classList.add("main")
		desc.classList.add("desc");

		div.textContent = "Beshifier 🤸🏻‍♂️";
		desc.textContent = 'Convert normal text into "beshy"-ied text.'

		this.append(div)
		this.append(desc)
	}
}
