export function createCard(id: string, name: string, url: string) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.dataset.id = id;
  div.dataset.name = name;
  
  const img = document.createElement('img');
  img.src = url;

  div.appendChild(img);

  div.addEventListener('click', async e => {
    console.log('clicked card', id, name);
    const api = (<any>window)['electronAPI'];
    const response = await api.coreExecute(id, name) as string;
    console.log('response', id, response);
  });

  div.addEventListener('mouseover', () => {
    const tooltip = document.querySelector(`#tooltip div[data-id="${id}"]`);
    tooltip.classList.remove('hidden');
  });

  div.addEventListener('mouseout', () => {
    const tooltip = document.querySelector(`#tooltip div[data-id="${id}"]`);
    tooltip.classList.add('hidden');
  });
  
  return div;
}

export function createTooltip(card: HTMLElement) {
  const id = card.dataset.id;
  const div = document.createElement('div');
  div.classList.add('tooltip-card');
  div.classList.add('hidden');
  div.dataset.id = id;

  const srcimg = card.querySelector('img') as HTMLImageElement;
  const url = srcimg.src;

  const img = document.createElement('img');
  img.src = url;

  div.appendChild(img);

  return div;
}