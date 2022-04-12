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