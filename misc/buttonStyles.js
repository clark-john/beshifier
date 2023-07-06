import { Css } from './css.js';

const trans = 'filter 150ms ease-in-out';

/**
 * @param {Css} css
*/
export function addTransitionAndClick(css){
  css.applyRule(".copy:hover, .play-audio:hover", {
    filter: 'brightness(.6)'
  });
  css.applyRule(".copy:active, .play-audio:active", {
    transform: 'translateY(3px)'
  });
};

/**
 * @param {Css} css
*/
export function copyToClipboardStyles(css){
  css.applyRule("button.copy", {
    borderRadius: '7px',
    border: 'none',
    transition: trans
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
    transition: trans
  });
};
