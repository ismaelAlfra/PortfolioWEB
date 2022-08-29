var linkIndex = document.querySelectorAll(".link-index");
var icons = document.querySelectorAll(".icons");
var body = document.querySelector('body');
console.log(icons);
for (i = 0; i < linkIndex.length; i++) {
    linkIndex[i].addEventListener('click', function() {
        console.log('click');
        body.style.opacity = '0';
        // icons.forEach(function(element) {
        //     element.style.opacity = '0';
        // }); {

        // }
    })
    linkIndex[2].addEventListener('click', function() {
        body.style.opacity = '1';
        alert('Em construção');
    })
}

function delay(URL) {
    setTimeout(function() { window.location.href += URL }, 800);
}