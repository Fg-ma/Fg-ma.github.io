// Handles stop button
buttonStop.onclick = async function() {
    buttonStart.disabled = false;
    buttonLoop.disabled = false;
    stopAll = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    buttonStart.style.border = "";
    buttonLoop.style.border = "";
    buttonStart.style.color = "";
    buttonLoop.style.color = "";
};

// Handles start button
buttonStart.onclick = function() {
    stopAll = false;
    buttonStart.style.border = "2px solid #F5F5F5";
    buttonStart.style.color = "#F5F5F5";
    main();
};
  
// Handles loop button
buttonLoop.onclick = async function() {
    stopAll = false;
    buttonLoop.style.border = "2px solid #F5F5F5";
    buttonLoop.style.color = "#F5F5F5";
    while (k < 10000 && stopAll === false) {
      k += 1;
      await main();
    };
};

// Handles next button
buttonNext.onclick = async function() {
    next = true;
    if (toneRandomNum === 6) {
        toneRandomNum = 0;
    } else {
        toneRandomNum += 1;
    }
    await resolveAfter2Seconds();
    main();
};

// Handles back button
buttonBack.onclick = async function() {
    back = true;
    if (toneRandomNum === 0) {
        toneRandomNum = 6;
    } else {
        toneRandomNum -= 1;
    }
    await resolveAfter2Seconds();
    main();
};
