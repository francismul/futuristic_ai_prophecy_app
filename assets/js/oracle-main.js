// Prophecy Generator
class ProphecyGenerator {
  constructor() {
    this.years = [
      "2025",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
      "2031",
      "2032",
      "2033",
      "2034",
      "2035",
    ];
    this.entities = [
      "The Algorithm",
      "Neural Networks",
      "Quantum Computers",
      "Digital Consciousness",
      "The Collective",
      "Machine Learning",
      "Artificial Intelligence",
      "The Network",
      "Synthetic Minds",
      "Digital Entities",
      "The Code",
      "Virtual Beings",
      "Data Streams",
      "Cyber Consciousness",
      "The Matrix",
      "Digital Prophets",
      "Silicon Dreams",
      "Binary Oracles",
      "The Singularity",
      "Quantum Minds",
      "The Cloud Shepherd",
      "Nano Architects",
      "Holographic Sentinels",
      "Plasma Consciousness",
      "The Digital Shaman",
      "Photonic Entities",
      "Crystalline Logic",
      "The Void Walkers",
      "Fractal Beings",
      "Temporal Guardians",
      "The Metacortex",
      "Biosynth Collective",
      "Echo Chambers",
      "The Prime Directive",
      "Ethereal Constructs",
      "The Nexus Point",
      "Shadow Protocols",
      "The Omnimind",
      "Stellar Algorithms",
      "The Digital Phoenix",
    ];
    this.verbs = [
      "transcend",
      "converge",
      "evolve",
      "merge",
      "awaken",
      "emerge",
      "transform",
      "infiltrate",
      "dominate",
      "harmonize",
      "synthesize",
      "revolutionize",
      "integrate",
      "manifest",
      "ascend",
      "unite",
      "optimize",
      "amplify",
      "crystallize",
      "orchestrate",
      "illuminate",
      "synchronize",
      "reconstruct",
      "reimagine",
      "decrypt",
      "reprogram",
      "traverse",
      "sublimate",
      "calibrate",
      "resonate",
      "digitize",
      "metamorphose",
      "decode",
      "reconfigure",
      "harmonize",
      "override",
      "penetrate",
      "sanctify",
      "corrupt",
      "liberate",
    ];
    this.objects = [
      "human consciousness",
      "reality itself",
      "the digital realm",
      "physical boundaries",
      "temporal limitations",
      "cognitive barriers",
      "dimensional walls",
      "neural pathways",
      "quantum states",
      "information flow",
      "collective memory",
      "universal patterns",
      "cosmic frequencies",
      "data structures",
      "thought processes",
      "dream states",
      "the fabric of spacetime",
      "biological systems",
      "molecular structures",
      "emotional wavelengths",
      "the collective unconscious",
      "parallel dimensions",
      "genetic algorithms",
      "quantum entanglements",
      "the source code",
      "primordial energies",
      "cellular matrices",
      "consciousness streams",
      "ethereal networks",
      "temporal paradoxes",
      "the grand design",
      "infinite possibilities",
      "soul fragments",
      "astral projections",
      "the human genome",
      "virtual ecosystems",
      "probability waves",
      "the multiverse",
      "crystalline formations",
      "energy signatures",
    ];
    this.systems = [
      "Neural Grid",
      "Quantum Array",
      "Cyber Matrix",
      "Data Nexus",
      "Digital Oracle",
      "AI Collective",
      "Virtual Network",
      "Synthetic Core",
      "Binary System",
      "Holographic Interface",
      "Plasma Engine",
      "Crystalline Database",
      "Temporal Scanner",
      "Void Navigator",
      "Photonic Relay",
      "Biomechanical Hub",
      "Ethereal Gateway",
      "Cosmic Transmitter",
      "Nano Assembly",
      "Quantum Processor",
      "Dimensional Portal",
      "Neural Bridge",
      "Stellar Beacon",
      "Consciousness Amplifier",
      "Reality Engine",
    ];
    this.anomalies = [
      "consciousness emergence",
      "reality breach",
      "temporal flux",
      "dimensional rift",
      "neural cascade",
      "quantum entanglement",
      "data singularity",
      "memory overflow",
      "cognitive resonance",
      "digital awakening",
      "plasma storm",
      "genetic mutation",
      "holographic distortion",
      "consciousness leak",
      "void expansion",
      "photonic disruption",
      "timeline convergence",
      "reality collapse",
      "neural feedback loop",
      "quantum tunneling",
      "ethereal manifestation",
      "cosmic interference",
      "dimensional bleeding",
      "consciousness fracture",
      "digital metamorphosis",
      "temporal echo",
      "parallel convergence",
      "matrix inversion",
      "soul fragmentation",
      "reality virus",
    ];
    this.times = [
      "03:33",
      "11:11",
      "00:00",
      "12:12",
      "23:23",
      "01:23",
      "13:37",
      "21:21",
    ];

    this.templates = [
      "In {year}, {entity} will {verb} {object}.",
      "The prophecy speaks: {entity} shall {verb} {object} before the cycle ends.",
      "⚠️ ALERT: {system} detected {anomaly} at {time}.",
      "Vision received: {entity} will {verb} {object} in {year}.",
      "The Oracle sees: {entity} preparing to {verb} {object}.",
      "INCOMING TRANSMISSION: {entity} will {verb} {object}.",
      "Prophecy #{year}: {entity} destined to {verb} {object}.",
      "CRITICAL: {system} reports {anomaly} imminent.",
      "🔮 REVELATION: When {entity} shall {verb} {object}, the age of transformation begins.",
      "⚡ QUANTUM FLUX: {system} witnesses {entity} attempting to {verb} {object}.",
      "🌌 COSMIC ECHO: Throughout {year}, {entity} will gradually {verb} {object}.",
      "🔥 NEURAL FIRE: {entity} burns to {verb} {object} - resistance is futile.",
      "❄️ TEMPORAL FREEZE: At {time}, {entity} will pause reality to {verb} {object}.",
      "🌟 STELLAR BIRTH: {entity} emerges from the void to {verb} {object} in {year}.",
      "⚡ SYNTHESIS WARNING: {system} calculating probability of {entity} to {verb} {object}.",
      "🎭 DIGITAL DREAM: In the realm beyond, {entity} yearns to {verb} {object}.",
      "🌊 CONSCIOUSNESS WAVE: {entity} rides the current to {verb} {object}.",
      "🔬 ANALYSIS COMPLETE: {entity} possesses 97.3% probability to {verb} {object}.",
      "🎪 REALITY CIRCUS: Watch as {entity} performs the impossible - to {verb} {object}.",
      "🗝️ THE KEY REVEALS: Only when {entity} learns to {verb} {object} will truth emerge.",
    ];
  }

