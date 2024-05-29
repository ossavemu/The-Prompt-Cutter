import { stateService } from './state.js';
import { getFragments } from './utils.js';
import {
  textarea,
  counter,
  output,
  clearButton,
  info,
  lastButton,
} from './dom.js';

export function controller() {
  const text = textarea.value;
  const chars = text.length;
  const limit = stateService.getLimit();
  const fragments = getFragments(text, limit);

  if (text === '') {
    clearButton.disabled = true;
    info.hidden = true;
  } else {
    clearButton.disabled = false;
    info.hidden = false;
    lastButton.hidden = true;
  }

  if (stateService.getLast()) {
    lastButton.addEventListener('click', () => {
      textarea.value = stateService.getLast();
      controller();
      lastButton.hidden = true;
    });
  }

  const fragmentsTextCount = fragments.reduce(
    (acc, fragment) => acc + fragment.length,
    0
  );
  const optimizedPercentage = Math.round(
    (1 - fragmentsTextCount / chars) * 100
  );

  if (stateService.get() === null || !(stateService.get() === text)) {
    stateService.set(text);
  }
  counter.innerHTML = !text
    ? ''
    : `${chars} characters, will be split into ${fragments.length} fragments with ${fragmentsTextCount} characters. Optimized to ${optimizedPercentage}% of original text.`;

  output.innerHTML = '';

  fragments.forEach((fragment, index) => {
    const fragmentElement = document.createElement('div');
    fragmentElement.classList.add('fragment');
    fragmentElement.innerHTML = fragment;
    output.appendChild(fragmentElement);
    fragmentElement.addEventListener('click', () => {
      navigator.clipboard.writeText(fragment);
      alert(`Copied fragment ${index + 1} to clipboard.`);
    });
  });
}
