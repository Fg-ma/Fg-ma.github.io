// Controls the horizontal scroll in the featured section
forward.onclick = function () {
    var moveByReferenceLength = firstFeaturedButton.clientWidth;
    var moveBy = moveByReferenceLength + (moveByReferenceLength * .091);
    sideScroll(container, 'right', 0.00000000000000001, moveBy, 2, title);
};

back.onclick = function () {
    var moveByReferenceLength = firstFeaturedButton.clientWidth;
    var moveBy = moveByReferenceLength + (moveByReferenceLength * .09);
    sideScroll(container, 'left', 0.00000000000000001, moveBy, 2, title);
};

function sideScroll(element, direction, speed, distance, step, title){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
