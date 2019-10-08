window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "7px 10px";
        document.getElementById("sublogo-text").style.fontSize = "16px";
    } else {
        document.getElementById("navbar").style.padding = "23px 10px";
        document.getElementById("sublogo-text").style.fontSize = "22px";
    }
}