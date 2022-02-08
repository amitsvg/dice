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
    elementP.textContent = Math.floor(1 + Math.random()*6)

}