const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

inputRef.checked = JSON.parse(localStorage.getItem('checked'));

inputRef.addEventListener('click', event => {
  localStorage.setItem('checked', JSON.stringify(event.target.checked));
  handlerTheme();
});
handlerTheme();

function handlerTheme() {
  if (inputRef.checked) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
  }
  if (!inputRef.checked) {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
  }
}
