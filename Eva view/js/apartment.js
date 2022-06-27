// Apartments images slider
let right = document.querySelector(".slider #r-arr");
let left = document.querySelector(".slider #l-arr");
let current = document.querySelector(".pics img");
let aprt_num = document.querySelector("#apart-no").innerHTML;
let NumberofPics = document.querySelector("#pics-no").innerHTML;
let i = 1;
let images = [];


for (let j = 1; j < NumberofPics; j++) {
    let pic = `../all apparts/${aprt_num}/Img__${j}.jpg`;
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