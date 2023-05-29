<!doctype html>

<html>

<head>
    <title>TF GUI</title>
    <meta charset=utf-8>
    <link rel="stylesheet" href="tfcss/tfStyles.css">
    <link rel="stylesheet" href="tfcss/tfGrid.css">
    <link rel="stylesheet" href="tfcss/tfInputs.css">
    <link rel="stylesheet" href="tfcss/tfNavbar.css">
</head>

<body>
    <?php
    include "tfhtml/tfNavbar.html";
    ?>
    <?php
    include "tfhtml/tfDropdowns.html";
    ?>
    <br>
    <br>
    <br>
    <?php
    include "tfhtml/tfGrid.html";
    ?>
    <?php
    include "tfhtml/tfDownload.html";
    ?>
    <br>
    <br>
    <br>
    <canvas id="modelVisualizer"></canvas>

    <script src="tfjs/tfServer.js"></script>
    <script src="tfjs/tfDownload.js"></script>
    <script src="tfjs/tfScroll.js"></script>
    <script src="tfjs/tfClearLayer.js"></script>
    <script src="tfjs/tfAddLayer.js"></script>
    <script src="tfjs/tfPrimaryDropdown.js"></script>
    <script src="tfjs/tfSecondaryDropdown.js"></script>
</body>

</html>