const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const formInput = form.querySelector('input');
const formMessage = form.querySelector('textarea');

populateData();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  // formData.email = formInput.value.trim();
  // formData.message = formMessage.value.trim();

  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formInput.value = savedData.email;
    formMessage.value = savedData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}
