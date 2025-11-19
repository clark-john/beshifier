import { months } from "../misc/months.js";
import { Component } from "./Component.js";

export class Links extends Component {
	constructor(){
		super("div");
		const el = document.createElement("div");
		Object.assign(el.style, {
			display: 'flex',
			columnGap: '1.25rem'
		});
		this.setStyles({ 
			alignSelf: 'end', 
			display: 'grid',
			justifyItems: 'center'
		});
		el.append(this.tiktokIcon());
		el.append(this.githubIcon());
		this.append(el);
		this.append(this.dateElement());
	}

	// actual date
	dateNow(){
		const now = new Date();
		const month = months[now.getMonth()];
		const day = now.getDate();
		const year = now.getFullYear();
		return `${month} ${day}, ${year}`;
	}

	// date element
	dateElement(){
		const date = document.createElement("div");
		Object.assign(date.style, {
			textAlign: 'center',
			marginBlock: '10px'
		});
		date.textContent = this.dateNow();
		return date;
	}

	// icons
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

	// anchor creation
	createAnchor(link){
		const anchor = document.createElement("a");
		anchor.href = link;
		anchor.target = "_blank";
		return anchor;
	}
}
