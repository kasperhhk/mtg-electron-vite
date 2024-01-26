import { createTooltip } from './card';

export function createHand(name: string) {
  const div = document.createElement('div');
  div.classList.add('hand');

  const legend = document.createElement('span');
  legend.classList.add('hand-legend');
  legend.innerText = name;

  const content = document.createElement('div');
  content.classList.add('hand-content');

  div.appendChild(legend);
  div.appendChild(content);

  return div;
}

export function addCardToHand(handElement: HTMLElement, cardElement: HTMLElement) {
  const content = handElement.querySelector('.hand-content');
  content.appendChild(cardElement);

  const cardTooltip = createTooltip(cardElement);
  document.getElementById('tooltip').appendChild(cardTooltip);
}