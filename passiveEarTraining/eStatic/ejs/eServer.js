/* add triads, major chords, minor chords, ect... */

// Creates necessary variables
let
  audioBlock = document.getElementById("audioBlock");
  buttonEasy = document.getElementById("easyButton");
  buttonMedium = document.getElementById("mediumButton");
  buttonHard = document.getElementById("hardButton");
  voiceSelect = document.getElementById("voiceSelectionDrop");
  buttonBack = document.getElementById("backButton");
  buttonStop = document.getElementById("stopButton");
  buttonStart = document.getElementById("startButton");
  buttonLoop = document.getElementById("loopButton");
  buttonNext = document.getElementById("nextButton");
  buttonMute = document.getElementById("un-mute");
  volumeSlider = document.getElementById("vol");
  repeating = document.getElementById("timesToRepeat");
  canvas = document.getElementById('noteVisualizer');
  context = canvas.getContext('2d');
  msg = new SpeechSynthesisUtterance();
  randomNum = 0;
  toneRandomNum = 0;
  repeat = 0;
  speechVolume = .5;
  valBeforeMute = 50;
  next = false;
  back = false;
  shouldContinue = true;
  stopAll = false;
  easy = true;
  medium = false;
  hard = false;
  i = 0;
  k = 0;
