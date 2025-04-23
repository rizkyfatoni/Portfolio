window.addEventListener('focus',function(){
    this.document.title="Ciruno";
})
window.addEventListener('blur',function(){
    this.document.title="Rizky's Portfolio";
})

/// ini disable right click lmao
window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
}, false);

//nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
}

function openNav() {
    var x = document.getElementById('navChild');
    if (x.style.display === "flex") {
        setTimeout(function () {
            x.style.display = "none";
        }, 0)
    } else {
        setTimeout(function () {
            x.style.display = "flex";
        }, 0)
    }
}