let number: number = 0;
const minusEl: HTMLElement = document.getElementById('minus');
const plusEl: HTMLElement = document.getElementById('plus');
const numberEl: HTMLElement = document.getElementById('number');
minusEl.addEventListener('click', () => updateAnimations(-1));
plusEl.addEventListener('click', () => updateAnimations(1));
numberEl.firstElementChild.innerHTML = String(number);

function updateAnimations (delta: 1 | -1) {
  numberEl.innerHTML = '';
  if (delta > 0) {
    numberEl.appendChild(createELement('fade-in__increment', number + delta));
    numberEl.appendChild(createELement('fade-out__increment', number));
  } else {
    numberEl.appendChild(createELement('fade-in__decrement', number + delta));
    numberEl.appendChild(createELement('fade-out__decrement', number));
  }
  number = number + delta;
}

function createELement(className: string, text: number) {
  const el = document.createElement('div');
  el.className = className;
  el.innerHTML = String(text);
  return el;
}
