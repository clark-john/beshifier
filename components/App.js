import { Component } from "./Component.js";
import { Links } from "./Links.js";
import { PlayAudio } from "./PlayAudio.js";
import { Title } from './Title.js';
import { Box } from "./box/Box.js";

export class App extends Component {
	constructor(){
		super("div");
		this.append(new Title().getElement());
		this.append(new Box().getElement());
		this.setStyles({
			display: 'grid',
			justifyItems: 'center',
			width: '520px',
			gridTemplateRows: "15% 1fr 14% 1fr",
			height: '100%'
		});
		this.playAudio = new PlayAudio().getElement();
		this.append(this.playAudio);
		this.append(new Links().getElement());

		this.onResize();
		window.onresize = this.onResize;
	}

	onResize = () => {
		const width = document.body.clientWidth;
		const height = document.body.clientHeight;
		
		// width changes
		if (width < 600)
			document.body.style.marginInline = "20px";

		// height changes
		this.playAudio.style.marginBlock = height < 790 ? '1.6rem' : '2.5rem';
	}
}
