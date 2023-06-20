const note = document.querySelectorAll('.note');
const submit = document.querySelector('.submit');
const thanks = document.querySelector('.thanks');
const result = document.querySelector('#result');

let choice = 0;
note.forEach((notes, index) => {
    notes.addEventListener('click', () => {
        note.forEach((element) => {
            element.classList.remove('active-note');
        });

        notes.classList.add('active-note');
        choice = notes.value;
    });
});

submit.addEventListener('click', () => {
    if (choice == 0) {
        alert("Please select a number");
    } else {
        thanks.classList.add('active-thanks');
        result.innerHTML = choice;
    }
});