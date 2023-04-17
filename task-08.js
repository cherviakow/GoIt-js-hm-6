const form = document.querySelector('.login-form');
const userMail = document.querySelector('[type="email"]');
const userPassword = document.querySelector('[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = {
        email: userMail.value,
        pass: userPassword.value,
    }

    if(userMail.value === '' || userPassword.value === ''){
        return alert('Все поля должны быть заполнены')
    }
    form.reset()
})