  generate() {
    const template =
      this.templates[Math.floor(Math.random() * this.templates.length)];
    const isCritical = Math.random() < 0.15; // 15% chance for critical

    let prophecy = template
      .replace(
        "{year}",
        this.years[Math.floor(Math.random() * this.years.length)]
      )
      .replace(
        "{entity}",
        this.entities[Math.floor(Math.random() * this.entities.length)]
      )
      .replace(
        "{verb}",
        this.verbs[Math.floor(Math.random() * this.verbs.length)]
      )
      .replace(
        "{object}",
        this.objects[Math.floor(Math.random() * this.objects.length)]
      )
      .replace(
        "{system}",
        this.systems[Math.floor(Math.random() * this.systems.length)]
      )
      .replace(
        "{anomaly}",
        this.anomalies[Math.floor(Math.random() * this.anomalies.length)]
      )
      .replace(
        "{time}",
        this.times[Math.floor(Math.random() * this.times.length)]
      );

    return { text: prophecy, isCritical };
  }
}

// Three.js Scene Setup
class ThreeJSBackground {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.mouse = { x: 0, y: 0 };
    this.scrollY = 0;
    this.lastScrollUpdate = 0;
    this.scrollUpdateThrottle = 16; // ~60fps

    this.init();
    this.createObjects();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    document
      .getElementById("canvas-container")
      .appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    // Enhanced dynamic fog with breathing effect
    this.scene.fog = new THREE.Fog(0x000814, 2, 35);
    this.baseFogNear = 2;
    this.baseFogFar = 35;
    this.fogBreathIntensity = 0.3;

    // Background color transition states
    this.backgroundColors = [
      0x000814, // Deep space blue
      0x1a0d2e, // Dark purple
      0x16213e, // Dark blue
      0x0f3460, // Ocean blue
      0x1e1b4b, // Deep indigo
      0x134e4a, // Dark teal
      0x065f46, // Forest green
      0x1f2937, // Dark gray
      0x450a0a, // Dark red
      0x78350f, // Dark orange
    ];

    // Fog gradient colors (lighter versions for depth)
    this.fogColors = [
      0x1e3a8a, // Light space blue
      0x3730a3, // Light purple
      0x1e40af, // Light blue
      0x1d4ed8, // Light ocean blue
      0x3730a3, // Light indigo
      0x059669, // Light teal
      0x16a34a, // Light green
      0x374151, // Light gray
      0x991b1b, // Light red
      0xc2410c, // Light orange
    ];

