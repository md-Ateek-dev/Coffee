import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Creates a procedural canvas texture representing dark espresso with golden crema swirl.
 */
function createCremaTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Base espresso gradient
  const gradient = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
  gradient.addColorStop(0, "#1d0f08");
  gradient.addColorStop(0.55, "#2a150b");
  gradient.addColorStop(0.78, "#87572d");
  gradient.addColorStop(0.92, "#c9924e");
  gradient.addColorStop(1, "#dfb06c");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  // Soft crema foam marbling
  ctx.strokeStyle = "rgba(224, 180, 118, 0.35)";
  ctx.lineWidth = 14;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(256, 256, 170, 0.4, Math.PI * 1.8);
  ctx.stroke();

  ctx.strokeStyle = "rgba(240, 206, 150, 0.25)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(256, 256, 110, 1.2, Math.PI * 1.4);
  ctx.stroke();

  // Subtle heart latte art accent
  ctx.fillStyle = "rgba(245, 222, 179, 0.5)";
  ctx.beginPath();
  ctx.arc(245, 240, 18, 0, Math.PI * 2);
  ctx.arc(267, 240, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(230, 247);
  ctx.lineTo(256, 280);
  ctx.lineTo(282, 247);
  ctx.closePath();
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Creates a 3D procedural roasted coffee bean mesh.
 */
function createCoffeeBeanMesh(beanMaterial) {
  const group = new THREE.Group();

  // Halves of a coffee bean
  const halfGeo = new THREE.SphereGeometry(0.24, 16, 16);
  halfGeo.scale(1.35, 0.82, 0.95);

  const beanMesh = new THREE.Mesh(halfGeo, beanMaterial);
  beanMesh.castShadow = true;
  group.add(beanMesh);

  // Center crease
  const creaseGeo = new THREE.BoxGeometry(0.38, 0.03, 0.04);
  const creaseMat = new THREE.MeshBasicMaterial({ color: 0x120803 });
  const crease = new THREE.Mesh(creaseGeo, creaseMat);
  crease.position.set(0, 0.17, 0);
  group.add(crease);

  return group;
}

export default function CoffeeCanvas3D() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffecd1, 2.6);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const amberRimLight = new THREE.PointLight(0xd4a359, 3.2, 12);
    amberRimLight.position.set(-3.5, 2.5, -2);
    scene.add(amberRimLight);

    const subtleFillLight = new THREE.PointLight(0xc98f48, 1.8, 8);
    subtleFillLight.position.set(0, -2, 2.5);
    scene.add(subtleFillLight);

    // 3. Materials
    // Luxury dark obsidian porcelain with subtle gloss
    const porcelainMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1816,
      roughness: 0.18,
      metalness: 0.12,
    });

    // 24K Gold Rim accent material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.22,
      metalness: 0.88,
    });

    // Dark roast bean material
    const beanMaterial = new THREE.MeshStandardMaterial({
      color: 0x381f13,
      roughness: 0.6,
      metalness: 0.08,
    });

    // 4. Build Coffee Cup & Saucer Group
    const cupGroup = new THREE.Group();

    // Cup Body (Tapered cylinder)
    const cupGeo = new THREE.CylinderGeometry(1.22, 0.88, 1.75, 48);
    const cupMesh = new THREE.Mesh(cupGeo, porcelainMaterial);
    cupMesh.position.y = 0;
    cupGroup.add(cupMesh);

    // Cup Interior (Slightly smaller, dark ceramic)
    const interiorGeo = new THREE.CylinderGeometry(1.18, 0.84, 1.7, 48, 1, true);
    const interiorMat = new THREE.MeshStandardMaterial({
      color: 0x141210,
      roughness: 0.3,
      side: THREE.BackSide,
    });
    const interiorMesh = new THREE.Mesh(interiorGeo, interiorMat);
    cupGroup.add(interiorMesh);

    // Gold Top Rim
    const rimGeo = new THREE.TorusGeometry(1.22, 0.035, 16, 48);
    rimGeo.rotateX(Math.PI / 2);
    const rimMesh = new THREE.Mesh(rimGeo, goldMaterial);
    rimMesh.position.y = 0.875;
    cupGroup.add(rimMesh);

    // Handle
    const handleGeo = new THREE.TorusGeometry(0.55, 0.09, 16, 36, Math.PI * 1.15);
    const handleMesh = new THREE.Mesh(handleGeo, porcelainMaterial);
    handleMesh.position.set(1.28, 0.05, 0);
    handleMesh.rotation.z = -Math.PI / 4.2;
    cupGroup.add(handleMesh);

    // Saucer Base
    const saucerGeo = new THREE.CylinderGeometry(1.95, 1.25, 0.16, 48);
    const saucerMesh = new THREE.Mesh(saucerGeo, porcelainMaterial);
    saucerMesh.position.y = -0.92;
    cupGroup.add(saucerMesh);

    // Saucer Golden Rim
    const saucerRimGeo = new THREE.TorusGeometry(1.95, 0.028, 16, 48);
    saucerRimGeo.rotateX(Math.PI / 2);
    const saucerRimMesh = new THREE.Mesh(saucerRimGeo, goldMaterial);
    saucerRimMesh.position.y = -0.84;
    cupGroup.add(saucerRimMesh);

    // Liquid Surface (Coffee + Crema Art)
    const cremaTexture = createCremaTexture();
    const liquidGeo = new THREE.CircleGeometry(1.16, 48);
    const liquidMat = new THREE.MeshStandardMaterial({
      map: cremaTexture,
      roughness: 0.25,
      metalness: 0.15,
    });
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
    liquidMesh.rotation.x = -Math.PI / 2;
    liquidMesh.position.y = 0.74;
    cupGroup.add(liquidMesh);

    scene.add(cupGroup);

    // 5. Floating Roasted Coffee Beans in Orbit
    const beans = [];
    const beanConfigs = [
      { radius: 2.1, height: 0.4, speed: 0.6, phase: 0, scale: 1.1 },
      { radius: 2.4, height: -0.3, speed: -0.45, phase: 2.1, scale: 0.95 },
      { radius: 1.9, height: 1.1, speed: 0.5, phase: 4.2, scale: 0.85 },
      { radius: 2.6, height: 0.8, speed: -0.55, phase: 1.3, scale: 1.05 },
    ];

    beanConfigs.forEach((cfg) => {
      const bean = createCoffeeBeanMesh(beanMaterial);
      bean.scale.setScalar(cfg.scale);
      scene.add(bean);
      beans.push({ mesh: bean, ...cfg });
    });

    // 6. Delicate Steam Particles
    const steamCount = 28;
    const steamGeometry = new THREE.BufferGeometry();
    const steamPositions = new Float32Array(steamCount * 3);
    const steamAlphas = new Float32Array(steamCount);
    const steamVelocities = [];

    for (let i = 0; i < steamCount; i++) {
      steamPositions[i * 3] = (Math.random() - 0.5) * 0.7;
      steamPositions[i * 3 + 1] = 0.8 + Math.random() * 1.8;
      steamPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.7;
      steamAlphas[i] = Math.random();
      steamVelocities.push({
        y: 0.007 + Math.random() * 0.009,
        wobbleSpeed: 1.2 + Math.random() * 2,
        wobbleScale: 0.004 + Math.random() * 0.004,
      });
    }

    steamGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(steamPositions, 3)
    );

    // Canvas particle texture for smooth soft blur
    const steamCanvas = document.createElement("canvas");
    steamCanvas.width = 64;
    steamCanvas.height = 64;
    const sCtx = steamCanvas.getContext("2d");
    const sGrad = sCtx.createRadialGradient(32, 32, 2, 32, 32, 30);
    sGrad.addColorStop(0, "rgba(255, 245, 230, 0.45)");
    sGrad.addColorStop(0.5, "rgba(212, 163, 89, 0.15)");
    sGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 64, 64);
    const steamTexture = new THREE.CanvasTexture(steamCanvas);

    const steamMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: steamTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const steamPoints = new THREE.Points(steamGeometry, steamMaterial);
    scene.add(steamPoints);

    // 7. Interactive Parallax & Controls
    let targetRotY = 0.35;
    let targetRotX = 0.22; // Default tilt so crema is visible
    let currentRotY = targetRotY;
    let currentRotX = targetRotX;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = 0.35 + x * 0.55;
      targetRotX = 0.22 + -y * 0.3;
    };

    // Touch interaction for mobile drag
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isTouching = true;
        setIsInteracting(true);
      }
    };

    const handleTouchMove = (e) => {
      if (!isTouching || e.touches.length !== 1) return;
      const deltaX = (e.touches[0].clientX - touchStartX) * 0.008;
      const deltaY = (e.touches[0].clientY - touchStartY) * 0.008;
      targetRotY += deltaX;
      targetRotX = Math.max(0.05, Math.min(0.55, targetRotX - deltaY));
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      setIsInteracting(false);
      targetRotY = 0.35;
      targetRotX = 0.22;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 8. Viewport Intersection Observer (pause RAF when off-screen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 360;
      const newH = container.clientHeight || 420;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth lerp for cup orientation
      currentRotY += (targetRotY - currentRotY) * 0.06;
      currentRotX += (targetRotX - currentRotX) * 0.06;

      // Gentle floating breathing bob
      const floatingY = Math.sin(elapsed * 1.5) * 0.08;
      cupGroup.position.y = floatingY;
      cupGroup.rotation.y = currentRotY + Math.sin(elapsed * 0.6) * 0.04;
      cupGroup.rotation.x = currentRotX;

      // Orbiting coffee beans
      beans.forEach((b) => {
        const angle = b.phase + elapsed * b.speed;
        b.mesh.position.x = Math.cos(angle) * b.radius;
        b.mesh.position.z = Math.sin(angle) * b.radius;
        b.mesh.position.y =
          b.height + Math.sin(elapsed * 2 + b.phase) * 0.15 + floatingY * 0.5;
        b.mesh.rotation.x += 0.015;
        b.mesh.rotation.y += 0.02;
      });

      // Steam Particle physics
      const pos = steamGeometry.attributes.position.array;
      for (let i = 0; i < steamCount; i++) {
        const vel = steamVelocities[i];
        pos[i * 3 + 1] += vel.y;
        pos[i * 3] += Math.sin(elapsed * vel.wobbleSpeed + i) * vel.wobbleScale;

        // Reset particle when reached top
        if (pos[i * 3 + 1] > 2.7) {
          pos[i * 3 + 1] = 0.78 + Math.random() * 0.15;
          pos[i * 3] = (Math.random() - 0.5) * 0.55;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 0.55;
        }
      }
      steamGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js memory
      cupGeo.dispose();
      rimGeo.dispose();
      handleGeo.dispose();
      saucerGeo.dispose();
      saucerRimGeo.dispose();
      liquidGeo.dispose();
      steamGeometry.dispose();
      steamMaterial.dispose();
      cremaTexture.dispose();
      steamTexture.dispose();
      porcelainMaterial.dispose();
      goldMaterial.dispose();
      beanMaterial.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[540px] flex items-center justify-center select-none touch-pan-y">
      {/* Subtle radial backdrop glow */}
      <div className="absolute inset-0 bg-radial from-amber-500/12 via-amber-500/5 to-transparent blur-2xl pointer-events-none rounded-full scale-90" />

      {/* Interactive Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Badge Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] text-zinc-400 font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{isInteracting ? "Rotating" : "3D Interactive"}</span>
      </div>
    </div>
  );
}
