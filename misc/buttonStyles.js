import { Css } from './css.js';

/**
 * @param {Css} css
*/
export function copyToClipboardStyles(css){
  css.applyRule("button.copy", {
    borderRadius: '7px',
    border: 'none',
  });
};

/**
 * @param {Css} css
*/
export function playAudioStyles(css){
  css.applyRule("button.play-audio", {
    width: '100%',
    borderRadius: '10px',
    border: 'none',
    marginBlock: '2.5rem',
  });
};
