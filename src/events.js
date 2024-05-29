import { stateService } from './state.js';
import { controller } from './controller.js';
import { textarea, charLimit, clearButton, lastButton } from './dom.js';

export function startEvents() {
  clearButton.addEventListener('click', () => {
    stateService.setLast(textarea.value);
    textarea.value = '';
    stateService.set('');
    lastButton.hidden = false;
    controller();
  });

  textarea.addEventListener('input', controller);

  charLimit.addEventListener('change', () => {
    stateService.setLimit(charLimit.value);
    controller();
  });

  document.addEventListener('DOMContentLoaded', () => {
    textarea.value = stateService.get() ?? '';
    if (stateService.getLimit()) charLimit.value = stateService.getLimit();
    stateService.setLimit(charLimit.value);
    controller();
  });
}
