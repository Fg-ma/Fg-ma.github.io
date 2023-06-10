 var scrollPosition = 0;
 var links = ["../tfGUI/tfStatic/index.html", "../passiveEarTraining/eStatic/index.html", "../reboot/rStatic/index.html", "../passiveEarTraining/eStatic/index.html", "../tfGUI/tfStatic/index.html", "../passiveEarTraining/eStatic/index.html", "../tfGUI/tfStatic/index.html", "../passiveEarTraining/eStatic/index.html"];
 var images = ["/static/sourceImages/neuralNetwork.png", "/static/sourceImages/earTraining.png", "/static/sourceImages/reboot.png", "/static/sourceImages/earTraining.png", "/static/sourceImages/neuralNetwork.png", "/static/sourceImages/earTraining.png", "/static/sourceImages/neuralNetwork.png", "/static/sourceImages/earTraining.png",]

forward.onclick = function () {
    scrollPosition += 1;
    if(scrollPosition > (links.length - 1)) {
        scrollPosition = 0;
    }
    updateLinks(scrollPosition);
};

back.onclick = function () {
    scrollPosition -= 1;
    if(scrollPosition < 0) {
        scrollPosition = 7;
    }
    updateLinks(scrollPosition);
};

function updateLinks(scrollPosition){
    firstFeaturedButton.href = links[scrollPosition];
    secondFeaturedButton.href = links[(scrollPosition + 1) % links.length];
    thirdFeaturedButton.href = links[(scrollPosition + 2) % links.length];
    fourthFeaturedButton.href = links[(scrollPosition + 3) % links.length];

    var firstBackground = images[scrollPosition];
    var secondBackground = images[(scrollPosition + 1) % links.length];
    var thirdBackground = images[(scrollPosition + 2) % links.length];
    var fourthBackground = images[(scrollPosition + 3) % links.length];
    console.log(`url(${firstBackground})`);
    firstFeaturedButton.style.backgroundImage = `url(${firstBackground})`;
    secondFeaturedButton.style.backgroundImage = `url(${secondBackground})`;
    thirdFeaturedButton.style.backgroundImage = `url(${thirdBackground})`;
    fourthFeaturedButton.style.backgroundImage = `url(${fourthBackground})`;
};
