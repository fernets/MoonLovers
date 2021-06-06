var modal4 = document.getElementById('myModal4');
var btn_contact = document.querySelectorAll('.contact');


window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
}

btn_contact.forEach(item => {
    item.addEventListener('click', ()=> {
        modal4.style.display = "block";
    })
})
