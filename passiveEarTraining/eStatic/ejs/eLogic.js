// Handles selections and redirects based on conditions
async function main() {
    stopAll = false;
    buttonStart.disabled = true;
    buttonLoop.disabled = true;
    if (easy === true && next === false && back === false) {
      toneRandomNum = 3;
      await playSoundC3();
      buttonStart.disabled = false;
      buttonLoop.disabled = false;
    } else if (medium == true && next === false && back === false) {
      toneRandomNum = Math.floor(Math.random() * 2 + 2)
      if (toneRandomNum === 2) {
        await playSoundC2();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 3) {
        await playSoundC3();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else {
        await playSoundC4()
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      }
    } else if (hard == true && next === false && back === false) {
      toneRandomNum = Math.floor(Math.random() * 6)
      if (toneRandomNum === 0) {
        await playSoundC0();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 1) {
        await playSoundC1();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 2) {
        await playSoundC2();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 3) {
        await playSoundC3();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 4) {
        await playSoundC4();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 5) {
        await playSoundC5();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else {
        await playSoundC6();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      }
    } else if (next === true || back === true) {
      if (toneRandomNum === 0) {
        await playSoundC0();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 1) {
        await playSoundC1();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 2) {
        await playSoundC2();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 3) {
        await playSoundC3();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 4) {
        await playSoundC4();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 5) {
        await playSoundC5();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      } else if (toneRandomNum === 6) {
        await playSoundC6();
        buttonStart.disabled = false;
        buttonLoop.disabled = false;
      };
    };
};
  