document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 210,
        indicators: true
    });
    document.getElementById('fire-init2').style.animation = "fireburn 1s steps(10)";
});
var burning = new Audio();
burning.src = "./assets/Fireburn.mp3";

function closex(){
    document.getElementById('fire-init2').style.display = "none";
}
function showbase(){
    document.getElementById('fire-init2').style.left = "0%";
    document.getElementById('fire-init2').style.opacity = "1";
    document.getElementById('fire-init2').style.background = "rgb(0, 0, 0, 0.7)";
    document.getElementById('fire-init2').style.display = "block";
    document.getElementById("f2img").style.display = "block"; 
    document.getElementById("closex").style.display = "block"; 
    document.getElementById("closex2").style.display = "block"; 
    document.getElementById('fire-init2').style.animation = "";
}
function paquetes(){
}
function showm1(){
    document.getElementById("f2img").src = "./assets/Menu1.jpeg";
    showbase();
}
function showm2(){
    document.getElementById("f2img").src = "./assets/Menu2.jpeg";
    showbase();
}
function showm3(){
    document.getElementById("f2img").src = "./assets/Menu3.jpeg";
    showbase();
}
function showm4(){
    document.getElementById("f2img").src = "./assets/Menu4.jpeg";
    showbase();
}
function showm5(){
    document.getElementById("f2img").src = "./assets/Menu5.jpeg";
    showbase();
}
function showm6(){
    document.getElementById("f2img").src = "./assets/Menu6.jpeg";
    showbase();
}
function showm7(){
    document.getElementById("f2img").src = "./assets/Menu7.jpeg";
    showbase();
}
function showm8(){
    document.getElementById("f2img").src = "./assets/Menu8.jpeg";
    showbase();
}
function showm9(){
    document.getElementById("f2img").src = "./assets/Menu9.jpeg";
    showbase();
}
function showp1(){
    document.getElementById("f2img").src = "./assets/Paq1.jpeg";
    showbase();
    paquetes();
}
function showp2(){
    document.getElementById("f2img").src = "./assets/Paq2.jpeg";
    showbase();
    paquetes();
}
function showp3(){
    document.getElementById("f2img").src = "./assets/Paq3.jpeg";
    showbase();
    paquetes();
}
function showp4(){
    document.getElementById("f2img").src = "./assets/Paq4.jpeg";
    showbase();
    paquetes();
}
function showp5(){
    document.getElementById("f2img").src = "./assets/Paq5.jpeg";
    showbase();
    paquetes();
}
function showp6(){
    document.getElementById("f2img").src = "./assets/Paq6.jpeg";
    showbase();
    paquetes();
}