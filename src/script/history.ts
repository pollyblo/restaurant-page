export const renderHistory = () => {
  const mainDiv = document.getElementById('content') as HTMLDivElement;
  const historyContainer = document.createElement('div');
  historyContainer.classList.add('history');
  const mainStory = createDiv('main-story');
  historyContainer.appendChild(mainStory);
  mainDiv.appendChild(historyContainer);
};

const createDiv = (id?: string): HTMLDivElement => {
  const div = document.createElement('div');
  if (id !== undefined) div.classList.add(id);
  return div;
};
