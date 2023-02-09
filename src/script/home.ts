export const renderHomePage = () => {
  const contentDiv = document.createElement('div');
  const title = document.createElement('span');
  const text = document.createElement('p');
  contentDiv.id = 'content';
  document.body.appendChild(contentDiv);
  title.classList.add('title');
  text.classList.add('title');
  contentDiv.appendChild(title);
  title.textContent = 'Oslo, 31st August';
  text.textContent = 'An Ode to Melancholia';
  contentDiv.appendChild(text);
};

export const createTemplate = () => {
  const contentDiv = document.createElement('div');
  document.body.appendChild(contentDiv);
  contentDiv.id = 'content';
};
