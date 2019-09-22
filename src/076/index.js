const inputEl = document.getElementsByTagName('input').item(0);
const wrapperEl = document.getElementsByClassName('input').item(0);
const fn = function () {
  if (inputEl.value === 'password') {
    wrapperEl.className = 'input active';
    inputEl.blur();
  }
};
inputEl.addEventListener('change', fn);
inputEl.addEventListener('click', fn);
inputEl.addEventListener('paste', fn);
inputEl.addEventListener('keyup', fn);
inputEl.addEventListener('blur', fn);
