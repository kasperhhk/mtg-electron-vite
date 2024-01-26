import { createCard } from './card';
import { addCardToHand, createHand } from './hand';

export function init() {
  const opponentHand = createHand('Opponent');
  addLightningBolts(opponentHand);
  document.getElementById('opponent').appendChild(opponentHand);

  const me = createHand('Me');
  addLightningBolts(me);
  document.getElementById('me').appendChild(me);
}

let nextId = (() => {
  let id = 1;
  return () => (id++).toString();
})();

function addLightningBolts(hand: HTMLElement) {
  for (let i = 0; i<3; i++) {
    const card = createCard(nextId(), 'Lightning Bolt', 'https://cards.scryfall.io/normal/front/7/7/77c6fa74-5543-42ac-9ead-0e890b188e99.jpg?1706239968');
    addCardToHand(hand, card);
  }
}