var list = document.getElementById("toursList");

list.addEventListener("mouseover", function (e) {
    if (!list.open) { list.open = true; }

});

list.addEventListener("mouseout", function (e) {
    if (list.open) {
        list.open = false;
    }

});

function showloginBox() {
    document.querySelector("body").classList.toggle('overflowhidden');
    document.querySelector("#loginBloc").classList.toggle('visibilityhidden');
    document.querySelector("#loginBloc").classList.toggle('showBoxRegistr');
}

function showReistrationBox() {
    document.querySelector("#loginBloc").classList.toggle('visibilityhidden');
    document.querySelector("#reistrationBloc").classList.toggle('visibilityhidden');
    document.querySelector("#reistrationBloc").classList.toggle('showBoxRegistr');
}