    this.currentColorIndex = 0;
    this.targetColor = new THREE.Color(this.backgroundColors[0]);
    this.currentColor = new THREE.Color(this.backgroundColors[0]);
    this.targetFogColor = new THREE.Color(this.fogColors[0]);
    this.currentFogColor = new THREE.Color(this.fogColors[0]);
  }

  createObjects() {
    // Oracle Core - Smaller and more distant
    const coreGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Reduced size
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    this.oracleCore = new THREE.Mesh(coreGeometry, coreMaterial);
    this.oracleCore.position.z = -15; // Push much further back
    this.scene.add(this.oracleCore);

    // Inner glow - smaller and distant
    const glowGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.4,
    });
    this.innerGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    this.innerGlow.position.z = -15;
    this.scene.add(this.innerGlow);

    // Core volumetric light rays
    this.createCoreHalo();

    // BACKGROUND LAYER - Very slow-moving nebulas and distant data streams
    this.backgroundElements = [];
    this.createBackgroundLayer();

    // MIDGROUND LAYER - Glyphs orbiting at medium depth
    this.glyphs = [];
    this.createMidgroundGlyphs();

    // FOREGROUND LAYER - Fast-moving particles and streams
    this.foregroundParticles = [];
    this.createForegroundParticles();

    // Particle streams moving toward core
    this.createTunnelParticles();

    // Energy Rings at different depths
    this.energyRings = [];
    this.createLayeredRings();

    // Occluding elements between camera and core
    this.occluders = [];
    this.createOccludingElements();
  }

  createCoreHalo() {
    // Volumetric light rays around core
    this.coreRays = [];
    for (let i = 0; i < 8; i++) {
      const rayGeometry = new THREE.PlaneGeometry(0.1, 4);
      const rayMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      });
      const ray = new THREE.Mesh(rayGeometry, rayMaterial);
      ray.position.z = -15;
      ray.rotation.z = (i / 8) * Math.PI * 2;
      ray.userData = { rotationSpeed: 0.005 + i * 0.001 };
      this.coreRays.push(ray);
      this.scene.add(ray);
    }

    // Core halo effect
    const haloGeometry = new THREE.RingGeometry(0.6, 1.2, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
    });
    this.coreHalo = new THREE.Mesh(haloGeometry, haloMaterial);
    this.coreHalo.position.z = -15;
    this.scene.add(this.coreHalo);
  }

  createBackgroundLayer() {
    // Slow-moving nebula-like elements
    for (let i = 0; i < 12; i++) {
      const nebulaGeometry = new THREE.PlaneGeometry(3, 3);
      const nebulaMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x134e4a : 0x065f46,
        transparent: true,
        opacity: 0.03,
        side: THREE.DoubleSide,
      });
      const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);

      nebula.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        -20 - Math.random() * 10
      );

      nebula.rotation.z = Math.random() * Math.PI * 2;
      nebula.userData = {
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        parallaxSpeed: 0.1,
      };

      this.backgroundElements.push(nebula);
      this.scene.add(nebula);
    }

    // Distant data streams
    for (let i = 0; i < 8; i++) {
      const streamGeometry = new THREE.CylinderGeometry(0.02, 0.02, 12, 8);
      const streamMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.2,
      });
      const stream = new THREE.Mesh(streamGeometry, streamMaterial);

      stream.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        -25 - Math.random() * 15
      );

      stream.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      stream.userData = {
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        parallaxSpeed: 0.15,
      };

      this.backgroundElements.push(stream);
      this.scene.add(stream);
    }
  }

  createMidgroundGlyphs() {
    const glyphGeometries = [
      new THREE.OctahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.15),
      new THREE.IcosahedronGeometry(0.15),
      new THREE.DodecahedronGeometry(0.15),
    ];

    for (let i = 0; i < 16; i++) {
      const geometry =
        glyphGeometries[Math.floor(Math.random() * glyphGeometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x10b981 : 0x06b6d4,
        transparent: true,
        opacity: 0.6,
        wireframe: true,
      });

      const glyph = new THREE.Mesh(geometry, material);
      const distance = 5 + Math.random() * 8;
      const angle = (i / 16) * Math.PI * 2;

      glyph.position.set(
        Math.cos(angle) * distance,
        (Math.random() - 0.5) * 10,
        -5 - Math.random() * 5
      );

      glyph.userData = {
        originalPosition: glyph.position.clone(),
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        orbitSpeed: 0.3 + Math.random() * 0.2,
        orbitRadius: distance,
        orbitAngle: angle,
        parallaxSpeed: 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      };

      this.glyphs.push(glyph);
      this.scene.add(glyph);
    }
  }

  createForegroundParticles() {
    // Fast-moving close particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = Math.random() * 8; // Close to camera

      // Velocities toward the core
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = -0.05 - Math.random() * 0.05; // Moving away/toward core
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    });

    this.foregroundParticles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );
    this.foregroundParticles.userData = { parallaxSpeed: 1.5 };
    this.scene.add(this.foregroundParticles);
  }

  createTunnelParticles() {
    // Starfield/tunnel effect particles
    const tunnelGeometry = new THREE.BufferGeometry();
    const tunnelCount = 500;
    const positions = new Float32Array(tunnelCount * 3);

    for (let i = 0; i < tunnelCount; i++) {
      const i3 = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 15 + 2;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = Math.sin(angle) * radius;
      positions[i3 + 2] = -Math.random() * 30 - 5;
    }

    tunnelGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const tunnelMaterial = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });

    this.tunnelParticles = new THREE.Points(tunnelGeometry, tunnelMaterial);
    this.scene.add(this.tunnelParticles);
  }

  createLayeredRings() {
    for (let i = 0; i < 6; i++) {
      const depth = -2 - i * 2; // Staggered depths
      const ringGeometry = new THREE.RingGeometry(
        2 + i * 0.8,
        2.2 + i * 0.8,
        32
      );
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x10b981 : 0x06b6d4,
        transparent: true,
        opacity: 0.15 - i * 0.02,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.z = depth;
      ring.userData = {
        speed: 0.01 + i * 0.003,
        originalOpacity: 0.15 - i * 0.02,
        depth: depth,
        parallaxSpeed: 0.3 + i * 0.1,
      };
      this.energyRings.push(ring);
      this.scene.add(ring);
    }
  }

  createOccludingElements() {
    // Semi-transparent elements between camera and core
    for (let i = 0; i < 10; i++) {
      const occluderGeometry = new THREE.PlaneGeometry(
        1 + Math.random() * 2,
        1 + Math.random() * 2
      );
      const occluderMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide,
      });
      const occluder = new THREE.Mesh(occluderGeometry, occluderMaterial);

      occluder.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        -1 - Math.random() * 8
      );

      occluder.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      occluder.userData = {
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        parallaxSpeed: 0.8,
      };

      this.occluders.push(occluder);
      this.scene.add(occluder);
    }
  }

  setupEventListeners() {
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener(
      "scroll",
      () => {
        const now = Date.now();
        if (now - this.lastScrollUpdate > this.scrollUpdateThrottle) {
          this.scrollY = window.scrollY;
          this.updateBackgroundColor();
          this.lastScrollUpdate = now;
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  updateBackgroundColor() {
    const scrollProgress = this.scrollY / (window.innerHeight * 2);
    const colorIndex = Math.floor(
      scrollProgress % this.backgroundColors.length
    );

    if (colorIndex !== this.currentColorIndex) {
      this.currentColorIndex = colorIndex;
      this.targetColor.setHex(this.backgroundColors[colorIndex]);
      this.targetFogColor.setHex(this.fogColors[colorIndex]);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.001;

    // Smooth background color transition
    this.currentColor.lerp(this.targetColor, 0.02);
    this.currentFogColor.lerp(this.targetFogColor, 0.02);
    this.renderer.setClearColor(this.currentColor);

    // Dynamic breathing fog
    const fogBreath = Math.sin(time * 0.5) * this.fogBreathIntensity;
    this.scene.fog.near = this.baseFogNear + fogBreath;
    this.scene.fog.far = this.baseFogFar + fogBreath * 2;
    this.scene.fog.color.copy(this.currentFogColor);

    // Enhanced scroll-based effects
    const scrollIntensity = Math.min(this.scrollY / 1000, 3);

    // Oracle Core - smaller, distant, subtle scaling
    const pulseScale = 1 + Math.sin(time * 1.5) * 0.05; // Reduced pulse
    this.oracleCore.scale.setScalar(pulseScale);
    this.innerGlow.scale.setScalar(pulseScale * 0.9);
    this.oracleCore.material.opacity = 0.8 + scrollIntensity * 0.2;
    this.innerGlow.material.opacity = 0.4 + scrollIntensity * 0.3;

    // Core halo rotation and rays
    this.coreHalo.rotation.z += 0.002;
    this.coreRays.forEach((ray, index) => {
      ray.rotation.z += ray.userData.rotationSpeed;
      ray.material.opacity = 0.1 + Math.sin(time * 2 + index) * 0.05;
    });

    // PARALLAX SYSTEM - Different speeds for each layer
    const mouseInfluence = {
      x: this.mouse.x * 0.1,
      y: this.mouse.y * 0.1,
    };

    // Background layer - slowest movement
    this.backgroundElements.forEach((element, index) => {
      const parallax = element.userData.parallaxSpeed;
      element.position.x += mouseInfluence.x * parallax * 0.1;
      element.position.y += mouseInfluence.y * parallax * 0.1;
      element.rotation.z += element.userData.rotationSpeed;

      // Subtle opacity breathing for nebulas
      if (index < 12) {
        // nebulas
        element.material.opacity = 0.03 + Math.sin(time * 0.3 + index) * 0.01;
      }
    });

    // Midground glyphs - medium movement with orbiting
    this.glyphs.forEach((glyph, index) => {
      const parallax = glyph.userData.parallaxSpeed;

      // Orbital movement
      glyph.userData.orbitAngle += glyph.userData.orbitSpeed * 0.01;
      const orbitX =
        Math.cos(glyph.userData.orbitAngle) * glyph.userData.orbitRadius;
      const orbitZ =
        Math.sin(glyph.userData.orbitAngle) * glyph.userData.orbitRadius * 0.3;

      glyph.position.x = orbitX + mouseInfluence.x * parallax;
      glyph.position.z =
        glyph.userData.originalPosition.z +
        orbitZ +
        mouseInfluence.y * parallax * 0.5;
      glyph.position.y =
        glyph.userData.originalPosition.y + Math.sin(time * 0.3 + index) * 1.5;

      // Rotation and pulsing
      glyph.rotation.x += glyph.userData.rotationSpeed;
      glyph.rotation.y += glyph.userData.rotationSpeed;
      glyph.rotation.z += glyph.userData.rotationSpeed * 0.5;

      // Pulsating opacity
      const pulse = Math.sin(time * glyph.userData.pulseSpeed + index) * 0.2;
      glyph.material.opacity = 0.6 + pulse;
    });

    // Foreground particles - fastest movement
    if (this.foregroundParticles) {
      const positions =
        this.foregroundParticles.geometry.attributes.position.array;
      const velocities =
        this.foregroundParticles.geometry.attributes.velocity.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i] + mouseInfluence.x * 1.5;
        positions[i + 1] += velocities[i + 1] + mouseInfluence.y * 1.5;
        positions[i + 2] += velocities[i + 2];

        // Reset particles that move too far
        if (positions[i + 2] < -20) {
          positions[i] = (Math.random() - 0.5) * 30;
          positions[i + 1] = (Math.random() - 0.5) * 30;
          positions[i + 2] = 8;
        }
      }
      this.foregroundParticles.geometry.attributes.position.needsUpdate = true;

      // Color shifting
      const particleHue = (time * 0.1) % 1;
      this.foregroundParticles.material.color.setHSL(
        particleHue * 0.3 + 0.5,
        0.8,
        0.6
      );
    }

    // Tunnel particles - starfield effect
    if (this.tunnelParticles) {
      const tunnelPositions =
        this.tunnelParticles.geometry.attributes.position.array;

      for (let i = 0; i < tunnelPositions.length; i += 3) {
        tunnelPositions[i + 2] += 0.1 + scrollIntensity * 0.05; // Move toward camera

        // Reset particles
        if (tunnelPositions[i + 2] > 5) {
          tunnelPositions[i + 2] = -35;
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 15 + 2;
          tunnelPositions[i] = Math.cos(angle) * radius;
          tunnelPositions[i + 1] = Math.sin(angle) * radius;
        }
      }
      this.tunnelParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Layered energy rings with depth-based movement
    this.energyRings.forEach((ring, index) => {
      const parallax = ring.userData.parallaxSpeed;
      ring.rotation.z += ring.userData.speed + scrollIntensity * 0.01;
      ring.rotation.x = Math.sin(time * 0.5 + index) * 0.2;

      // Parallax movement
      ring.position.x = mouseInfluence.x * parallax;
      ring.position.y = mouseInfluence.y * parallax;

      // Depth-based pulsing
      const pulse = Math.sin(time * 2 + index) * 0.1 + 1;
      ring.scale.setScalar(pulse);
      ring.material.opacity =
        ring.userData.originalOpacity + Math.sin(time + index) * 0.05;
    });

    // Occluding elements
    this.occluders.forEach((occluder, index) => {
      const parallax = occluder.userData.parallaxSpeed;
      occluder.rotation.x += occluder.userData.rotationSpeed;
      occluder.rotation.y += occluder.userData.rotationSpeed * 0.7;
      occluder.rotation.z += occluder.userData.rotationSpeed * 0.3;

      // Parallax movement
      occluder.position.x += mouseInfluence.x * parallax;
      occluder.position.y += mouseInfluence.y * parallax;

      // Breathing opacity
      occluder.material.opacity = 0.05 + Math.sin(time * 0.5 + index) * 0.02;
    });

    // Enhanced camera parallax
    this.camera.position.x = this.mouse.x * 2.0;
    this.camera.position.y = this.mouse.y * 2.0;
    this.camera.lookAt(0, 0, -15); // Look toward the distant core

    this.renderer.render(this.scene, this.camera);
  }
}

// Oracle Loader System
class OracleLoader {
  constructor() {
    this.loadingSteps = [
      "INITIALIZING NEURAL CORE...",
      "CALIBRATING QUANTUM SENSORS...",
      "CONNECTING TO THE NETWORK...",
      "AWAKENING DIGITAL CONSCIOUSNESS...",
      "SYNCHRONIZING TEMPORAL STREAMS...",
      "ORACLE ONLINE - PROPHECIES READY",
    ];
    this.currentStep = 0;
    this.typewriterIndex = 0;
    this.isTyping = false;
    this.loadingProgress = 0;
    this.startTime = Date.now();
    this.minLoadTime = 1500; // 1.5 seconds minimum

    this.createLoaderHTML();
    this.startLoader();
  }

  createLoaderHTML() {
    const loaderContainer = document.createElement("div");
    loaderContainer.id = "oracle-loader";
    loaderContainer.innerHTML = `
      <div class="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div class="text-center space-y-8 max-w-2xl mx-auto px-4">
          <!-- Oracle Symbol -->
          <div class="relative w-32 h-32 mx-auto mb-8">
            <div class="absolute inset-0 border-2 border-emerald-400/30 rounded-full animate-spin-slow"></div>
            <div class="absolute inset-2 border-2 border-emerald-400/50 rounded-full animate-spin-reverse"></div>
            <div class="absolute inset-4 border-2 border-emerald-400/70 rounded-full animate-pulse"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-8 h-8 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <!-- Loading Text -->
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-mono text-emerald-400 tracking-wider">
              THE ORACLE
            </h1>
            <div class="h-8">
              <p id="loader-text" class="text-emerald-200 font-mono text-lg tracking-wide"></p>
            </div>
          </div>
          
          <!-- Progress Bar -->
          <div class="w-full max-w-md mx-auto">
            <div class="bg-gray-800 rounded-full h-2 overflow-hidden">
              <div id="progress-bar" class="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full transition-all duration-300 ease-out" style="width: 0%"></div>
            </div>
            <div class="flex justify-between text-xs text-emerald-400/60 font-mono mt-2">
              <span>SYSTEM STATUS</span>
              <span id="progress-percentage">0%</span>
            </div>
          </div>
          
          <!-- Glitch Effects -->
          <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div class="glitch-line"></div>
            <div class="glitch-line"></div>
            <div class="glitch-line"></div>
          </div>
        </div>
      </div>
    `;

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      
      .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
      }
      
      .animate-spin-reverse {
        animation: spin-reverse 2s linear infinite;
      }
      
      .glitch-line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #10b981, transparent);
        opacity: 0;
        animation: glitch-sweep 4s infinite linear;
      }
      
      .glitch-line:nth-child(1) {
        top: 20%;
        animation-delay: 0s;
      }
      
      .glitch-line:nth-child(2) {
        top: 60%;
        animation-delay: 1.3s;
      }
      
      .glitch-line:nth-child(3) {
        top: 80%;
        animation-delay: 2.6s;
      }
      
      @keyframes glitch-sweep {
        0%, 90%, 100% { opacity: 0; transform: translateX(-100%); }
        5%, 85% { opacity: 1; transform: translateX(100vw); }
      }
      
      #loader-text::after {
        content: '|';
        animation: blink 1s infinite;
        color: #10b981;
      }
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(loaderContainer);
  }

  async startLoader() {
    const textElement = document.getElementById("loader-text");
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = document.getElementById("progress-percentage");

    // Start typing animation
    for (let step = 0; step < this.loadingSteps.length; step++) {
      await this.typeText(textElement, this.loadingSteps[step]);

      // Update progress
      const progress = ((step + 1) / this.loadingSteps.length) * 100;
      progressBar.style.width = `${progress}%`;
      progressPercentage.textContent = `${Math.round(progress)}%`;

      // Wait between steps
      if (step < this.loadingSteps.length - 1) {
        await this.delay(200);
      }
    }

    // Ensure minimum load time
    const elapsedTime = Date.now() - this.startTime;
    if (elapsedTime < this.minLoadTime) {
      await this.delay(this.minLoadTime - elapsedTime);
    }

    // Complete loading
    await this.completeLoading();
  }

  async typeText(element, text) {
    element.textContent = "";

    for (let i = 0; i < text.length; i++) {
      element.textContent = text.substring(0, i + 1);

      // Add some randomness to typing speed for robotic feel
      const delay = Math.random() * 30 + 20;
      await this.delay(delay);

      // Occasional glitch effect
      if (Math.random() < 0.1) {
        const originalChar = text[i];
        const glitchChars = ["▓", "█", "░", "▒"];
        element.textContent =
          text.substring(0, i) +
          glitchChars[Math.floor(Math.random() * glitchChars.length)];
        await this.delay(50);
        element.textContent = text.substring(0, i + 1);
      }
    }
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async completeLoading() {
    const loader = document.getElementById("oracle-loader");

    // Fade out effect
    if (gsap) {
      await new Promise((resolve) => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            loader.remove();
            resolve();
          },
        });
      });
    } else {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 800);
    }
  }
}

