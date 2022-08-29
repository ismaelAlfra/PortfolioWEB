const img = document.querySelectorAll('.img');

var styleA = img[0].currentStyle || window.getComputedStyle(img[0]);
var styleB = img[1].currentStyle || window.getComputedStyle(img[1]);
var styleC = img[2].currentStyle || window.getComputedStyle(img[2]);
var styleD = img[3].currentStyle || window.getComputedStyle(img[3]);
var styleE = img[4].currentStyle || window.getComputedStyle(img[4]);
var styleF = img[5].currentStyle || window.getComputedStyle(img[5]);
var styleG = img[6].currentStyle || window.getComputedStyle(img[6]);
var styleH = img[7].currentStyle || window.getComputedStyle(img[7]);

var imgFalse = document.querySelectorAll('.img-false');

var color = document.querySelectorAll('.color');


var margin = parseInt(styleA.marginTop.split('p')[0]);

var x = document.querySelector('#x');
var styleX = x.currentStyle || window.getComputedStyle(x);

// console.log(heightX);

window.addEventListener('scroll', function() {
        let top = window.pageYOffset;
        top += margin;
        // var heightX = parseInt(styleX.height.split('p')[0]);

        if (top > img[1].offsetTop && styleB.zIndex == '8') {
            img[1].classList.add('fixed');
            img[1].style.zIndex = "7";
            x.style.height = '1400px';
            // color.forEach(function(element) {
            //     element.style.right = '-12%';
            //     element.style.transform = 'rotate(-50deg)';
            // })
            let p = 100;
            for (let i = 0; i < color.length; i++) {
                console.log(p);
                color[i].style.right = '-11%';
                color[i].style.transform = 'rotate(-0deg)';
                color[i].style.bottom = p.toString() + "%";
                // color[i].style.bottom = 'unset';
                color[i].children[1].style.opacity = '0';
                color[i].children[0].style.border = "0px solid white";
                color[i].children[0].style.borderRadius = "0px";
                color[i].children[0].style.width = "150px";
                color[i].children[0].style.height = "150px";
                p -= 25;
            }
        }
        if (top + 800 > imgFalse[1].offsetTop) {
            color.forEach(function(div) {
                div.style.opacity = '100%';
            })
        }
        if (top > img[2].offsetTop && styleC.zIndex == '2') {
            img[2].classList.add('fixed');
            img[2].style.zIndex = "1";
            x.style.height = '2100px';
        }
        if (top > img[3].offsetTop && styleD.zIndex == '3') {
            img[3].classList.add('fixed');
            img[3].style.zIndex = "2";
            x.style.height = '2800px';
        }
        if (top > img[4].offsetTop && styleE.zIndex == '4') {
            img[4].classList.add('fixed');
            img[4].style.zIndex = "3";
            x.style.height = '3500px';
        }
        if (top > img[5].offsetTop && styleF.zIndex == '5') {
            img[5].classList.add('fixed');
            img[5].style.zIndex = "4";
            x.style.height = '4200px';
        }
        if (top > img[6].offsetTop && styleG.zIndex == '6') {
            img[6].classList.add('fixed');
            img[6].style.zIndex = "5";
            x.style.height = '4900px';
        }
        if (top > img[7].offsetTop && styleH.zIndex == '7') {
            img[7].classList.add('fixed');
            img[7].style.zIndex = "6";
            x.style.height = '5600px';
            img[1].style.opacity = "0";
        }
        for (let i = 1; i < img.length; i++) {
            if (top < img[i].offsetTop) {
                img[i].classList.remove("fixed");
            }
        }
        // for (let i = 1; i < img.length; i++) {
        //     console.log(i);
        //     if (top > img[i].offsetTop) {
        //         var newheightX = heightX;
        //         newheightX += heightX;
        //         console.log(newheightX);
        //         x.style.height += newheightX + 'px';
        //         img[i].classList.add("fixed");
        //     }
        // }
    })
    // window.addEventListener('scroll', function() {
    //     let top = window.pageYOffset;
    //     top += margin;
    //     img.forEach(function(element) {
    //             if (top == element.offsetTop) {
    //                 console.log("ei");
    //                 element.classList.add("fixed")
    //                 heightX += heightX;
    //             }
    //         })
    // if (top > img[1].offsetTop) {
    //     console.log("ei");
    //     heightX += heightX
    //     x.style.height = heightX + 'px';
    //     img[1].classList.add("fixed");
    // }
    // if (top > img[2].offsetTop) {
    //     console.log("ei2");
    //     heightX += heightX
    //     x.style.height = heightX + 'px';
    //     img[2].classList.add("fixed");
    // }
    // if (top > img[3].offsetTop) {
    //     console.log("ei3");
    //     heightX += heightX
    //     x.style.height = heightX + 'px';
    //     img[3].classList.add("fixed");
    // }

// })