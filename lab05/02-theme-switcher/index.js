/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const setDefaultTheme = () => {
   document.querySelector("body").className = null;
}

const setDesertTheme = () => {
   document.querySelector("body").className = "desert";
}

const setOceanTheme = () => {
   document.querySelector("body").className = "ocean";
}

const setHighContrastTheme = () => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', setDefaultTheme);
document.querySelector("#desert").addEventListener('click', setDesertTheme);
document.querySelector("#ocean").addEventListener('click', setOceanTheme);
document.querySelector("#high-contrast").addEventListener('click', setHighContrastTheme);