function init() {
    var bg = document.getElementById('curved-corner-topright');
    
    const copy1F1 = document.getElementById('copyF1');
    const copy2F1 = document.getElementById('copy2F1');
    const logoF1 = document.getElementById('logo');

    const logoF2 = document.getElementById('logoF2');
    const copy1F2 = document.getElementById('copy1F2');
    const copy2F2 = document.getElementById('copy2F2')
    
    const copyCTA = document.getElementById('copyCTA');
    const arrow = document.getElementById('arrow');


    setTimeout(() => {
        // 2nd frame change 
        addAnimation(bg, 'moveDown');
    }, "4000");
    setTimeout(() => {
        // disappear copys 1st frame 
        copy1F1.classList.remove("delay1");
        disappearCopyF1(copy1F1);
    
        copy2F1.classList.remove("delay2");
        disappearCopyF1(copy2F1);
    
        logoF1.classList.remove("delay");
        disappearCopyF1(logoF1);
    }, "4200"); // +200
    
    setTimeout(() => {
        // appear 2nd frame copy
        logoF2.style.opacity = "1";
    }, "4500"); // +300
    
    setTimeout(() => {
        appearCopyF2(copy1F2);
    }, "4700"); // +300
    
    setTimeout(() => {
        appearCopyF2(copy2F2);
    }, "4800"); // +100
    
    setTimeout(() => {
        addAnimation(copyCTA, 'fade');
        addAnimation(arrow, 'fade');

    }, "4900"); // +100
    
    setTimeout(() => {
        //add arrow animation infinite
        initArrowAnimation(arrow);
    }, "5500"); // + 1000
}

function addAnimation(element, animation) {
    element.classList.add('animate');
    element.classList.add(animation);
}

function appearCopyF1(copy) {
    copy.classList.remove('fadeOut');
    copy.classList.add('delay');    
    copy.classList.add('fadeUp');
}

function disappearCopyF1(copy) {
    if (copy.id == "logo") {
        copy.classList.remove('fade');
    } else {
        copy.classList.remove('fadeUp');
    }
    copy.classList.add('fadeOut');
}

function disappearCopyF2(copy) {
    copy.classList.add('animate');
    copy.classList.add('fadeOut');          
}

function resetCopyF2(copy) {
    copy.classList.remove('fadeOut');      
}

function appearCopyF2(copy) {
    copy.classList.add('animate');
    copy.classList.add('delay');
    copy.classList.add('fade');       
}

function initArrowAnimation(arrow) {
    arrow.classList.remove('delay');
    arrow.classList.remove('animate');
    arrow.classList.remove('arrow-slow');
    arrow.classList.remove('slideRight');

    arrow.classList.add('arrow-fast');
    arrow.classList.add('animate-infinite');
    arrow.classList.add('pointingRight');
}

function resetArrow(arrow) {
    arrow.classList.remove('arrow-fast');
    arrow.classList.remove('animate-infinite');
    arrow.classList.remove('pointingRight');
    arrow.classList.add('delay');
}
