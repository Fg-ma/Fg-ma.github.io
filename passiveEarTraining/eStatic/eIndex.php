<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passive Ear Training</title>
    <link rel="stylesheet" href="ecss/eStyles.css">
    <link rel="stylesheet" href="ecss/eControlButtons.css">
    <link rel="stylesheet" href="ecss/eInputs.css">
    <link rel="stylesheet" href="ecss/eNavbar.css">
</head>

<body>
    <?php
    include "ehtml/eNavbar.html";
    ?>
    <?php
    include "ehtml/eInputs.html";
    ?>
    <canvas id="noteVisualizer"></canvas>
    <?php
    include "ehtml/eControls.html";
    ?>
    <audio id="audioBlock" controls src="">
    </audio>
    <script src="ejs/eServer.js"></script>
    <script src="ejs/eVolume.js"></script>
    <script src="ejs/eDifficultyLevels.js"></script>
    <script src="ejs/eTimingFunctions.js"></script>
    <script src="ejs/eLogic.js"></script>
    <script src="ejs/eControlButtons.js"></script>
    <script src="ejs/eVoices.js"></script>
    <script src="ejs/eCFunctions/eC0.js"></script>
    <script src="ejs/eCFunctions/eC1.js"></script>
    <script src="ejs/eCFunctions/eC2.js"></script>
    <script src="ejs/eCFunctions/eC3.js"></script>
    <script src="ejs/eCFunctions/eC4.js"></script>
    <script src="ejs/eCFunctions/eC5.js"></script>
    <script src="ejs/eCFunctions/eC6.js"></script>
    <script src="ejs/eCFunctions/eCFunctions.js"></script>
</body>

</html>