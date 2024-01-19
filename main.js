import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();



loader.load( 'Cupcakeblend.glb', function ( gltf ) {

    scene.add( gltf.scene );

	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.4 );
	hemiLight.position.set( 0, 20, 0 );
	scene.add( hemiLight );

	const dirLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	dirLight.position.set( - 3, 10, - 10 );
	scene.add( dirLight );

	camera.position.set( 0, 0, 10 );

    renderer.render(scene, camera);

}, undefined, function ( error ) {

    console.error( error );

} );

