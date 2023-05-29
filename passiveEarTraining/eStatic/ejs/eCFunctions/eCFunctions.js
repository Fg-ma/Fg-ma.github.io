// Handles all opertaions related to changing variables in eCFunctions
function repeatNumTimes() {
    if (repeating.value > 0) {
        return repeating.value;
    } else {
        return 10;
    };
};

function continueFunction() {
    if (stopAll === false && next === false && back === false) {
        return true;
    } else {
        return false;
    }
};

function imageHandler(note) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    base_image = new Image();
    base_image.src = '\\passiveEarTraining\\eStatic\\musicVisualization\\' + note + '.png';
    base_image.onload = function() {
      context.drawImage(base_image, 0, 0);
    };
};

function audioHandler(tone, note) {
    audioBlock.setAttribute('src', '\\passiveEarTraining\\eStatic\\musicNotes\\' + tone + '\\' + note + '.mp3');
    audioBlock.play();
};

function speak(message, volume) {
    msg.volume = volume;
    msg.text = message;
  
    if (voiceSelect.value) {
          msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
      };
  
    window.speechSynthesis.speak(msg);
};
  
function finishedLoop() {
    buttonStart.disabled = false;
    buttonLoop.disabled = false;
    context.clearRect(0, 0, canvas.width, canvas.height);
    buttonStart.style.border = "";
    buttonLoop.style.border = "";
    buttonStart.style.color = "";
    buttonLoop.style.color = "";
};
