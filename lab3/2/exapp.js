const name = document.getElementById(`name`);
const password = document.getElementById(`password`);
const form = document.getElementById(`form`);
const errorElement = document.getElementById(`error`);

form.addEventListener(`submit`, (e) => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push(`Name is required.`);
    }
    
    if (password.value.length <= 6) {
        messages.push(`Password must be longer than 6 charactors.`)
    }

    if (password.value.length >= 20) {
        messages.push(`Password must be less than 20 charactors.`)
    }

    if (password.value === `password`) {
        messages.push(`Password can't not be password.`)
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(`, `);
    }
})  