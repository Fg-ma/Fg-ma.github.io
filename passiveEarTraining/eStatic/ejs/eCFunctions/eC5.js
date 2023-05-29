// handles all C5 sounds and logic
async function playSoundC5() {
    i = 0;
    imageHandler("C");
    audioHandler("C5", "C");
    await resolveAfter2Seconds();
    speak("C 5", speechVolume);
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
          audioHandler("C5", "C");
          await resolveAfter2Seconds();
          speak("C", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 1) {
          imageHandler("Cs_Db");
          audioHandler("C5", "Cs_Db");
          await resolveAfter2Seconds();
          speak("C sharp / D flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 2) {
          imageHandler("D");
          audioHandler("C5", "D");
          await resolveAfter2Seconds();
          speak("D", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 3) {
          imageHandler("Ds_Eb");
          audioHandler("C5", "Ds_Eb");
          await resolveAfter2Seconds();
          speak("D sharp / E flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 4) {
          imageHandler("E");
          audioHandler("C5", "E");
          await resolveAfter2Seconds();
          speak("E", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 5) {
          imageHandler("F");
          audioHandler("C5", "F");
          await resolveAfter2Seconds();
          speak("F", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 6) {
          imageHandler("Fs_Gb");
          audioHandler("C5", "Fs_Gb");
          await resolveAfter2Seconds();
          speak("F sharp / G flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 7) {
          imageHandler("G");
          audioHandler("C5", "G");
          await resolveAfter2Seconds();
          speak("G", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 8) {
          imageHandler("Gs_Ab");
          audioHandler("C5", "Gs_Ab");
          await resolveAfter2Seconds();
          speak("G sharp / A flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 9) {
          imageHandler("A");
          audioHandler("C5", "A");
          await resolveAfter2Seconds();
          speak("A", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 10) {
          imageHandler("As_Bb");
          audioHandler("C5", "As_Bb");
          await resolveAfter2Seconds();
          speak("A sharp / B flat", speechVolume);
          await resolveAfter2Seconds();
        } else if (randomNum === 11) {
          imageHandler("B");
          audioHandler("C5", "B");
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
