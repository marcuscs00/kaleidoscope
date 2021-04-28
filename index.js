let backgroundImageElement = document.querySelector('body');

let fileInputElement = document.querySelector('input');

let image = fileInputElement.files[0];

// TODO: Delete <input> element when image submited

backgroundImageElement.style.backgroundImage = `url("${image}")`;

