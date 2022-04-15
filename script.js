//inputs

const search_inp = document.getElementsByClassName('search_input');
const circle = document.getElementsByClassName('search_circle');
for (let i=0; i < 2; i++) {
    search_inp[i].oninput = function () {
        circle[i].style.backgroundColor = "white";
    }
}

//video's poster

document.querySelector(".video__poster").onclick = function() {
    this.style.display = "none";
    document.querySelector('#video > video').play();
}

//likes

const likes = document.querySelectorAll('.like');
const val = document.querySelectorAll('.like_value');

for (let i=0; i < likes.length; i++) {
    likes[i].onclick = function () {
        likes[i].setAttribute('src', 'images/heart-click.png');
        var val1 = parseInt(val[i].textContent);
        val[i].textContent = val1 + 1;
    }

}

//menu 
//|| document.documentElement.scrollTop

const menu = document.querySelector('header');
const articles = document.querySelector('#articles');
const locations = document.querySelector('#locations');
const video = document.querySelector('#video');
const li = document.querySelectorAll('nav > ul > li > a');

window.onscroll = function() {
    var scrolled = window.pageYOffset;
    menu_back_color(scrolled);
    menu_li_color (scrolled);
  }

function menu_back_color (scrolled) {
    if (scrolled >= 87) {
        menu.style.backgroundColor = "rgba(14, 29, 40, 0.9)";
    } else {
        menu.style.backgroundColor = "transparent";
    }
}

function menu_li_color (scrolled) {
    var margintop = 250;
        if (scrolled >= articles.offsetTop) {
            li[0].classList.add('active');
            li[1].classList.remove('active');
            li[2].classList.remove('active');
        } 
        if (scrolled >= locations.offsetTop - margintop) {
            li[0].classList.remove('active');
            li[1].classList.add('active');
            li[2].classList.remove('active');
        }
        if (scrolled >= video.offsetTop - margintop) {
            li[0].classList.remove('active');
            li[1].classList.remove('active');
            li[2].classList.add('active');
        }
        if (scrolled < articles.offsetTop) {
            li[0].classList.remove('active');
            li[1].classList.remove('active');
            li[2].classList.remove('active');
        }
}

//modal 

const open_modal = document.querySelector('nav > ul > li:last-child');
const close_modal = document.querySelector('.modal_close');
const modal = document.querySelector('.signin');

open_modal.onclick = () => {
    modal.style.display = "block";
}
close_modal.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

const comments = document.querySelectorAll('.publication_picture__name > div > img:last-child');
for (let comment of comments) {
    comment.onclick = () => {
        modal.style.display = "block";
    }
}