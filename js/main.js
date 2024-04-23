let slides = document.getElementsByClassName("slide");
let imgActive;
let nextSlide;


// DEFINIRE FUNZIONE PER CLICK


// DEFINIRE PASSAGGIO A SLIDE SUCCESSIVE(CICLO)

for(let x = 0; x < slides.length; x++){
    // definire costante per slide selezionata dal ciclo
    const slide = slides[x]
   
    // selezionata la slide impostare comando per cui essa venga resa visibile
    if(slide.classList.contains("active")){
        slide.classList.remove("active");
        imgActive = x;
    }
    
}
// DOPO IL CICLO DEFINISCO IL NUOVO INDEX DELLA SLIDE A CUI ANDRò AD AGGIUNGIURE ACTIVE
nextSlide = imgActive + 1;
slides[nextSlide].classList.add("active")
console.log(nextSlide)


