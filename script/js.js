const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(10, 10, 10);

const frame1 = document.getElementsByClassName("nftImg")[0];
const frame2 = document.getElementsByClassName("nftImg")[1];
const frame3 = document.getElementsByClassName("nftImg")[2];
const width = frame1.clientWidth;
const height = frame1.clientHeight;



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
frame1.appendChild(renderer.domElement);
camera.position.set(0, 0, 5);

scene.add(ambientLight);
scene.add(pointLight);

const geometryRed = new THREE.BoxGeometry();
const materialRed = new THREE.MeshStandardMaterial({color: 0xff0000});
const cubeRed = new THREE.Mesh(geometryRed, materialRed);

scene.add(cubeRed);
renderer.render(scene, camera);



const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
const renderer2 = new THREE.WebGLRenderer({antialias: true});
renderer2.setSize(width, height);
frame2.appendChild(renderer2.domElement);
camera2.position.set(0, 0, 5);

scene2.add(ambientLight);
scene2.add(pointLight);

const geometryBlue = new THREE.BoxGeometry();
const materialBlue = new THREE.MeshStandardMaterial({color: 0x0000ff});
const cubeBlue = new THREE.Mesh(geometryBlue, materialBlue);

scene2.add(cubeBlue);
renderer2.render(scene2, camera2);



const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
const renderer3 = new THREE.WebGLRenderer({antialias: true});
renderer3.setSize(width, height);
frame3.appendChild(renderer3.domElement);
camera3.position.set(0, 0, 5);

scene3.add(ambientLight);
scene3.add(pointLight);

const geometryGreen = new THREE.BoxGeometry();
const materialGreen = new THREE.MeshStandardMaterial({color: 0x00ff00});
const cubeGreen = new THREE.Mesh(geometryGreen, materialGreen);

scene3.add(cubeGreen);
renderer3.render(scene3, camera3);


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
