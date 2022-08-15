const root = document.querySelector(':root');
const rootStyles= getComputedStyle(root);

const random = (params) => {
    return Math.floor(Math.random() * params);
}

// root.style.setProperty("--color-primary", `rgb(${random}, 0, 255)`);

const changeColor= document.querySelector('.change-color');




const changeColore = () => {
      root.style.setProperty("--color-primary", `rgb(${random(255)}, ${random(255)}, ${random(255)})`);
      root.style.setProperty("--box-shadow", `0 0.5rem 1rem rgba(255, 255, 255, 0.9)`);
}

const colorInterval =setInterval(changeColore, 5000);

changeColor.addEventListener('click', (eo) => {
  clearInterval(colorInterval);
  root.style.setProperty("--color-primary", `rgb(${random(255)}, ${random(255)}, ${random(255)})`);
}
)





const sun= document.querySelector('.btn .fa-sun');
const moon= document.querySelector('.btn .fa-moon');
const body= document.getElementById("body");

sun.addEventListener("click",(eo) => {
    body.style.backgroundColor = "gray";
    body.style.color = "black";
    moon.classList.toggle("active");
    sun.classList.toggle("none");
})
moon.addEventListener("click",(eo) => {
    body.style.backgroundColor = "black";
    moon.classList.toggle("active");
    sun.classList.toggle("none");
}
)



const webtitle = document.getElementById("webtitle");

let i = 0;
const autowriting=  (eo) => {
  const title="Front-end developer"
    webtitle.innerText = title.slice(0,i);
    i++;
    if(i>title.length){
      i=0;
    }

  }
  const interval = setInterval(autowriting, 100);