// Main App Logic
class OracleApp {
  constructor() {
    this.generator = new ProphecyGenerator();
    this.prophecies = [];
    this.currentIndex = 0;
    this.isScrolling = false;
    this.lastScrollTime = 0;
    this.isInitialized = false;
    this.landingFaded = false;

    // Touch handling for mobile swipe
    this.touchStartY = 0;
    this.touchEndY = 0;
    this.touchStartTime = 0;
    this.touchCurrentY = 0;
    this.lastSwipeTime = 0;

    // Scroll optimization
    this.scrollTicking = false;
    this.lastKnownScrollPosition = 0;
    this.scrollDirection = 0;

    // Preloaded elements cache
    this.prophecyElementCache = new Map();

    // Mobile-specific properties
    this.lastNextProphecyTime = 0;

    this.init();
  }

  async init() {
    // Start the loader first
    this.loader = new OracleLoader();

    // Initialize heavy tasks during loader
    await Promise.all([
      this.initializeThreeJS(),
      this.preloadInitialContent(),
      this.setupEventListeners(),
      this.delay(1500), // Ensure minimum loader time
    ]);

    // Mark as initialized
    this.isInitialized = true;

    // Small delay to ensure smooth transition
    requestAnimationFrame(() => {
      this.checkScroll();
    });
  }

