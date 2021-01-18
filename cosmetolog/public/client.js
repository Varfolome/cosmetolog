const visitForm = document.querySelector('visit');
const API_URL = 'http://localhost:5000/visit';


visitForm.addEventListener('submit', (event) => {
  console.log("Works");
  event.preventDefault();
  const formData = new FormData(visitForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const mail = formData.get('mail');
  const phone = formData.get('phone');

  const info = {
    firstName,
    lastName,
    mail,
    phone
  };

  fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify(info),
  headers: {
    'content-type': 'application/json'
  }
});

});
