const pes = document.querySelectorAll("img");
const animate = 'animate';
const som1 = document.getElementById("passo01");
const som2 = document.getElementById("passo02");
const title = document.getElementById("title");
const grito = document.getElementById("grito");
console.log(title.classList.length);


function animeScroll() {
    let top = window.pageYOffset + 450;
    pes.forEach(function(element) {
        if ((top) > element.offsetTop) {
            element.classList.add(animate);
            som1.play();
            console.log("eiiii")
        } else {
            element.classList.remove(animate);
        }
    })
}
window.addEventListener('scroll', function() {
    animeScroll();
});

function animeLogo() {
    let windowTop = window.pageYOffset - 3000;
    if (windowTop <= title.offsetHeight) {
        title.classList.add("titleAnima");
        console.log("DEU certo")
        grito.play();
    } else {
        title.classList.remove("titleAnima");
        grito.pause();
    }
}
window.addEventListener('scroll', function() {
    if (title.classList.length == 1) {
        animeLogo();
    }

});
let fogo = document.getElementById('fogo');
let fogoSom = document.getElementById("fogoSom")

window.addEventListener('scroll', function() {
    let topo = window.pageYOffset + 500;
    if (topo < 3000) {
        fogo.style.height = "150px";
        fogo.style.opacity = "1";
        fogoSom.play();
        fogoSom.loop = true;
    } else {
        fogo.style.height = "50px";
        fogo.style.opacity = "0";
        fogoSom.pause();
    }
});

const onMouseMove = (e) => {
    fogo.style.left = e.pageX + 'px';
    fogo.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

const ref = document.querySelector(".ref");
const slide = document.querySelector(".slide-content");

ref.addEventListener('mouseover', function() {
    ref.style.transform = "none";
    ref.style.left = "0";
    slide.style.height = "2200px";
    slide.style.opacity = "1";

})

function moveTorch(event) {
    var torch = document.getElementsByClassName("torch")[0];
    torch.style.clipPath = `circle(250px at ${event.offsetX}px ${event.offsetY}px)`;
    torch.style.opacity = "1";
}

function moveOut() {
    var torch = document.getElementsByClassName("torch")[0];
    torch.style.opacity = "0";
}
const letras = document.getElementsByClassName("alfabeto");
const letra = document.getElementById("letra")
console.log(letras[0].children);

function mudarLetra() {
    for (let i = 0; i < letras[0].children.length; i++) {
        console.log(letras[0].children[i].innerText);
        letras[0].children[i].addEventListener('click', function() {
            console.log("clicou");
            letra.innerText = letras[0].children[i].innerText;
        })
    }

}
const chamas = document.getElementsByClassName("em-chamas");
const tipos = document.getElementsByClassName("formas");

function mudarTipo() {
    for (let i = 0; i < tipos[0].children.length; i++) {
        tipos[0].children[i].addEventListener('click', function() {
            console.log(chamas[0]);
            if (i == 0) {
                chamas[0].style.margin = "30px"
                chamas[0].children[0].style.height = '70px';
                chamas[1].children[0].style.height = '0px';
                chamas[0].children[0].style.opacity = '1';
                chamas[1].children[0].style.opacity = '0';
                for (a = 0; a < letras[0].children.length; a++) {
                    console.log("Upando")
                    let ab = letras[0].children[a].innerHTML.toUpperCase();
                    letras[0].children[a].innerText = ab;
                    let cd = letra.innerText.toUpperCase();
                    letra.innerText = cd;
                }
            } else {
                chamas[1].children[0].style.height = '70px';
                chamas[0].children[0].style.height = '0px';
                chamas[1].children[0].style.opacity = '1';
                chamas[0].children[0].style.opacity = '0';
                for (a = 0; a < letras[0].children.length; a++) {
                    console.log("Lowando")
                    let ab = letras[0].children[a].innerHTML.toLowerCase();
                    letras[0].children[a].innerText = ab;
                    let cd = letra.innerText.toLowerCase();
                    letra.innerText = cd;
                }
            }
        })
    }
}

mudarLetra();
mudarTipo();