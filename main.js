/**
 * Main entry of Beshifier app
 * @author John Clark
*/
import { App } from './components/App.js';
import { createMetadata } from './misc/metadata.js';
import { applyStyling } from './misc/styling.js';

// title
document.title = "Beshifier";

// metadata creation
createMetadata(document.head);

// apply dynamic css styles to document
document.adoptedStyleSheets.push(await applyStyling());

// mount the app (root element)
document.body.append(new App().getElement());
