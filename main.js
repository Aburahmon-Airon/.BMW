
const modal = document.querySelector('#testDriveModal');

const openButton = document.querySelector('#openTestDrive');
const closeButton = document.querySelector('#closeTestDrive');

const form = document.querySelector('#testDriveForm');
const message = document.querySelector('#formMessage');

openButton.addEventListener('click', function () {
    modal.classList.add('active');
});

closeButton.addEventListener('click', function () {
    modal.classList.remove('active');
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    message.textContent =
        'Demo only: your form is valid, but no request was sent.';

    form.reset();
});