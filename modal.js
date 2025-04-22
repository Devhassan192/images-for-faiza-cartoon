let outermodal = document.querySelector('.outer_modal');
let innermodal = document.querySelector('.inner_modal');
let card = document.querySelectorAll('.card');

let allImages = document.querySelectorAll('img')

allImages.forEach(function(image){
image.addEventListener('click', function(e){
let parentCardElement = e.target.closest('.card');
let imgTitle = parentCardElement.querySelector('h2').innerText;
let imgDiscription = parentCardElement.querySelector('h3').innerText;
let  imgSrc = e.target.src;

let html = `<img src="${imgSrc}">
<div class="info_inner">
<h2 class="title">${imgTitle}</h2>
<h3 class="discription">${imgDiscription}</h3></div>`
innermodal.innerHTML = html;

outermodal.classList.add('open')

const crossDiv = document.createElement("div");
crossDiv.classList.add('cross');
innermodal.appendChild(crossDiv);

// close with cross 
let cross = document.querySelector('.cross');
cross.addEventListener('click', function(){
    outermodal.classList.remove('open')
});

})
})


outermodal.addEventListener('click', function(card){
    if(!card.target.closest(".inner_modal")){
        outermodal.classList.remove('open');
    }
});
window.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        outermodal.classList.remove('open');
    }
} )