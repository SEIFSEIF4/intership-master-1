const navLink = document.querySelectorAll('.nav_link');
function linkAct() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAct));



/******************************** */

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparrent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}

window.onscroll = (function () {
    scrollFunction();
}
)


const pfp = document.getElementById('pfp');
const pfpSpan = document.getElementById('pfp-span');
pfp.addEventListener('click', () =>{
pfpSpan.classList.toggle("active")
});



const navItem = document.querySelectorAll('.nav-item');
function linkAct2() {
    navItem.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navItem.forEach(n => n.addEventListener('click', linkAct2));
