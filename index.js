const input = document.querySelector('.js-input');
const addButton = document.querySelector('.js-add-button');
const taskList = document.querySelector('.js-tasks') 

addButton.addEventListener('click', () => {
  const name = input.value;

  if(name.trim() === '') {
    alert('please enter a valid task.')
    return;
  }
  const li = document.createElement('li')
  li.innerHTML = name;
  li.classList.add('display');
  taskList.appendChild(li);

  const span = document.createElement('span')
  span.innerHTML = `<img class="close-icon" src="imagesTodo/closeIcon.png">`
  span.addEventListener('click', () => {
    taskList.removeChild(li)
    saveTostorage();
  })
  li.appendChild(span);
  input.value = '';
  saveTostorage();
})
taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('List')
    saveTostorage();
  } else if (e.target.classList.contains('close-icon')) {
    const li = e.target.closest('li')
    taskList.removeChild(li);
    saveTostorage()
  }
})


function saveTostorage() {
  localStorage.setItem('data', taskList.innerHTML)
}

function showData() {
  const storeData = localStorage.getItem('data');
  if (storeData) {
    taskList.innerHTML = storeData
  }
}
showData();