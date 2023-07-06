import { Component } from "./Component.js";

export class Links extends Component {
	constructor(){
		super("div");
		this.setStyles({
			alignSelf: 'end',
			display: 'flex',
			columnGap: '1.25rem'
		});
		this.append(this.tiktokIcon());
		this.append(this.githubIcon());
	}
	githubIcon(){
		const anchor = this.createAnchor('https://github.com/clark-john')
		anchor.appendChild(Object.assign(document.createElement("img"), {
			src: './assets/github.png',
			height: 35,
			className: 'icon'
		}));
		return anchor;		
	}
	tiktokIcon(){
		const anchor = this.createAnchor('https://tiktok.com/@httpistyep');
		anchor.appendChild(Object.assign(document.createElement("img"), {
			src: './assets/tiktok.png',
			height: 35,
			className: 'icon'
		}));
		return anchor;
	}
	createAnchor(link){
		const anchor = document.createElement("a");
		anchor.href = link;
		anchor.target = "_blank";
		return anchor;
	}
}
