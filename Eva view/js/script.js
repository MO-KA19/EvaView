// Show hidden apartments
let showMore = document.querySelector(".btn-2");
let hiddenApparts = document.querySelectorAll('[data-id="hidden"]');

showMore.onclick = () => {

    if (showMore.innerHTML === "عرض المزيد") {
        showMore.innerHTML = "عرض اقل";
    }

    else {
        showMore.innerHTML = "عرض المزيد";
    }
    
    for (let i=0; i < hiddenApparts.length; i++) {
        hiddenApparts[i].classList.toggle("hidden");
    }
}



// image slider for the rest section
let right = document.querySelector(".arrows #right");
let left = document.querySelector(".arrows #left");
let current = document.querySelector(".rest img");
let i = 1;
let images = [];


for (let j = 1; j < 50; j++) {
    let pic = `./rest/Img_${j}.jpg`;
    images.push(pic);
}

right.onclick = () => {
    if (i >= images.length - 1) {
        i = 1;
    }

    i++
    let active = images[i];
    current.setAttribute("src",active);
}


left.onclick = () => {
    if (i <= 1) {
        i = images.length;
    }
    
    i--;
    let active = images[i];
    current.setAttribute("src",active);
}


// Burger ico control for mobiles
let icon = document.querySelector("#burger");
let links = document.querySelector("header ul");
let closeIco = document.querySelector("#close");


icon.onclick = () => {
    if (icon.style.display === "block") {
        icon.style.display = "none";
        closeIco.style.display = "block";
        links.style.display = "block";
    }

    else {
        icon.style.display = "block";
        closeIco.style.display = "none";
        links.style.display = "none";
    }
}


closeIco.onclick = () => {
    if (icon.style.display === "block") {
        icon.style.display = "none";
        closeIco.style.display = "block";
        links.style.display = "block";
    }

    else {
        icon.style.display = "block";
        closeIco.style.display = "none";
        links.style.display = "none";
    }
}































