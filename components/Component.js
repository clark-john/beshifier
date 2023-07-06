/**
 * class for components creation
*/
export class Component {
	#element;
	constructor(tag){
		/**
		 * @type {HTMLElement}
		*/
		this.element = document.createElement(tag);
	}
	getElement(){
		return this.element;
	}
	append(element){
		this.element.append(element);
	}
	addEventListener(eventName, cb, isGlobal = false){
		(!isGlobal ? this.element : window).addEventListener(eventName, cb);
	}
	/**
	 * @param {CSSStyleDeclaration} stylesObject
	*/
	setStyles(stylesObject){
		Object.assign(this.element.style, stylesObject);
	}
	addClass(className){
		this.element.classList.add(className);
	}
	setAttribute(name, content){
		this.element.setAttribute(name, content);
	}
}
