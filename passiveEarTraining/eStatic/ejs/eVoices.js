// Loads voice options
function loadVoices() {
	var voices = speechSynthesis.getVoices();
  
	voices.forEach(function(voice, i) {
		var option = document.createElement('option');
		option.value = voice.name;
		option.innerHTML = voice.name;
		voiceSelect.appendChild(option);
	});
};

loadVoices();

window.speechSynthesis.onvoiceschanged = function() {
  loadVoices();
};
