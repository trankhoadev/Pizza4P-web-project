/* Back to Top */
var btn = document.getElementById('back-to-top');
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'flex';
    }
    else {
        btn.style.display = 'none';
    }
}

function clickToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}