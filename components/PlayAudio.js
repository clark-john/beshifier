import { Component } from "./Component.js";

export class PlayAudio extends Component {
	constructor(){
		super("button");
		this.addClass("play-audio");
		this.element.textContent = "Play Audio";
		this.element.onclick = this.onClick;

		/**
		 * @type {HTMLAudioElement}
		*/
		this.audio = Object.assign(document.createElement("audio"), {
			src: 'beshy.wav',
			onplay: () => {
				this.element.style.filter = "brightness(.5)";
				this.element.textContent = "Playing";
			},
			onpause: () => {
				this.element.style.filter = "brightness(1)";
				this.element.textContent = "Play Audio";
			}
		});
	}
	onClick = () =>
		this.audio.play();
}
