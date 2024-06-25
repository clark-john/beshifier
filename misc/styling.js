import { Css } from './css.js';
import { linkStyles } from './styles/linkStyles.js';
import { 
	mainBoxStyles, 
	inputStyles,
	outputStyles
} from './styles/inputBoxStyles.js';
import { 
	copyToClipboardStyles, 
	playAudioStyles,
	addTransitionAndClick
} from './styles/buttonStyles.js';
import { insertFont } from './insertFont.js';

/**
 * function to integrate css root variables
 * @param {Css} css
*/
function rootVariables(css){
	css.applyRule(':root', {
		'--bg-color': '#2A3571',
		'--box-color': '#384799',
		'--output-color': '#222B5E'
	});
};

/**
 * function to add styles to body
 * @param {Css} css
*/
function bodyStyles(css){
	css.applyRule('body', {
		backgroundColor: 'var(--bg-color)',
		color: 'white',
		padding: 0,
		margin: 0,
		marginBlock: '2rem',
		display: 'flex',
		justifyContent: "center",
		height: 'calc(100vh - 4rem)'
	});
	css.applyRule("*", {
		boxSizing: 'border-box',
		fontFamily: '"Work Sans", sans-serif'
	});
};

/**
 * function to add styles to title
 * @param {Css} css
*/
function titleStyles(css){
	css.applyRule(".title", {
		display: "flex",
		flexDirection: "column",
		alignItems: 'center',
		rowGap: '9px'
	});
	css.applyRule(".title .main", {
		fontWeight: "600",
		fontSize: "2rem"
	});
};

export async function applyStyling(){ 
	const css = new Css();
	
	const buttonStyles = [
		copyToClipboardStyles,
		playAudioStyles,
		addTransitionAndClick
	];

	const inputBoxStyles = [
		mainBoxStyles,
		inputStyles,
		outputStyles
	];

	const styles = [
		rootVariables, 
		bodyStyles, 
		titleStyles,
		...inputBoxStyles,
		...buttonStyles,
		linkStyles
	];

	await insertFont(css);

	for (const func of styles)
		func(css);

	return css.getStylesheet();
};