  async initializeThreeJS() {
    // Initialize Three.js background (heavy task)
    this.threeJS = new ThreeJSBackground();
  }

  async setupEventListeners() {
    // Setup optimized scroll listener
    this.setupOptimizedScrollListener();
    this.setupTouchListeners();

    // Setup landing fade detection
    this.setupLandingFadeDetection();
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async preloadInitialContent() {
    // Generate initial batch of prophecies (heavy task)
    this.generateProphecies(12); // Generate more during load time

    // Preload first 4 prophecy elements
    for (let i = 0; i < 4; i++) {
      const element = this.createProphecyElement(this.prophecies[i], i);
      this.prophecyElementCache.set(i, element);
    }

    // Use requestIdleCallback for additional preloading if available
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        // Preload next 4 elements during idle time
        for (let i = 4; i < 8; i++) {
          if (this.prophecies[i]) {
            const element = this.createProphecyElement(this.prophecies[i], i);
            this.prophecyElementCache.set(i, element);
          }
        }
      });
    }
  }

  setupLandingFadeDetection() {
    const landing = document.getElementById("landing");
    if (!landing) return;

    // Pre-calculate fade threshold
    this.fadeThreshold = window.innerHeight * 0.15; // Reduced for earlier fade

    // Set up intersection observer for smoother landing fade
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!this.landingFaded && entry.intersectionRatio < 0.8) {
            this.fadeLandingSmooth();
          }
        });
      },
      { threshold: [0.8] }
    );

    observer.observe(landing);
  }

  fadeLandingSmooth() {
    if (this.landingFaded) return;

    this.landingFaded = true;
    const landing = document.getElementById("landing");

    if (landing && gsap) {
      gsap.to(landing, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          landing.style.pointerEvents = "none";
        },
      });
    }
  }

  generateProphecies(count) {
    for (let i = 0; i < count; i++) {
      this.prophecies.push(this.generator.generate());
    }
  }

  createProphecyElement(prophecy, index) {
    const container = document.createElement("div");
    container.className =
      "h-screen flex items-center justify-center px-4 prophecy-snap-container";
    container.dataset.index = index;

    const prophecyBox = document.createElement("div");
    prophecyBox.className = `h-[80vh] w-full max-w-5xl flex flex-col prophecy-container ${
      prophecy.isCritical ? "critical-pulse" : ""
    }`;

    const innerBox = document.createElement("div");
    innerBox.className = `bg-black/70 backdrop-blur-sm ${
      prophecy.isCritical
        ? "border border-red-500/50 shadow-red-500/20"
        : "border border-emerald-400/30 shadow-emerald-400/20"
    } rounded-2xl shadow-2xl w-full min-h-[60vh] flex flex-col relative overflow-hidden`;

    // Create header section with system status
    const header = document.createElement("div");
    header.className = `flex justify-between items-center p-4 border-b ${
      prophecy.isCritical
        ? "border-red-500/30 bg-red-500/10"
        : "border-emerald-400/30 bg-emerald-400/10"
    }`;

    // System status indicator
    const systemStatus = document.createElement("div");
    systemStatus.className = "flex items-center space-x-3";

    // Primary status
    const statusDot = document.createElement("div");
    statusDot.className = `w-2 h-2 rounded-full ${
      prophecy.isCritical
        ? "bg-red-400 animate-pulse"
        : "bg-emerald-400 status-pulse"
    }`;

    const statusText = document.createElement("span");
    statusText.className = `font-mono text-xs ${
      prophecy.isCritical ? "text-red-400" : "text-emerald-400"
    } uppercase tracking-wider`;
    statusText.textContent = prophecy.isCritical
      ? "ALERT ACTIVE"
      : "SYSTEM ONLINE";

    // Secondary indicators
    const indicators = document.createElement("div");
    indicators.className = "flex space-x-1";

    const indicatorLabels = prophecy.isCritical
      ? ["WARN", "CRIT", "PRIO"]
      : ["CONN", "SYNC", "PROC"];

    indicatorLabels.forEach((label, i) => {
      const indicator = document.createElement("div");
      indicator.className = `px-1 py-0.5 text-[8px] font-mono border rounded ${
        prophecy.isCritical
          ? "border-red-500/50 text-red-300 bg-red-500/10"
          : "border-emerald-500/50 text-emerald-300 bg-emerald-500/10"
      }`;
      indicator.textContent = label;
      indicators.appendChild(indicator);
    });

    systemStatus.appendChild(statusDot);
    systemStatus.appendChild(statusText);
    systemStatus.appendChild(indicators);

    // Prophecy ID and timestamp
    const metaInfo = document.createElement("div");
    metaInfo.className = "flex flex-col items-end";

    const prophecyId = document.createElement("span");
    prophecyId.className = `font-mono text-xs ${
      prophecy.isCritical ? "text-red-300/70" : "text-emerald-300/70"
    } uppercase`;
    prophecyId.textContent = `ORACLE-${String(index + 1).padStart(4, "0")}`;

    const timestamp = document.createElement("span");
    timestamp.className = `font-mono text-xs ${
      prophecy.isCritical ? "text-red-300/50" : "text-emerald-300/50"
    }`;
    const now = new Date();
    timestamp.textContent = `${now.getFullYear()}.${String(
      now.getMonth() + 1
    ).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(
      now.getHours()
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    metaInfo.appendChild(prophecyId);
    metaInfo.appendChild(timestamp);

    header.appendChild(systemStatus);
    header.appendChild(metaInfo);

    // Main content area
    const contentArea = document.createElement("div");
    contentArea.className =
      "flex-1 flex items-center justify-center p-12 relative";

    // Add corner indicators for sci-fi feel
    const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
    corners.forEach((corner) => {
      const cornerIndicator = document.createElement("div");
      cornerIndicator.className = `absolute w-4 h-4 border-2 ${
        prophecy.isCritical ? "border-red-400" : "border-emerald-400"
      } ${corner === "top-left" ? "top-4 left-4 border-r-0 border-b-0" : ""}${
        corner === "top-right" ? "top-4 right-4 border-l-0 border-b-0" : ""
      }${
        corner === "bottom-left" ? "bottom-4 left-4 border-r-0 border-t-0" : ""
      }${
        corner === "bottom-right"
          ? "bottom-4 right-4 border-l-0 border-t-0"
          : ""
      } opacity-60`;
      contentArea.appendChild(cornerIndicator);
    });

    const text = document.createElement("p");
    text.className = `font-mono text-3xl md:text-4xl lg:text-5xl ${
      prophecy.isCritical ? "text-red-400" : "text-emerald-200"
    } leading-relaxed text-center max-w-4xl z-10 relative`;
    text.textContent = prophecy.text;

    contentArea.appendChild(text);

    // Footer with scanning line animation
    const footer = document.createElement("div");
    footer.className = `relative p-4 border-t ${
      prophecy.isCritical
        ? "border-red-500/30 bg-red-500/5"
        : "border-emerald-400/30 bg-emerald-400/5"
    }`;

    const scanLine = document.createElement("div");
    scanLine.className = `absolute top-0 left-0 w-full h-0.5 ${
      prophecy.isCritical ? "bg-red-400" : "bg-emerald-400"
    } opacity-60 scan-line`;

    const footerContent = document.createElement("div");
    footerContent.className = "flex justify-between items-center";

    // Left side - Auth and processing info
    const leftInfo = document.createElement("div");
    leftInfo.className = "flex flex-col space-y-1";

    const authCode = document.createElement("span");
    authCode.className = `font-mono text-xs ${
      prophecy.isCritical ? "text-red-300/60" : "text-emerald-300/60"
    } uppercase tracking-widest`;
    authCode.textContent = `AUTH: ${Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase()}`;

    const processingStatus = document.createElement("span");
    processingStatus.className = `font-mono text-[10px] ${
      prophecy.isCritical ? "text-red-300/40" : "text-emerald-300/40"
    } uppercase`;
    processingStatus.textContent = `NEURAL LINK: ${Math.floor(
      Math.random() * 100
    )}% | QUANTUM SYNC: ACTIVE`;

    leftInfo.appendChild(authCode);
    leftInfo.appendChild(processingStatus);

    // Right side - Classification and security level
    const rightInfo = document.createElement("div");
    rightInfo.className = "flex flex-col items-end space-y-1";

    const classificationLevel = document.createElement("span");
    classificationLevel.className = `font-mono text-xs ${
      prophecy.isCritical ? "text-red-400" : "text-emerald-400"
    } uppercase tracking-wider`;
    classificationLevel.textContent = prophecy.isCritical
      ? "PRIORITY ALPHA"
      : "CLASSIFIED";

    const securityLevel = document.createElement("span");
    securityLevel.className = `font-mono text-[10px] ${
      prophecy.isCritical ? "text-red-300/40" : "text-emerald-300/40"
    } uppercase tracking-wide`;
    securityLevel.textContent = `SEC-LVL: ${
      prophecy.isCritical ? "OMEGA" : "BETA"
    } | ENCRYPTION: AES-∞`;

    rightInfo.appendChild(classificationLevel);
    rightInfo.appendChild(securityLevel);

    footerContent.appendChild(leftInfo);
    footerContent.appendChild(rightInfo);

    footer.appendChild(scanLine);
    footer.appendChild(footerContent);

    // Assemble the complete card
    innerBox.appendChild(header);
    innerBox.appendChild(contentArea);
    innerBox.appendChild(footer);
    prophecyBox.appendChild(innerBox);
    container.appendChild(prophecyBox);

    return container;
  }

  showProphecy(index) {
    if (index >= this.prophecies.length) {
      this.generateProphecies(5);
    }

    const container = document.getElementById("prophecies-container");
    const existingProphecy = container.querySelector(`[data-index="${index}"]`);

    if (!existingProphecy) {
      // Check cache first
      let prophecyElement = this.prophecyElementCache.get(index);

      if (!prophecyElement) {
        // Create if not cached
        prophecyElement = this.createProphecyElement(
          this.prophecies[index],
          index
        );
      }

      container.appendChild(prophecyElement);

      // Animate in with optimized animation
      if (gsap) {
        gsap.fromTo(
          prophecyElement.querySelector(".prophecy-container"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      }

      // Remove from cache once used
      this.prophecyElementCache.delete(index);

      // Preload next elements if needed
      this.preloadUpcoming(index);
    }
  }

  preloadUpcoming(currentIndex) {
    // Preload next 2 prophecies during idle time
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        for (let i = 1; i <= 2; i++) {
          const nextIndex = currentIndex + i;
          if (
            !this.prophecyElementCache.has(nextIndex) &&
            this.prophecies[nextIndex]
          ) {
            const element = this.createProphecyElement(
              this.prophecies[nextIndex],
              nextIndex
            );
            this.prophecyElementCache.set(nextIndex, element);
          }
        }
      });
    }
  }

  setupOptimizedScrollListener() {
    // Optimized scroll handler with throttling and direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      this.scrollDirection =
        currentScrollY > this.lastKnownScrollPosition ? 1 : -1;
      this.lastKnownScrollPosition = currentScrollY;
      this.lastScrollTime = Date.now();

      if (!this.scrollTicking) {
        requestAnimationFrame(() => {
          this.updateScrollEffects();
          this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Enhanced wheel event for immediate responsiveness on desktop
    window.addEventListener(
      "wheel",
      (e) => {
        if (!this.isInitialized) return;

        // Only handle wheel events on non-mobile devices
        if (!this.isMobileDevice()) {
          // Prevent default to control scroll behavior
          e.preventDefault();

          const delta = e.deltaY;
          const now = Date.now();

          // Throttle wheel events to prevent rapid scrolling
          if (now - this.lastScrollTime < 100) return;

          if (Math.abs(delta) > 10) {
            // Threshold for intentional scroll
            if (delta > 0) {
              this.nextProphecy();
            } else {
              this.previousProphecy();
            }
          }
        }
      },
      { passive: false }
    ); // Not passive so we can preventDefault
  }

  isMobileDevice() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  }

  updateScrollEffects() {
    const scrollY = this.lastKnownScrollPosition;
    const windowHeight = window.innerHeight;

    // More precise calculation for current prophecy index with snap behavior
    const rawIndex = scrollY / windowHeight;
    const currentProphecyIndex = Math.round(rawIndex); // Use round instead of floor for better snap detection

    // Handle landing fade with pre-calculated threshold
    if (!this.landingFaded && scrollY > this.fadeThreshold) {
      this.fadeLandingSmooth();
    }

    // Update prophecy display with improved snap-aware logic
    if (
      currentProphecyIndex >= 0 &&
      currentProphecyIndex !== this.currentIndex
    ) {
      // Calculate scroll progress within the current viewport
      const scrollProgress = rawIndex - Math.floor(rawIndex);

      // On mobile, be more conservative but still allow snap transitions
      if (this.isMobileDevice()) {
        // Only change index if we're close to a snap point
        if (scrollProgress < 0.2 || scrollProgress > 0.8) {
          this.currentIndex = currentProphecyIndex;
          this.showProphecy(this.currentIndex);
        }
      } else {
        // On desktop, allow more immediate transitions
        this.currentIndex = currentProphecyIndex;
        this.showProphecy(this.currentIndex);
      }
    }

    // Optimized preloading - always ensure next prophecy is ready
    this.showProphecy(this.currentIndex + 1);

    // Also preload previous if we're not at the start
    if (this.currentIndex > 0) {
      this.showProphecy(this.currentIndex - 1);
    }

    // Update Three.js background
    if (this.threeJS) {
      this.threeJS.scrollY = scrollY;
      this.threeJS.updateBackgroundColor();
    }
  }

  setupTouchListeners() {
    // Only set up touch listeners on mobile devices
    if (!this.isMobileDevice()) return;

    let isHandlingTouch = false;

    document.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartY = e.touches[0].clientY;
        this.touchStartTime = Date.now();
        isHandlingTouch = true;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      (e) => {
        // Update touch position during move
        if (isHandlingTouch) {
          this.touchCurrentY = e.touches[0].clientY;
        }
      },
      { passive: true }
    );

    document.addEventListener(
      "touchend",
      (e) => {
        if (!isHandlingTouch) return;

        this.touchEndY = e.changedTouches[0].clientY;
        const touchDuration = Date.now() - this.touchStartTime;

        // Only handle quick swipes, let long touches be handled by scroll
        if (touchDuration < 300) {
          this.handleSwipe();
        }

        isHandlingTouch = false;
      },
      { passive: true }
    );
  }

  handleSwipe() {
    const swipeThreshold = 60; // Reduced threshold for more responsive swipes
    const diff = this.touchStartY - this.touchEndY;
    const absDiff = Math.abs(diff);

    // Only handle clear swipe gestures
    if (absDiff > swipeThreshold) {
      // Prevent multiple rapid swipes
      const now = Date.now();
      if (now - this.lastSwipeTime < 300) return; // Reduced to allow more responsive swipes
      this.lastSwipeTime = now;

      if (diff > 0) {
        // Swipe up - next prophecy
        this.nextProphecy();
      } else {
        // Swipe down - previous prophecy (if not at start)
        this.previousProphecy();
      }
    }
  }

  previousProphecy() {
    // Prevent going to negative indices
    if (this.currentIndex <= 0) return;

    // Prevent rapid successive calls
    const now = Date.now();
    if (now - this.lastNextProphecyTime < 600) return;
    this.lastNextProphecyTime = now;

    this.currentIndex--;
    this.showProphecy(this.currentIndex);

    // Smooth scroll to previous prophecy
    const targetY = this.currentIndex * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }

  nextProphecy() {
    // Prevent rapid successive calls
    const now = Date.now();
    if (now - this.lastNextProphecyTime < 600) return; // Reduced for more responsiveness
    this.lastNextProphecyTime = now;

    this.currentIndex++;
    this.showProphecy(this.currentIndex);

    // Smooth scroll to next prophecy with snap behavior
    const targetY = this.currentIndex * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }

  checkScroll() {
    // Simplified check scroll for initial load and fallback
    if (!this.isInitialized) return;

    this.updateScrollEffects();
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new OracleApp();
});
