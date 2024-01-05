import React, { useEffect } from 'react';
import * as THREE from 'three';

const Donut = () => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('donut-container').appendChild(renderer.domElement);

    // Create ASCII Donut
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const donut = new THREE.Mesh(geometry, material);
    scene.add(donut);

    // Position the camera
    camera.position.z = 5;

    // Create animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the donut
      donut.rotation.x += 0.01;
      donut.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up resources
      renderer.dispose();
    };
  }, []);

  return <div id="donut-container" />;
};

export default Donut;