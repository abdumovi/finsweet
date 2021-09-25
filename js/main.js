let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener('click',function(){
  modal.classList.remove('open');
  
})

btn.addEventListener('click',function (){
  modal.classList.add('open');
 
})


