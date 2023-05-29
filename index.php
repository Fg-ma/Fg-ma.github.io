<!doctype html>

<html>

<head>
    <title>Nexus</title>
    <meta charset=utf-8>
    <link rel="stylesheet" href="static/css/styles.css">
    <link rel="stylesheet" href="static/css/navbar.css">
    <link rel="stylesheet" href="static/css/horizonalScroll.css">
    <link rel="stylesheet" href="static/css/pageSearch.css">
</head>

<body id="container">
    <?php
    include "static/html/navbar.html";
    ?>
    <?php
    include "static/html/horizontalScroll.html";
    ?>
    <br>
    <div class="pageNavBar">
        <div class="sortByContainer">
            <label for="sortBy">Sort by:</label>
            <select name="sortBy" id="sortBy">
                <option value="sortBy" disabled selected hidden>Sort by</option>
                <option value="name">Name</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
        <div class="pageSearchBar">
            <form id="pageSearchForm" action="index.php" method="GET">
                <input type="text" placeholder="Search..." name="search">
                <input type="submit" value="Search">
            </form>
        </div>
    </div>
    <?php
    echo $_GET["search"] ?? null;
    ?>
    <div id="canvas3d">

    </div>
    <script src="static/js/server.js"></script>
    <script src="static/js/three.min.js"></script>
    <script src="static/js/GLTFLoader.js"></script>
    <script src="static/js/OBJLoader.js"></script>
    <script src="static/js/MTLLoader.js"></script>
    <script src="static/js/3DLogic.js"></script>
    <script src="static/js/horizontalScroll.js"></script>
    <script src="static/js/navbar.js"></script>
</body>

</html>