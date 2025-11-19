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
			onplay: () => this.alterButton("Playing", ""),
			onpause: () => this.alterButton("Resume Audio"),
			onended: () => this.alterButton("Play Audio")
		});
	}

	alterButton(text, lightness = 'light') {
		this.element.style.filter = "brightness(" + (lightness === 'light' ? '1' : '.5') + ")";
		this.element.textContent = text;
	}

	onClick = () => {
		this.audio[this.element.textContent !== 'Playing' ? 'play' : 'pause']();
	}
}
