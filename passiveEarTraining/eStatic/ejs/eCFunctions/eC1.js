// handles all C1 sounds and logic
async function playSoundC1() {
    i = 0;
    imageHandler("C");
    audioHandler("C1", "C");
    await resolveAfter2Seconds();
    speak("C 1", speechVolume);
    await resolveAfter2Seconds();
    repeat = repeatNumTimes();
    next = false;
    back = false;
    while (i < repeat && stopAll === false && next === false && back === false) {
      i += 1;
      randomNum = Math.floor(Math.random() * 11);
      shouldContinue = continueFunction();
      if (shouldContinue === true) {
        if (randomNum === 0) {
          imageHandler("C");
          audioHandler("C1", "C");
          await resolveAfter2Seconds();
          speak("C", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 1) {
          imageHandler("Cs_Db");
          audioHandler("C1", "Cs_Db");
          await resolveAfter2Seconds();
          speak("C sharp / D flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 2) {
          imageHandler("D");
          audioHandler("C1", "D");
          await resolveAfter2Seconds();
          speak("D", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 3) {
          imageHandler("Ds_Eb");
          audioHandler("C1", "Ds_Eb");
          await resolveAfter2Seconds();
          speak("D sharp / E flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 4) {
          imageHandler("E");
          audioHandler("C1", "E");
          await resolveAfter2Seconds();
          speak("E", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 5) {
          imageHandler("F");
          audioHandler("C1", "F");
          await resolveAfter2Seconds();
          speak("F", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 6) {
          imageHandler("Fs_Gb");
          audioHandler("C1", "Fs_Gb");
          await resolveAfter2Seconds();
          speak("F sharp / G flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 7) {
          imageHandler("G");
          audioHandler("C1", "G");
          await resolveAfter2Seconds();
          speak("G", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 8) {
          imageHandler("Gs_Ab");
          audioHandler("C1", "Gs_Ab");
          await resolveAfter2Seconds();
          speak("G sharp / A flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 9) {
          imageHandler("A");
          audioHandler("C1", "A");
          await resolveAfter2Seconds();
          speak("A", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 10) {
          imageHandler("As_Bb");
          audioHandler("C1", "As_Bb");
          await resolveAfter2Seconds();
          speak("A sharp / B flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 11) {
          imageHandler("B");
          audioHandler("C1", "B");
          await resolveAfter2Seconds();
          speak("B", speechVolume);
          await resolveAfter2Seconds();
        };
      };
    };
    if (next === false && back === false) {
      finishedLoop();
    };
};
  