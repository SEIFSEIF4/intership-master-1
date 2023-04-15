const navLink = document.querySelectorAll(".nav_link");
function linkAct() {
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAct));

/******************************** */

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("noTransparrent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}

window.onscroll = function () {
    scrollFunction();
};

const pfp = document.getElementById("pfp");
const pfpSpan = document.getElementById("pfp-span");
pfp.addEventListener("click", () => {
    pfpSpan.classList.toggle("active");
});

const navItem = document.querySelectorAll(".nav-item");
function linkAct2() {
    navItem.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
}
navItem.forEach((n) => n.addEventListener("click", linkAct2));



const seeAll = document.getElementById("seeAll");
const boxsRequest = document.getElementById("boxsRequest");
seeAll.addEventListener("click", () => {
    boxsRequest.classList.toggle("active");
});    

const seeAll2 = document.getElementById("seeAll2");
const boxsRequest2 = document.getElementById("boxsRequest2");
seeAll2.addEventListener("click", () => {
    boxsRequest2.classList.toggle("active");
});

/***********/ 
const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.card--wrapper');



//event for handeling buttons when it got clicked 
buttons.forEach(button =>button.addEventListener('click',handelButtonClick));
//event for handeling keyup 
window.addEventListener('keyup',handelKeyup);



function handelKeyup(e){
    if(e.key === 'Escape') closeModal();
}



function handelButtonClick(e){
    if(e.currentTarget.classList.contains('disapprove_btn'))
    {
        openModal();
    }
    else if(e.currentTarget.classList.contains('send-rejetion_btn'))
    {
        closeModal();
    }
}




function openModal(){
    if(modal.classList.contains('open'))
    {
        console.info('modal already opened');
        return;
    }


    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}