const menuIcon = document.querySelector
(".hamburger-menu");
const navbar = document.querySelector (".navbar");
menuIcon.addEventListener("click", () => {
navbar.classList.toggle("change");
});
var audio_info = document.getElementById('audio1');
    document.getElementById('play').addEventListener('click', function(){
        audio_info.play();
    }, false);

    document.getElementById('stop').addEventListener('click', function(){
        audio_info.pause();
    }, false);

//     const menuIcon = document.querySelector
//     (".hamburger-menu");
//     const navbar = document.querySelector (".navbar");
//     menuIcon.addEventListener("click", () => {
//     navbar.classList.toggle("change");
//     });
//     const menuIcon = document.querySelector
// (".hamburger-menu");
// const navbar = document.querySelector (".navbar");
// menuIcon.addEventListener("click", () => {
// navbar.classList.toggle("change");
// });