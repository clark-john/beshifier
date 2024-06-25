const workSans = 
	'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

/**
 * @param {import("./css.js").Css} css
*/
export async function insertFont({ css }) {
	const fontFaceRules = await fetch(workSans);
	const txt = await fontFaceRules.text();
	const ffRules = txt.trim()
		.replaceAll(/\/\*.*\*\//g, "")
		.trim()
		.split(/\}/m)
		.map(x => x.trim() + "}");
	ffRules.pop();
	for (const rule of ffRules)
		css.insertRule(rule, 0);
}
