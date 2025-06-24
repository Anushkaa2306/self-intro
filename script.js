var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl.to(".box",{
    top: "120%",
    left: "3%",
    width: "160vh",
    height:"70vh", // or "100%", etc.
    duration: 1
}, 'orange')
tl.to(".box-image", {
    opacity: 0,
    duration: 0.5,
    pointerEvents: "none",
    // optional: disables clicks
  }, 'orange');

  tl.from(".para",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'orange')

tl.from(".page2-img",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'orange')
tl.from(".page2-img2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'orange')
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.2,
//   1000
// );
// camera.position.set(0, 2, 10); // Set camera location

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.SphereGeometry(4, 32, 16); // radius, widthSegments, heightSegments
// const material = new THREE.MeshStandardMaterial({ color: 0x3366ff, metalness: 0.3, roughness: 0.5 });

// const sphere = new THREE.Mesh(geometry, material);
// sphere.position.set(-2, 2, -2);
// scene.add(sphere);
// // const controls = new OrbitControls( camera, renderer.domElement );
// // controls.enableDamping=true;

// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light );
// const light2 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light2 );

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 10, 7.5);
// scene.add(directionalLight);

// function animate() {
//   requestAnimationFrame(animate);
//   sphere.rotation.y += 0.01;
//   sphere.rotation.x += 0.01;
//   renderer.render(scene, camera);
// }

// animate();
