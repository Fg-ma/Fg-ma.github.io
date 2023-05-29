// handles all C3 sounds and logic
async function playSoundC3() {
    i = 0;
    imageHandler("C");
    audioHandler("C3", "C");
    await resolveAfter2Seconds();
    speak("C 3", speechVolume);
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
          audioHandler("C3", "C");
          await resolveAfter2Seconds();
          speak("C", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 1) {
          imageHandler("Cs_Db");
          audioHandler("C3", "Cs_Db");
          await resolveAfter2Seconds();
          speak("C sharp / D flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 2) {
          imageHandler("D");
          audioHandler("C3", "D");
          await resolveAfter2Seconds();
          speak("D", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 3) {
          imageHandler("Ds_Eb");
          audioHandler("C3", "Ds_Eb");
          await resolveAfter2Seconds();
          speak("D sharp / E flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 4) {
          imageHandler("E");
          audioHandler("C3", "E");
          await resolveAfter2Seconds();
          speak("E", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 5) {
          imageHandler("F");
          audioHandler("C3", "F");
          await resolveAfter2Seconds();
          speak("F", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 6) {
          imageHandler("Fs_Gb");
          audioHandler("C3", "Fs_Gb");
          await resolveAfter2Seconds();
          speak("F sharp / G flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 7) {
          imageHandler("G");
          audioHandler("C3", "G");
          await resolveAfter2Seconds();
          speak("G", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 8) {
          imageHandler("Gs_Ab");
          audioHandler("C3", "Gs_Ab");
          await resolveAfter2Seconds();
          speak("G sharp / A flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 9) {
          imageHandler("A");
          audioHandler("C3", "A");
          await resolveAfter2Seconds();
          speak("A", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 10) {
          imageHandler("As_Bb");
          audioHandler("C3", "As_Bb");
          await resolveAfter2Seconds();
          speak("A sharp / B flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 11) {
          imageHandler("B");
          audioHandler("C3", "B");
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
