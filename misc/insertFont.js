// Work Sans font url
const workSans = 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

/**
 * @param {HTMLHeadElement} head
*/
export function insertFont(head){
	const preconnGstatic = document.createElement("link");
	const preconnGApis = document.createElement("link");
	const fontStylesheet = document.createElement("link");

	Object.assign(preconnGApis, {
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	});

	Object.assign(preconnGstatic, {
		crossOrigin: true,
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com'
	});

	Object.assign(fontStylesheet, {
		rel: 'stylesheet',
		href: workSans
	});

	head.append(preconnGstatic);
	head.append(preconnGApis);
	head.append(fontStylesheet);
}
