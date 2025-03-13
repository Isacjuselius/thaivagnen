//Min carouselTrack med slides i en array
const carouselTrack = document.querySelector(".carouselTrack");
const carouselSlides = Array.from(carouselTrack.children); 

//Mina två knappar som flyttar karouselen
const rightButton = document.querySelector(".carouselButtonRight");
const leftButton = document.querySelector(".carouselButtonLeft");

//Mina navigations knappar 
const carouselNav = document.querySelector(".carouselNav");
const indicators = Array.from(carouselNav.children);

const carouselSlidesWidth = carouselSlides[0].getBoundingClientRect().width;

//Funktionen ska ta en slide och flytta den 'index' antal längder åt vänster
//så att de inte ligger ovanpå varandra.
function setCarouselPos(carouselSlides, index){
    
    //Flytta index * slideWidth gånger åt vänster
    carouselSlides.style.left = carouselSlidesWidth * index + "px";
}

//Sätter positionen för varje slide in arrayen 
carouselSlides.forEach(setCarouselPos);


rightButton.addEventListener('click', function(){
    
    const currentSlide = carouselTrack.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    const lengthToMove = getComputedStyle(nextSlide).left;

    //Kallar på transform i css för att köra translateX, alltså flytta på elementet
    // 'lengthToMove' enheter åt vänster.
    carouselTrack.style.transform = "translateX(-" + lengthToMove + ")";

    //Updatera nuvarande slide och nästa slide 
    currentSlide.classList.remove("currentSlide");
    nextSlide.classList.add("currentSlide");
})

leftButton.addEventListener('click', function(){

    const currentSlide = carouselTrack.querySelector(".currentSlide");
    const previousSlide = currentSlide.previousElementSibling;
    const lengthToMove = getComputedStyle(previousSlide).left;

    //När man är på första sliden så ska man inte kunna gå mer tillbaka
    if (!previousSlide) return; 

    //Kallar på transform i css för att köra translateX, alltså flytta på elementet
    // 'lengthToMove' enheter åt höger.
    carouselTrack.style.transform = "translateX(-" + lengthToMove + ")";

    //Updatera nuvarande slide och nästa slide 
    previousSlide.classList.add("currentSlide");
    currentSlide.classList.remove("currentSlide");
    console.log(previousSlide);
})


carouselNav.addEventListener('click', function(e){

    //Hitta vilken knapp man trycker på
    const clickedIndicator = e.target.closest('button');

    //Om det inte är en knapp hoppa ur
    if(!clickedIndicator) return;

    //Ta fram ett index för knappen
    const carouselIndex = indicators.findIndex(function(indicator) {
        return indicator === clickedIndicator;
    });
    
    //Ta fram bilden om  man vill ha fram, samt nuvarnde bild och prick
    const wantedSlide = carouselSlides[carouselIndex];
    const currentSlide = carouselTrack.querySelector(".currentSlide");
    const currentIndicator = carouselNav.querySelector(".currentSlide");
    
    //Förflytta sig i karouselen
    carouselTrack.style.transform = "translateX(-" + getComputedStyle(wantedSlide).left + ")" ;
    currentSlide.classList.remove("currentSlide");
    wantedSlide.classList.add("currentSlide");

    //Flytta pricken.
    currentIndicator.classList.remove("currentSlide");
    clickedIndicator.classList.add("currentSlide");
})
