const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

inputRef.addEventListener('click', event => {
  localStorage.setItem('checked', JSON.stringify(inputRef.checked));
});

inputRef.checked = JSON.parse(localStorage.getItem('checked'));

// localStorage.getItem('checked') = inputRef.checked

// inputRef.checked = localStorage.getItem('checked');

// inputRef.addEventListener('click', event => {
//   if (inputRef.checked) {
//     bodyRef.classList.add('dark-theme');
//     bodyRef.classList.remove('light-theme');
//     localStorage.setItem('checked', inputRef.checked);
//     return;
//   } else {
//     bodyRef.classList.add('light-theme');
//     bodyRef.classList.remove('dark-theme');
//     localStorage.setItem('checked', inputRef.checked);
//     return;
//   }
// });
