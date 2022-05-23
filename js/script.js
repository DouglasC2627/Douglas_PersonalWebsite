//to-top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const spans = document.querySelectorAll('h1 span')

spans.forEach(index => index.addEventListener('mouseover', function(e){

    index.classList.add('animated', 'rubberBand')
} ))

spans.forEach(index => index.addEventListener('mouseout', function(e){

    index.classList.remove('animated', 'rubberBand')
} ))


//const -> define a constant reference to a value
const cSharpBar = document.querySelector('.bar-cSharp')
const pythonBar = document.querySelector('.bar-python')
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const tmBar = document.querySelector('.bar2-tm')
const pmBar = document.querySelector('.bar2-pm')

//For the Skill Bars
var t1 = new TimelineLite()

t1.fromTo(cSharpBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(65% - 6px)`, ease: Power4.easeout})
    .fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeout})
    .fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(45% - 6px)`, ease: Power4.easeout})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(30% - 6px)`, ease: Power4.easeout})
    .fromTo(tmBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeout})
    .fromTo(pmBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeout})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller)


function showRequiredCategory(event) {

    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')

    for(i=0;i<categories.length; i++) {
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}
