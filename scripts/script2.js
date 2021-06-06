var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var btn_contact = document.querySelectorAll('.contact');
var btn_burger = document.getElementById('burger');


window.onclick = function(event) {
    if (event.target == modal4 || event.target == modal5) {
      modal5.style.display = "none";
      modal4.style.display = "none";
    }
}

btn_contact.forEach(item => {
    item.addEventListener('click', ()=> {
        modal4.style.display = "block";
        modal5.style.display = "none";
    })
})

btn_burger.onclick = function() {
    modal5.style.display = "block";
}