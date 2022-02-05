const makeBigger = () => {
   style = window.getComputedStyle(document.querySelector("p"), null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   if (currentSize < 80){
      document.querySelector("p").style.fontSize = (currentSize + 10) + 'px';
   }

   style = window.getComputedStyle(document.querySelector("h1"), null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   if (currentSize < 80){
      document.querySelector("h1").style.fontSize = (currentSize + 10) + 'px';
   }

};

const makeSmaller = () => {
   style = window.getComputedStyle(document.querySelector("p"), null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   if (currentSize > 20){
      document.querySelector("p").style.fontSize = (currentSize - 10) + 'px';
   }

   style = window.getComputedStyle(document.querySelector("h1"), null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   if (currentSize > 20){
      document.querySelector("h1").style.fontSize = (currentSize - 10) + 'px';
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

