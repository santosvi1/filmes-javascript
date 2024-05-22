const overlay = document.querySelector('#modal-overlay')
const background = document.querySelector("#modal-background")
const btnModal = document.querySelector("#search-button")





background.addEventListener("click", ()=>{
    overlay.classList.remove('open')
})

btnModal.addEventListener("click", ()=>{
    overlay.classList.add('open')
})