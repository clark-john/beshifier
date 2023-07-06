import { Css } from './css.js';

/**
 * @param {Css} css
*/
export function linkStyles(css){
	const inv = "invert(1)";
	css.applyRule("img.icon", {
		filter: inv,
		transition: 'filter 150ms ease-in-out'
	});

	css.applyRule("img.icon:hover", {
		filter: `${inv} brightness(.5)`
	});
};
