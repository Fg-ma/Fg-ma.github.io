// Handles logic behind difficulty buttons
function easyFunction() {
    easy = true;
    medium = false;
    hard = false;
    buttonEasy.disabled = true;
    buttonMedium.disabled = false;
    buttonHard.disabled = false;
};
  
function mediumFunction(){
    easy = false;
    medium = true;
    hard = false;
    buttonEasy.disabled = false;
    buttonMedium.disabled = true;
    buttonHard.disabled = false;
};
  
function hardFunction() {
    easy = false;
    medium = false;
    hard = true;
    buttonEasy.disabled = false;
    buttonMedium.disabled = false;
    buttonHard.disabled = true; 
};
