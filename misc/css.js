/**
 * class for css manipulation
*/
export class Css {
	constructor(){
		this.css = new CSSStyleSheet();
	}
	/**
	 * @param {string} selector
	 * @param {CSSStyleDeclaration} props
	*/
	applyRule(selector, props){
		let propsArr = [];
		for (const x of Object.keys(props))
			propsArr.push(this.camelToKebab(x) + ':' + props[x]);
		this.css.insertRule(selector + " { "+ propsArr.join('; ') + " }");
	}

	getStylesheet(){
		return this.css;
	}

	camelToKebab(string){
		return string.split('').reduce(
			(acc, currentValue) => {
				let val;
				val = this.isCaps(currentValue) ? "-" + currentValue.toLowerCase() : currentValue;
				return acc + val;
			}
		)
	}

	isCaps(letter){
		return !(letter === letter.toLowerCase());
	}
}
