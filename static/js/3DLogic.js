// Make cubes move when scrolling

// Creates scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / element.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Creates renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, element.clientHeight);
canvas3D.appendChild(renderer.domElement);

// Handles resizing the window
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / element.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, element.clientHeight);
};

// Creates lighting
const light = new THREE.AmbientLight( 0xffffff, 3.0 );
scene.add( light );

// Creates container for objects
const objects = [];

// Checks if any cubes are overlaping
function checkOverlap(objects) {
    for (var j in objects) {
        var xFirstObjectPoistion = objects[j].position.x;
        var yFirstObjectPoistion = objects[j].position.y;
        for (var k in objects){
            var xSecondObjectPoistion = objects[k].position.x;
            var ySecondObjectPoistion = objects[k].position.y;
            var distance = sqrt(pow((xSecondObjectPoistion - xFirstObjectPoistion), 2) + 
            pow((ySecondObjectPoistion - yFirstObjectPoistion), 2))
            if (0 < distance < 1) {
                xSecondObjectPoistion += 1;
                ySecondObjectPoistion += 1;
            };
        };
    };
};

// Gets first set of files to be loaded
var OBJFile1 = '..\\references\\models\\techCube.obj';
var MTLFile1 = '..\\references\\models\\techCube.mtl';
var PNGFile1 = '..\\references\\models\\techTexture.jpg';

// Creates the cubes
// Uses MTL file
new THREE.MTLLoader()
.load(MTLFile1, function (materials) {
// Uses PNG to create a material
materials.preload();
new THREE.OBJLoader()
    .setMaterials(materials)
    .load(OBJFile1, function (object) {

        var texture = new THREE.TextureLoader().load(PNGFile1);

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        // Set postion of the first object
        var xPosition = (Math.random() * 15) - 10;
        var yPosition = (Math.random() * 15) - 10;
        object.position.x = xPosition;
        object.position.y = yPosition;

        // Set scale of the first object
        var scale = (Math.random() * (.25 - .15) + .15);
        object.scale.x = scale;
        object.scale.y = scale;
        object.scale.z = scale;

        // Adds object to the scene and the objects array
        scene.add(object);
        objects.push(object);

        // clones the original object and swaps some properties
        for (let i = 0; i < 50; i++) {
            newObject = object.clone();

            var xPosition = (Math.random() * 15) - 10;
            var yPosition = (Math.random() * 15) - 10;
            newObject.position.x = xPosition;
            newObject.position.y = yPosition;

            var scale = (Math.random() * (.25 - .15) + .15);
            newObject.scale.x = scale;
            newObject.scale.y = scale;
            newObject.scale.z = scale;

            scene.add(newObject);
            objects.push(newObject);
        };
    });
});

// Gets second set of files to be loaded
var OBJFile2 = '..\\references\\models\\techCube2.obj';
var MTLFile2 = '..\\references\\models\\techCube2.mtl';
var PNGFile2 = '..\\references\\models\\techTexture2.jpg';

// Creates the cubes
// Uses MTL file
new THREE.MTLLoader()
.load(MTLFile2, function (materials) {
// Uses PNG to create a material
materials.preload();
new THREE.OBJLoader()
    .setMaterials(materials)
    .load(OBJFile2, function (object) {

        var texture = new THREE.TextureLoader().load(PNGFile2);

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        // Set postion of the first object
        var xPosition = (Math.random() * 15) - 10;
        var yPosition = (Math.random() * 15) - 10;
        object.position.x = xPosition;
        object.position.y = yPosition;

        // Set scale of the first object
        var scale = (Math.random() * (.25 - .15) + .15);
        object.scale.x = scale;
        object.scale.y = scale;
        object.scale.z = scale;

        // Adds object to the scene and teh objects array
        scene.add(object);
        objects.push(object);

        // clones the original object and swaps some properties
        for (let i = 0; i < 50; i++) {
            newObject = object.clone();

            var xPosition = (Math.random() * 15) - 10;
            var yPosition = (Math.random() * 15) - 10;
            newObject.position.x = xPosition;
            newObject.position.y = yPosition;

            var scale = (Math.random() * (.25 - .15) + .15);
            newObject.scale.x = scale;
            newObject.scale.y = scale;
            newObject.scale.z = scale;

            scene.add(newObject);
            objects.push(newObject);
        };


    });
});

checkOverlap(objects);

var xRotationMatrix = [];
var yRotationMatrix = [];

// Fills values for ratation matrices
function fillRotationMatrices() {
    xRotationMatrix = [];
    yRotationMatrix = [];
    for (let k = 0; k < 102; k++) {
        xRotationMatrix[k] = (Math.random() / 100)
        yRotationMatrix[k] = (Math.random() / 100)
    };
};

// Original values for ratation matrices
fillRotationMatrices()

// Refreshes the scene
function animate() {
    requestAnimationFrame(animate);

    // Controls the rotation of the objects
    var i = 0;
    while (i < (objects.length))  {
        var object = objects[i];
        if (timer > 100) {
            fillRotationMatrices();
        };
        object.rotation.x += xRotationMatrix[i];
        object.rotation.y += yRotationMatrix[i];
        i++;
    };

    if (timer > 100) {
        timer = 0;
    } else {
        timer++;
    };

    renderer.render(scene, camera);
};

// Math behind speeding up rotation on scroll
function multiply(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= n;
    }
}

// Speeds up rotation on scroll
window.addEventListener('scroll', function() {
    var xMatrixSum = xRotationMatrix.reduce(function(a, b){
        return a + b;
    });
    var xAdverageMatricSum = (xMatrixSum / xRotationMatrix.length)

    var yMatrixSum = yRotationMatrix.reduce(function(a, b){
        return a + b;
    });
    var yAdverageMatricSum = (yMatrixSum / yRotationMatrix.length)

    if(xAdverageMatricSum < .1) {
        multiply(xRotationMatrix, 1.025);
    }
    if(yAdverageMatricSum < .1) {
        multiply(yRotationMatrix, 1.025);
    }

    if(scrollTimer !== null) {
        clearTimeout(scrollTimer);        
    }
    scrollTimer = setTimeout(function() {
        fillRotationMatrices();
    }, 200);
}, false);

animate();
