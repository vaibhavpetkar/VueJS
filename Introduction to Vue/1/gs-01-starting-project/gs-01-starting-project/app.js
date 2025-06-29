const buttonelement = document.querySelector('button');
const inputelement = document.querySelector('input');
const listelement = document.querySelector('ul');
buttonelement.addEventListener('click', function() {
  const newli = document.createElement('li');
  newli.textContent = inputelement.value;
  listelement.appendChild(newli);
  inputelement.value = '';
});