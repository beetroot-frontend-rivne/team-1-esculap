
// let btnHireMe = document.getElementById('btnHireMe');
let hireMeBlock = document.getElementById('modal-background');
let btnHireMe2 = document.getElementById('btnHireMe2');
let closeHireMe = document.getElementById('hireMeClose');

// btnHireMe.onclick = function () {
//     hireMeBlock.style.display = 'flex';
// }

btnHireMe2.onclick = function () {
    hireMeBlock.style.display = 'flex';
}

closeHireMe.onclick = function () {
    hireMeBlock.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == hireMeBlock) {
        hireMeBlock.style.display = "none";
    }
}


// var delay_popup = 5000;
// setTimeout("document.getElementById('cookies-block').style.display='block'", delay_popup);