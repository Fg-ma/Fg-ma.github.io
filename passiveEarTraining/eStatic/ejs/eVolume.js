// Handles the mute button
function mute() {
    if (buttonMute.checked) {
      audioBlock.volume = 0;
      speechVolume = 0;
      valBeforeMute = volumeSlider.value;
      volumeSlider.value = 0;
    } else {
      audioBlock.volume = valBeforeMute/100;
      speechVolume = valBeforeMute/100;
      volumeSlider.value = valBeforeMute;
    };
};
  
// handles the volume button
function volume(val) {
    if (buttonMute.checked) {
      buttonMute.checked = false;
      audioBlock.volume = val/100;
      speechVolume = val/100;
    } else {
      audioBlock.volume = val/100;
      speechVolume = val/100;
    };
};
