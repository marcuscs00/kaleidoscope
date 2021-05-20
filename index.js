function setBackgroundImage() {
let file = document.querySelector('input').files[0];
        let reader  = new FileReader();
        reader.onload = function(e)  {
	    let backgroundImageElement = document.querySelector('body');
	    backgroundImageElement.style.backgroundImage = `url("${file}")`;
	}
	reader.readAsDataURL(file);
}

