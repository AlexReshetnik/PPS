var list = document.getElementById("toursList");

list.addEventListener("mouseover", function (e) {
    if (!list.open) { list.open = true; }

});

list.addEventListener("mouseout", function (e) {
    if (list.open) {
        list.open = false;
    }

});