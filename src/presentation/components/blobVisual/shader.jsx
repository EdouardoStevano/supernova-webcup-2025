// shader.jsx
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Shader personnalisé avec dégradé rose → bleu et distorsion
const DistortGradientMaterial = shaderMaterial(
    {
        uTime: 0,
        uDistort: 0.3,
        uSpeed: 1,
        colorA: new THREE.Color('#ff69b4'), // rose
        colorB: new THREE.Color('#0000ff'), // bleu
    },
    // Vertex Shader
    `
  uniform float uTime;
  uniform float uDistort;
  uniform float uSpeed;
  varying vec2 vUv;
  varying float vDistort;

  void main() {
    vUv = uv;
    vec3 newPosition = position + normal * sin(position.y * 10.0 + uTime * uSpeed) * uDistort;
    vDistort = newPosition.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
  `,
    // Fragment Shader
    `
  uniform vec3 colorA;
  uniform vec3 colorB;
  varying vec2 vUv;
  varying float vDistort;

  void main() {
    float strength = smoothstep(-1.0, 1.0, vDistort);
    vec3 color = mix(colorA, colorB, strength);
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ DistortGradientMaterial });
