const frame = document.getElementsByClassName("viewSpace")[0];
const width = window.innerWidth * 0.9;
const height = window.innerHeight * 0.9;

const appearScene = document.getElementsByClassName("nftImg")[0];

appearScene.addEventListener("click", () => {
    frame.style.display = "block";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    frame.appendChild(renderer.domElement);
    camera.position.set(0, 0, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(10, 10, 10);

    scene.add(ambientLight);
    scene.add(pointLight);

    const geometryRed = new THREE.BoxGeometry();
    const materialRed = new THREE.MeshStandardMaterial({color: 0xff0000});
    const cubeRed = new THREE.Mesh(geometryRed, materialRed);

    scene.add(cubeRed);
    
    function animate() {
        requestAnimationFrame(animate);
        cubeRed.rotation.x += 0.01;
        cubeRed.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});








// function render1() {
//     requestAnimationFrame(render1);
//     cubeRed.rotation.x += 0.01;
//     cubeRed.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// render1();

// function render2() {
//     requestAnimationFrame(render2);
//     cubeBlue.rotation.x += 0.01;
//     cubeBlue.rotation.y += 0.01;
//     renderer2.render(scene2, camera2);
// }
// render2();

// function render3() {
//     requestAnimationFrame(render3);
//     cubeGreen.rotation.x += 0.01;
//     cubeGreen.rotation.y += 0.01;
//     renderer3.render(scene3, camera3);
// }
// render3();
