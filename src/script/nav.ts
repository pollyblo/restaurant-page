export const navBar = () => {
  const mainDiv = document.getElementById('content') as HTMLDivElement;
  const nav = document.createElement('ul');
  const arrLi = createLi(['History', 'Credits', 'Contact']);
  const btn = homeButton();
  arrLi.forEach((li) => {
    nav.appendChild(li);
  });
  nav.id = 'navbar';
  mainDiv.appendChild(btn);
  mainDiv.appendChild(nav);
};

const createLi = (value: string[]): HTMLLIElement[] => {
  const arrLi: HTMLLIElement[] = [];
  for (const val of value) {
    const li = document.createElement('li');
    li.id = val.toLowerCase();
    li.textContent = val;
    arrLi.push(li);
  }
  console.log(arrLi);
  return arrLi;
};

const homeButton = (): HTMLDivElement => {
  const btn = document.createElement('div');
  btn.id = 'home-btn';
  btn.textContent = 'Home';
  return btn;
};
