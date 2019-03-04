// ! this is not supported by browsers yet!
import imageUrl from "./img/learn-by-trial.jpg";

// option 1
const image = new Image();
image.src = imageUrl;
console.log(image);
document.querySelector('body').append(image);

// option 2
document.querySelector('body').innerHTML = `<img src="${imageUrl}" />`
