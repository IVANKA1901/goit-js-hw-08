import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

const LOCAL_KEY = 'feedback-form-state';

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
let formData = {};
function onInputChange(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

function populateInputValue() {
  let savedMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (savedMessage) {
    form.elements.email.value = savedMessage.email || '';
    form.elements.message.value = savedMessage.message || '';
    formData.email = savedMessage.email || '';
    formData.message = savedMessage.message || '';
  }
}
populateInputValue();
