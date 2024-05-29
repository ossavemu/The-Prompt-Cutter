globalThis['$'] = (selector) => document.querySelector(selector);

export const textarea = $('textarea');
export const counter = $('#counter');
export const charLimit = $('#char-limit');
export const info = $('#info');
export const lastButton = $('.last-state');
export const output = $('.output');
export const clearButton = $('.clear');
