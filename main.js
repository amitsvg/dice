let elementP = document.getElementById('elementP');
// elementP.textContent = '6';

let btn = document.getElementById('rollBtn');
btn.addEventListener("click", function changeP(){
    document.getElementById("pic").classList.add('animate');
    elementP.textContent="";
    setTimeout(display, 500)
    setTimeout(removeAnimation, 500)
})
function removeAnimation(){
    document.getElementById("pic").classList.remove('animate');
}

function display() {
    elementP.textContent = getRandomInt(1,6);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }