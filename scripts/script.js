var modal = document.getElementById('myModal');
var btn = document.getElementById("reg1");
var btn3 = document.getElementById("reg2");
var btn2 = document.getElementById("modal-btn1");
var login = document.getElementById("login");
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var btn_log = document.querySelector('.logIn');
var btn_contact = document.querySelectorAll('.contact');
var btn_burger = document.getElementById('burger');

btn.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

login.onclick = function() {
    modal5.style.display = "none";
    modal3.style.display = "block";
}

btn2.addEventListener('click', ()=> {
    modal.style.display = "none";
});

btn2.addEventListener('click', ()=>{
    modal2.style.display = 'block';
});

window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4) {
      modal.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal4.style.display = "none";
    }
}

btn_log.addEventListener('click', ()=>{
    modal3.style.display = 'block';
});

btn_contact.forEach(item => {
    item.addEventListener('click', ()=> {
        modal4.style.display = "block";
        modal5.style.display = "none";
    })
})

btn_burger.onclick = function() {
    modal5.style.display = "block";
}