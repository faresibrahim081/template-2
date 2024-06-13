let links = document.querySelector(".header ul ");
let nav = document.querySelector(".header .link i");
nav.onclick = function () {
    if (links.style.display === 'none') {
        links.style.display = 'block';
    }else{
        links.style.display = 'none';
    }
};
//close the menu on press any where
document.addEventListener("click", (e) => {
    if(e.target !== links && e.target!== nav){
        links.style.display = 'none';
    };
});


//scroll from navbar or bullets

let alllinks = document.querySelectorAll(".header .link a");
function scrolling(elements) {
    
    elements.forEach(ele => {
  
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

scrolling(alllinks);

//scroll to top
let scrollTop = document.querySelector(".scroll i");

window.onscroll = function () {

    this.scrollY >=650 ? scrollTop.style.display = 'block' :scrollTop.style.display = 'none';
};

scrollTop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};



