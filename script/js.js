const frame = document.getElementsByClassName("view-space")[0];
const allSection = document.querySelectorAll(".section");

const width = window.innerWidth * 0.9;
const height = window.innerHeight * 0.9;

const appearSceneRed = document.getElementsByClassName("block-img")[0],
    appearSceneBlue = document.getElementsByClassName("block-img")[1],
    appearSceneGreen = document.getElementsByClassName("block-img")[2];

const closeScene = document.getElementsByClassName("view-space__close")[0];



appearSceneRed.addEventListener("click", () => {
    openScene("red");
});
appearSceneBlue.addEventListener("click", () => {
    openScene("blue");
});
appearSceneGreen.addEventListener("click", () => {
    openScene("green");
});

function openScene(color) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    frame.appendChild(renderer.domElement);
    camera.position.set(0, 0, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(10, 10, 10);

    scene.add(ambientLight);
    scene.add(pointLight);

    const geometry = new THREE.BoxGeometry();
    
    let material;

    color === "red" ? 
        material = new THREE.MeshStandardMaterial({color: 0xff0000}) :
        color === "blue" ? 
        material = new THREE.MeshStandardMaterial({color: 0x0000ff}) :
        color === "green" ?
        material = new THREE.MeshStandardMaterial({color: 0x00ff00}) : material = null;

    const cubeRed = new THREE.Mesh(geometry, material);

    scene.add(cubeRed);

    frame.style.display = "block";
    frame.style.opacity = 1;

    function animate() {
        requestAnimationFrame(animate);
        cubeRed.rotation.x += 0.005;
        cubeRed.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
}


closeScene.addEventListener("click", () => {
    frame.removeChild(document.querySelector("canvas"));
    frame.style.opacity = 0;
    frame.style.display = "none";
});


const animConfig = {
    fill: "forwards",
    duration: 500,
    iteration: 1
};
const animStyle = [
    {opacity: 0, bottom: "-5rem"},
    {opacity: 1, bottom: "0rem"}
];
const observerConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};
function observerFunc(entires, observer) {
    entires.forEach(entry => {
        if (entry.isIntersecting) {
            const elem = entry.target;
            elem.animate(animStyle, animConfig);
            observer.unobserve(elem);
        }
    });
}
const observer = new IntersectionObserver(observerFunc, observerConfig);
allSection.forEach(elem => observer.observe(elem));