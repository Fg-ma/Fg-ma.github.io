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

// Checks if any cubes are overlaping in the x-direction
function xCheckOverlap(xPosition) {
    for (var j in objects) {
        var xCheck = xPosition-objects[j].position.x;
        if (-10 < xCheck < 0) {
            return xPosition - (Math.random() * 5);
        } else if (0 < xCheck < 10) {
            return xPosition + (Math.random() * 5);
        } else {
            return xPosition;
        };
    };
};

// Checks if any cubes are overlaping in the y-direction
function yCheckOverlap(yPosition) {
    for (var j in objects) {
        var yCheck = yPosition-objects[j].position.y;
        if (-10 < yCheck < 0) {
            return yPosition - (Math.random() * 5);
        } else if (0 < yCheck < 10) {
            return yPosition + (Math.random() * 5);
        } else {
            return yPosition;
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

        // Adds object to the scene and teh objects array
        scene.add(object);
        objects.push(object);

        // clones the original object and swaps some properties
        for (let i = 0; i < 50; i++) {
            newObject = object.clone();

            var xPosition = (Math.random() * 15) - 10;
            var yPosition = (Math.random() * 15) - 10;
            xCorrected = xCheckOverlap(xPosition);
            yCorrected = yCheckOverlap(yPosition);
            newObject.position.x = xCorrected;
            newObject.position.y = yCorrected;

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
            xCorrected = xCheckOverlap(xPosition);
            yCorrected = yCheckOverlap(yPosition);
            newObject.position.x = xCorrected;
            newObject.position.y = yCorrected;

            var scale = (Math.random() * (.25 - .15) + .15);
            newObject.scale.x = scale;
            newObject.scale.y = scale;
            newObject.scale.z = scale;

            scene.add(newObject);
            objects.push(newObject);
        };
    });
});

// window.addEventListener('scroll',(event) => {
//     var currentScroll = window.scrollY;
//     var currentBottom = bar.getBoundingClientRect().bottom;
//     var correctedScrollPos = currentScroll + currentBottom;
//     console.log(correctedScrollPos);
//     for (var j in objects) {
//         console.log(objects[j].position.y);
//         if (objects[j].position.y < correctedScrollPos) {
//             objects[j].position.y -= .01;
//             // console.log(objects[j].position.y);
//         };
//     };
// });

function getNewRotation() {

}

// Refreshes the scene
function animate() {
    requestAnimationFrame(animate);

    // Controls the rotation of the objects
    var i = 0;
    while (i < (objects.length / 2))  {
        var object = objects[i];
        if (timer > 100) {
            xRotation1 = (Math.random() / 100);
            yRotation1 = (Math.random() / 100);
        };
        object.rotation.x += xRotation1;
        object.rotation.y += yRotation1;
        i++;
    };

    i = objects.length - 1;
    while (i > (objects.length / 2))  {
        if (timer > 100) {
            xRotation2 = (Math.random() / -100);
            yRotation2 = (Math.random() / -100);
        };
        var object = objects[i];
        object.rotation.x += xRotation2;
        object.rotation.y += yRotation2;
        i--;
    };

    if (timer > 100) {
        timer = 0;
    } else {
        timer++;
    };

    renderer.render(scene, camera);
};

animate();
