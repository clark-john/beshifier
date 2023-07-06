import { Css } from './css.js';

/**
 * @param {Css} css
*/

const radius = '6px';

export function mainBoxStyles(css){
	css.applyRule(".box", {
		borderRadius: "10px",
		backgroundColor: "var(--box-color)",
		width: '100%',
		height: '400px',
		padding: '25px',
		display: 'grid',
		gridTemplateRows: '40% 40% 1fr',
		rowGap: '20px'
	});
};

/**
 * @param {Css} css
*/
export function inputStyles(css){
	css.applyRule("textarea", {
		outline: 'none',
		padding: '9px',
		borderRadius: radius,
		border: '1px solid transparent',
		width: '100%',
		height: '100%',
		fontSize: '1.1rem',
		resize: 'none',
		overflowWrap: 'break-word'
	});
}

/**
 * @param {Css} css
*/
export function outputStyles(css){
	css.applyRule(".output", {
		width: '100%',
		backgroundColor: 'var(--output-color)',
		height: '100%',
		borderRadius: radius,
		padding: '10px',
		color: 'white'
	});	
}