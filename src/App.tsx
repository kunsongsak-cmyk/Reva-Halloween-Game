/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Volume2,
  VolumeX,
  RotateCcw,
  Download,
  Code,
  Check,
  Smartphone,
  Maximize2,
  Info,
  Trophy,
  Sparkles,
} from 'lucide-react';

// ==========================================
// Clinic Halloween Audio Synthesizer (Web Audio API)
// ==========================================
class ClinicAudioSynth {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playDropTether() {
    if (this.muted || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(180, t + 0.28);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0.001, t + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.28);
    } catch {
      // ignore
    }
  }

  playCaptureItem(type: 'botox' | 'filler' | 'laser') {
    if (this.muted || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;

      if (type === 'laser') {
        // High-tech Laser Machine: futuristic futuristic sci-fi chime sequence
        const bells = [659.25, 830.61, 987.77, 1318.51, 1661.22];
        bells.forEach((freq, idx) => {
          setTimeout(() => {
            if (this.muted || !this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.35);
          }, idx * 60);
        });
        return;
      }

      if (type === 'filler') {
        // Premium Filler: elegant melodic crystal chime
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          setTimeout(() => {
            if (this.muted || !this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
          }, idx * 65);
        });
        return;
      }

      // Botox: quick crisp medical ping
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.2);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0.001, t + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    } catch {
      // ignore
    }
  }

  playDeliverItem() {
    if (this.muted || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t + i * 0.05);
        gain.gain.setValueAtTime(0.15, t + i * 0.05);
        gain.gain.linearRampToValueAtTime(0.001, t + i * 0.05 + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t + i * 0.05);
        osc.stop(t + i * 0.05 + 0.16);
      });
    } catch {
      // ignore
    }
  }

  playHitGhost() {
    if (this.muted || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, t);
      osc.frequency.linearRampToValueAtTime(85, t + 0.32);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.linearRampToValueAtTime(0.001, t + 0.32);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.32);
    } catch {
      // ignore
    }
  }

  playHitPumpkin() {
    if (this.muted || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(50, t + 0.3);
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.linearRampToValueAtTime(0.001, t + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    } catch {
      // ignore
    }
  }

  playHitWitch() {
    if (this.muted || !this.ctx) return;
    try {
      const cackle = [620, 780, 580, 850, 690, 920, 480];
      cackle.forEach((freq, idx) => {
        setTimeout(() => {
          if (this.muted || !this.ctx) return;
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now);
          osc.frequency.exponentialRampToValueAtTime(freq * 0.75, now + 0.06);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.linearRampToValueAtTime(0.001, now + 0.06);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.06);
        }, idx * 50);
      });
    } catch {
      // ignore
    }
  }

  playMissionEnd() {
    if (this.muted || !this.ctx) return;
    try {
      const notes = [440, 554, 659, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          if (this.muted || !this.ctx) return;
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.linearRampToValueAtTime(0.001, now + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.3);
        }, idx * 110);
      });
    } catch {
      // ignore
    }
  }
}

// ==========================================
// Entity Interfaces
// ==========================================
interface ClinicItem {
  id: number;
  type: 'botox' | 'filler' | 'laser';
  points: number;
  w: number;
  h: number;
  x: number;
  y: number;
  dir: number; // 1 (right) or -1 (left)
  speed: number;
  baseY: number;
  wiggleFreq: number;
  phase: number;
  caught: boolean;
}

interface Obstacle {
  id: number;
  type: 'ghost' | 'pumpkin' | 'witch';
  points: number; // -10 (ghost), -50 (pumpkin), -100 (witch)
  w: number;
  h: number;
  x: number;
  y: number;
  dir: number;
  speed: number;
  baseY: number;
  phase: number;
  wiggleFreq: number;
  caught: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  decay: number;
}

interface FloatingText {
  text: string;
  x: number;
  y: number;
  color: string;
  life: number;
}

interface SparkleWisp {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  phase: number;
}

// ==========================================
// Main React Application
// ==========================================
export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [highScore, setHighScore] = useState<number>(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [phoneFrame, setPhoneFrame] = useState(true);

  // Catch counts (Botox, Filler, Laser, Ghost, Pumpkin, Witch)
  const [counts, setCounts] = useState({
    botox: 0,
    filler: 0,
    laser: 0,
    ghost: 0,
    pumpkin: 0,
    witch: 0,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const soundRef = useRef<ClinicAudioSynth>(new ClinicAudioSynth());

  // Game state refs
  const isPlayingRef = useRef(false);
  const scoreRef = useRef(0);
  const timeLeftRef = useRef(60);
  const countsRef = useRef({ botox: 0, filler: 0, laser: 0, ghost: 0, pumpkin: 0, witch: 0 });

  // Doctor character state (Doctor in Dracula Vampire Halloween Costume)
  // Adjusted Y to 84 and ledgeY to 120 so top HUD never obscures Dracula's face!
  const doctorRef = useRef({
    x: 180,
    targetX: 180,
    y: 84,
    width: 62,
    height: 60,
    tilt: 0,
    capePhase: 0,
    damageFlash: 0,
  });

  // Magic Grapple Claw Tether
  const tetherRef = useRef<{
    x: number;
    y: number;
    state: 'idle' | 'extending' | 'retracting';
    extendSpeed: number;
    retractSpeed: number;
    pulse: number;
    caughtItem: { type: 'item'; data: ClinicItem } | { type: 'obstacle'; data: Obstacle } | null;
  }>({
    x: 180,
    y: 120,
    state: 'idle',
    extendSpeed: 560,
    retractSpeed: 490,
    pulse: 0,
    caughtItem: null,
  });

  const itemsRef = useRef<ClinicItem[]>([]);
  const obstaclesRef = useRef<Obstacle[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const textsRef = useRef<FloatingText[]>([]);
  const wispsRef = useRef<SparkleWisp[]>([]);
  const globalTimeRef = useRef(0);
  const doctorLedgeYRef = useRef(120);
  const dimensionsRef = useRef({ width: 360, height: 640 });

  // Load High score and single HTML file content on mount
  useEffect(() => {
    const saved = localStorage.getItem('clinic_halloween_fishing_highscore');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }

    fetch('/fishing-game.html')
      .then((res) => res.text())
      .then((txt) => setHtmlCode(txt))
      .catch(() => {});
  }, []);

  // Update sound engine muted state
  useEffect(() => {
    soundRef.current.muted = !soundEnabled;
  }, [soundEnabled]);

  // Init sparkle wisps in background
  const initBackgroundWisps = (w: number, h: number) => {
    const wisps: SparkleWisp[] = [];
    for (let i = 0; i < 35; i++) {
      wisps.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2.8 + 1,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 16 + 10,
        phase: Math.random() * Math.PI * 2,
      });
    }
    wispsRef.current = wisps;
  };

  // Helper to create Clinic items (Botox, Filler, Laser)
  const createClinicItem = (w: number, h: number, ledgeY: number): ClinicItem => {
    const roll = Math.random();
    let type: 'botox' | 'filler' | 'laser' = 'botox';
    let points = 10;
    let sizeW = 34;
    let sizeH = 34;
    let speed = Math.random() * 35 + 65;
    let minY = ledgeY + 40;
    let maxY = h - 55;

    if (roll < 0.22) {
      // ⚡ เครื่องเลเซอร์ Ultherapy: 50 คะแนน (Rare & High Tech)
      type = 'laser';
      points = 50;
      sizeW = 48;
      sizeH = 50;
      speed = Math.random() * 35 + 85;
      minY = ledgeY + (h - ledgeY) * 0.35;
      maxY = h - 45;
    } else if (roll < 0.55) {
      // ✨ กล่อง Filler Reva: 30 คะแนน (Medium tier, Navy & White aesthetic)
      type = 'filler';
      points = 30;
      sizeW = 48;
      sizeH = 34;
      speed = Math.random() * 30 + 55;
      minY = ledgeY + (h - ledgeY) * 0.2;
    } else {
      // 💉 กล่อง Botox Reva & ไวอัล: 10 คะแนน (Cyan & Glass vial aesthetic)
      type = 'botox';
      points = 10;
      sizeW = 44;
      sizeH = 40;
      speed = Math.random() * 35 + 50;
      maxY = ledgeY + (h - ledgeY) * 0.8;
    }

    const dir = Math.random() > 0.5 ? 1 : -1;
    const x = dir === 1 ? -sizeW - 25 : w + sizeW + 25;
    const y = Math.random() * (maxY - minY) + minY;

    return {
      id: Math.random(),
      type,
      points,
      w: sizeW,
      h: sizeH,
      x,
      y,
      dir,
      speed,
      baseY: y,
      wiggleFreq: type === 'laser' ? Math.random() * 2 + 2 : Math.random() * 3.5 + 3,
      phase: Math.random() * Math.PI * 2,
      caught: false,
    };
  };

  // Helper to create Obstacles (Ghost: -10, Pumpkin: -50, Fast Flying Witch: -100)
  const createObstacle = (type: 'ghost' | 'pumpkin' | 'witch', w: number, h: number, ledgeY: number): Obstacle => {
    const dir = Math.random() > 0.5 ? 1 : -1;
    let points = -10;
    let sizeW = 38;
    let sizeH = 40;
    let speed = Math.random() * 25 + 45;
    let y = Math.random() * (h - ledgeY - 100) + ledgeY + 50;
    let wiggleFreq = Math.random() * 3 + 4;

    if (type === 'witch') {
      // 🧙‍♀️ แม่มดขี่ไม้กวาดบินไวๆ: -100 คะแนน (High speed hazard!)
      points = -100;
      sizeW = 62;
      sizeH = 44;
      speed = Math.random() * 50 + 165; // Very fast speed ("บินไวๆ")
      y = Math.random() * (h - ledgeY - 120) + ledgeY + 45;
      wiggleFreq = Math.random() * 2.5 + 4.5;
    } else if (type === 'pumpkin') {
      // 🎃 ฟักทองฮาโลวีน: -50 คะแนน
      points = -50;
      sizeW = 42;
      sizeH = 38;
      speed = Math.random() * 25 + 55;
      y = Math.random() * (h - ledgeY - 100) + ledgeY + 50;
      wiggleFreq = Math.random() * 2 + 3;
    } else {
      // 👻 ผีลอยไปมา: -10 คะแนน
      points = -10;
      sizeW = 38;
      sizeH = 40;
      speed = Math.random() * 25 + 45;
      y = Math.random() * (h - ledgeY - 100) + ledgeY + 50;
      wiggleFreq = Math.random() * 3 + 4;
    }

    const x = dir === 1 ? -sizeW - 25 : w + sizeW + 25;

    return {
      id: Math.random(),
      type,
      points,
      w: sizeW,
      h: sizeH,
      x,
      y,
      dir,
      speed,
      baseY: y,
      phase: Math.random() * Math.PI * 2,
      wiggleFreq,
      caught: false,
    };
  };

  // End game trigger (strictly on 60 seconds timer)
  const triggerGameOver = () => {
    if (!isPlayingRef.current) return;
    isPlayingRef.current = false;
    setIsPlaying(false);
    setShowGameOver(true);
    soundRef.current.playMissionEnd();

    const currentFinal = scoreRef.current;
    const currentHigh = parseInt(localStorage.getItem('clinic_halloween_fishing_highscore') || '0', 10);
    if (currentFinal > currentHigh) {
      setHighScore(currentFinal);
      localStorage.setItem('clinic_halloween_fishing_highscore', currentFinal.toString());
    }
  };

  // Start game handler
  const handleStartGame = () => {
    soundRef.current.init();
    scoreRef.current = 0;
    timeLeftRef.current = 60;
    countsRef.current = { botox: 0, filler: 0, laser: 0, ghost: 0, pumpkin: 0, witch: 0 };
    setScore(0);
    setTimeLeft(60);
    setCounts({ botox: 0, filler: 0, laser: 0, ghost: 0, pumpkin: 0, witch: 0 });
    setShowGameOver(false);
    setIsPlaying(true);
    isPlayingRef.current = true;

    const { width, height } = dimensionsRef.current;
    const ledgeY = doctorLedgeYRef.current;

    doctorRef.current.x = width * 0.5;
    doctorRef.current.targetX = width * 0.5;
    doctorRef.current.y = 84;
    doctorRef.current.damageFlash = 0;
    tetherRef.current.x = width * 0.5;
    tetherRef.current.y = ledgeY;
    tetherRef.current.state = 'idle';
    tetherRef.current.caughtItem = null;

    itemsRef.current = [];
    obstaclesRef.current = [];
    particlesRef.current = [];
    textsRef.current = [];

    // Initial items (Botox, Filler, Laser)
    for (let i = 0; i < 8; i++) {
      const it = createClinicItem(width, height, ledgeY);
      it.x = Math.random() * width;
      itemsRef.current.push(it);
    }

    // Initial obstacles: 3 ghosts, 2 pumpkins, 2 fast flying witches
    for (let i = 0; i < 3; i++) {
      const g = createObstacle('ghost', width, height, ledgeY);
      g.x = Math.random() * width;
      obstaclesRef.current.push(g);
    }
    for (let i = 0; i < 2; i++) {
      const p = createObstacle('pumpkin', width, height, ledgeY);
      p.x = Math.random() * width;
      obstaclesRef.current.push(p);
    }
    for (let i = 0; i < 2; i++) {
      const wItem = createObstacle('witch', width, height, ledgeY);
      wItem.x = Math.random() * width;
      obstaclesRef.current.push(wItem);
    }
  };

  // Timer countdown 60s
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      timeLeftRef.current -= 1;
      setTimeLeft(timeLeftRef.current);

      if (timeLeftRef.current <= 0) {
        clearInterval(interval);
        triggerGameOver();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Pointer controls
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPlayingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touchX = e.clientX - rect.left;

    doctorRef.current.targetX = Math.max(40, Math.min(rect.width - 40, touchX));

    const tether = tetherRef.current;
    if (tether.state === 'idle') {
      tether.state = 'extending';
      soundRef.current.playDropTether();
    } else if (tether.state === 'extending' && !tether.caughtItem) {
      // Tap again to retract immediately
      tether.state = 'retracting';
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPlayingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.clientX - rect.left;
    doctorRef.current.targetX = Math.max(40, Math.min(rect.width - 40, touchX));
  };

  // Main 60 FPS Canvas Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect.width;
      const h = rect.height;

      dimensionsRef.current = { width: w, height: h };
      doctorLedgeYRef.current = 120;
      doctorRef.current.y = 84;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      initBackgroundWisps(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      globalTimeRef.current += dt;

      const { width: w, height: h } = dimensionsRef.current;
      const ledgeY = doctorLedgeYRef.current;

      // 1. Spooky Clinic Night Sky Background
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, '#0a0618');
      skyGrad.addColorStop(0.35, '#130c2a');
      skyGrad.addColorStop(0.7, '#1b0e38');
      skyGrad.addColorStop(1, '#070312');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Glowing Harvest Moon
      const moonX = w * 0.78;
      const moonY = 66;
      const moonR = 36;

      const moonGlow = ctx.createRadialGradient(moonX, moonY, 12, moonX, moonY, 85);
      moonGlow.addColorStop(0, 'rgba(251, 146, 60, 0.38)');
      moonGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.14)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 85, 0, Math.PI * 2);
      ctx.fill();

      const moonBody = ctx.createRadialGradient(moonX - 7, moonY - 7, 5, moonX, moonY, moonR);
      moonBody.addColorStop(0, '#fef08a');
      moonBody.addColorStop(0.7, '#f59e0b');
      moonBody.addColorStop(1, '#d97706');
      ctx.fillStyle = moonBody;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      ctx.fill();

      // Flying bat
      const batPhase = globalTimeRef.current * 3;
      const flyingBatX = ((globalTimeRef.current * 45) % (w + 100)) - 50;
      const flyingBatY = 55 + Math.sin(batPhase) * 12;
      ctx.fillStyle = '#110928';
      ctx.beginPath();
      ctx.ellipse(flyingBatX, flyingBatY, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      const wingFlap = Math.sin(batPhase * 4) * 8;
      ctx.beginPath();
      ctx.moveTo(flyingBatX - 6, flyingBatY);
      ctx.quadraticCurveTo(flyingBatX - 14, flyingBatY - 10 + wingFlap, flyingBatX - 16, flyingBatY + wingFlap);
      ctx.lineTo(flyingBatX - 4, flyingBatY + 2);
      ctx.moveTo(flyingBatX + 6, flyingBatY);
      ctx.quadraticCurveTo(flyingBatX + 14, flyingBatY - 10 + wingFlap, flyingBatX + 16, flyingBatY + wingFlap);
      ctx.lineTo(flyingBatX + 4, flyingBatY + 2);
      ctx.fill();

      // Clinic sparkling stars in background
      for (const wisp of wispsRef.current) {
        ctx.fillStyle = `rgba(192, 132, 252, ${wisp.alpha * (0.6 + Math.sin(globalTimeRef.current * 2 + wisp.phase) * 0.4)})`;
        ctx.beginPath();
        ctx.arc(wisp.x, wisp.y, wisp.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Clinic floor & silhouette
      ctx.fillStyle = '#06020c';
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, h - 35);
      ctx.lineTo(w * 0.2, h - 38);
      ctx.lineTo(w * 0.4, h - 30);
      ctx.lineTo(w * 0.7, h - 36);
      ctx.lineTo(w, h - 32);
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      // Top Balcony Platform for Doctor
      ctx.fillStyle = '#120b26';
      ctx.fillRect(0, 0, w, ledgeY - 2);
      ctx.fillStyle = '#1e143b';
      ctx.fillRect(0, ledgeY - 14, w, 12);
      ctx.fillStyle = '#f97316';
      ctx.fillRect(0, ledgeY - 2, w, 2);

      // Balcony pillars
      ctx.fillStyle = '#312059';
      for (let bx = 15; bx < w; bx += 40) {
        ctx.fillRect(bx, ledgeY - 12, 14, 8);
      }

      // 2. Physics & Logic Update
      if (isPlayingRef.current) {
        const doc = doctorRef.current;
        const dx = doc.targetX - doc.x;
        doc.x += dx * 0.14;
        doc.tilt = Math.max(-0.2, Math.min(0.2, dx * 0.005));
        doc.capePhase += dt * 8;
        if (doc.damageFlash > 0) {
          doc.damageFlash = Math.max(0, doc.damageFlash - dt);
        }

        // Tether Logic
        const tether = tetherRef.current;
        tether.pulse += dt * 10;
        const emitterX = doc.x;

        if (tether.state === 'idle') {
          tether.x = emitterX;
          tether.y = ledgeY;
        } else if (tether.state === 'extending') {
          tether.x = emitterX;
          tether.y += tether.extendSpeed * dt;

          if (tether.y >= h - 25) {
            tether.y = h - 25;
            tether.state = 'retracting';
          }

          // Check Clinic Items Collision (Botox, Filler, Laser)
          if (!tether.caughtItem) {
            for (let i = 0; i < itemsRef.current.length; i++) {
              const it = itemsRef.current[i];
              if (it.caught) continue;
              const dist = Math.hypot(tether.x - it.x, tether.y - it.y);
              if (dist < 18 + it.w * 0.42) {
                it.caught = true;
                tether.caughtItem = { type: 'item', data: it };
                tether.state = 'retracting';
                soundRef.current.playCaptureItem(it.type);

                const c = it.type === 'laser' ? '#38bdf8' : it.type === 'filler' ? '#f59e0b' : '#c084fc';
                const label = it.type === 'laser' ? 'จับเครื่องเลเซอร์ได้!' : it.type === 'filler' ? 'จับกล่อง Filler ได้!' : 'จับกล่อง Botox ได้!';
                textsRef.current.push({
                  text: label,
                  x: tether.x,
                  y: tether.y - 20,
                  color: c,
                  life: 0.9,
                });
                break;
              }
            }
          }

          // Check Obstacles Collision (👻 ผี -10, 🎃 ฟักทอง -50, 🧙‍♀️ แม่มดบินไว -100)
          if (!tether.caughtItem) {
            for (let i = 0; i < obstaclesRef.current.length; i++) {
              const ob = obstaclesRef.current[i];
              if (ob.caught) continue;
              const dist = Math.hypot(tether.x - ob.x, tether.y - ob.y);
              if (dist < 18 + ob.w * 0.4) {
                ob.caught = true;
                tether.caughtItem = { type: 'obstacle', data: ob };
                tether.state = 'retracting';

                if (ob.type === 'witch') {
                  soundRef.current.playHitWitch();
                  textsRef.current.push({
                    text: 'โดนแม่มดบินไว! -100',
                    x: tether.x,
                    y: tether.y - 20,
                    color: '#f43f5e',
                    life: 1.1,
                  });
                } else if (ob.type === 'pumpkin') {
                  soundRef.current.playHitPumpkin();
                  textsRef.current.push({
                    text: 'โดนฟักทอง! -50',
                    x: tether.x,
                    y: tether.y - 20,
                    color: '#fb923c',
                    life: 1.1,
                  });
                } else {
                  soundRef.current.playHitGhost();
                  textsRef.current.push({
                    text: 'โดนผีหลอก! -10',
                    x: tether.x,
                    y: tether.y - 18,
                    color: '#ef4444',
                    life: 1.0,
                  });
                }
                break;
              }
            }
          }
        } else if (tether.state === 'retracting') {
          tether.x = emitterX;
          tether.y -= tether.retractSpeed * dt;

          if (tether.caughtItem) {
            tether.caughtItem.data.x = tether.x;
            tether.caughtItem.data.y = tether.y + 16;
          }

          if (tether.y <= ledgeY) {
            tether.y = ledgeY;
            tether.state = 'idle';

            if (tether.caughtItem) {
              if (tether.caughtItem.type === 'item') {
                const it = tether.caughtItem.data;
                scoreRef.current += it.points;
                countsRef.current[it.type]++;
                soundRef.current.playDeliverItem();

                const c = it.type === 'laser' ? '#38bdf8' : it.type === 'filler' ? '#38bdf8' : '#0ea5e9';
                const label =
                  it.type === 'laser'
                    ? `⚡ เลเซอร์ Ultherapy +${it.points}`
                    : it.type === 'filler'
                    ? `✨ Filler Reva +${it.points}`
                    : `💉 Botox Reva +${it.points}`;
                textsRef.current.push({
                  text: label,
                  x: tether.x,
                  y: ledgeY - 20,
                  color: c,
                  life: 1.0,
                });

                // Sparkle particles
                for (let k = 0; k < (it.type === 'laser' ? 26 : 16); k++) {
                  particlesRef.current.push({
                    x: tether.x,
                    y: ledgeY,
                    vx: (Math.random() - 0.5) * (it.type === 'laser' ? 220 : 150),
                    vy: (Math.random() - 0.5) * 120 - 40,
                    color: c,
                    size: Math.random() * 4 + 2,
                    life: 1.0,
                    decay: Math.random() * 1.5 + 1.2,
                  });
                }
                itemsRef.current = itemsRef.current.filter((item) => item.id !== it.id);
              } else if (tether.caughtItem.type === 'obstacle') {
                const ob = tether.caughtItem.data;
                scoreRef.current = Math.max(0, scoreRef.current - Math.abs(ob.points));
                countsRef.current[ob.type]++;
                doc.damageFlash = ob.type === 'witch' ? 0.8 : 0.5;

                if (ob.type === 'witch') {
                  soundRef.current.playHitWitch();
                  textsRef.current.push({
                    text: '🧙‍♀️ แม่มดบินไว! หัก 100 คะแนน',
                    x: tether.x,
                    y: ledgeY - 22,
                    color: '#f43f5e',
                    life: 1.4,
                  });
                  for (let k = 0; k < 24; k++) {
                    particlesRef.current.push({
                      x: tether.x,
                      y: ledgeY,
                      vx: (Math.random() - 0.5) * 200,
                      vy: (Math.random() - 0.5) * 140 - 30,
                      color: Math.random() > 0.5 ? '#ec4899' : '#a855f7',
                      size: Math.random() * 4 + 2,
                      life: 1.0,
                      decay: 1.8,
                    });
                  }
                } else if (ob.type === 'pumpkin') {
                  soundRef.current.playHitPumpkin();
                  textsRef.current.push({
                    text: '🎃 ฟักทองฮาโลวีน! หัก 50 คะแนน',
                    x: tether.x,
                    y: ledgeY - 22,
                    color: '#fb923c',
                    life: 1.4,
                  });
                  for (let k = 0; k < 20; k++) {
                    particlesRef.current.push({
                      x: tether.x,
                      y: ledgeY,
                      vx: (Math.random() - 0.5) * 180,
                      vy: (Math.random() - 0.5) * 120 - 30,
                      color: '#f97316',
                      size: Math.random() * 3.5 + 2,
                      life: 1.0,
                      decay: 2.0,
                    });
                  }
                } else {
                  soundRef.current.playHitGhost();
                  textsRef.current.push({
                    text: '👻 โดนผี! โดนหัก 10 คะแนน',
                    x: tether.x,
                    y: ledgeY - 22,
                    color: '#ef4444',
                    life: 1.3,
                  });
                  for (let k = 0; k < 18; k++) {
                    particlesRef.current.push({
                      x: tether.x,
                      y: ledgeY,
                      vx: (Math.random() - 0.5) * 160,
                      vy: (Math.random() - 0.5) * 110 - 30,
                      color: '#a855f7',
                      size: Math.random() * 3 + 2,
                      life: 1.0,
                      decay: 2.2,
                    });
                  }
                }

                obstaclesRef.current = obstaclesRef.current.filter((item) => item.id !== ob.id);
              }

              setScore(scoreRef.current);
              setCounts({ ...countsRef.current });
              tether.caughtItem = null;
            }
          }
        }

        // Update Clinic items
        for (let i = 0; i < itemsRef.current.length; i++) {
          const it = itemsRef.current[i];
          if (it.caught) continue;
          it.x += it.speed * it.dir * dt;
          it.y = it.baseY + Math.sin(globalTimeRef.current * it.wiggleFreq + it.phase) * 6;

          if (it.dir === 1 && it.x > w + it.w + 25) {
            it.x = -it.w - 25;
            it.baseY = Math.random() * (h - ledgeY - 90) + ledgeY + 45;
          } else if (it.dir === -1 && it.x < -it.w - 25) {
            it.x = w + it.w + 25;
            it.baseY = Math.random() * (h - ledgeY - 90) + ledgeY + 45;
          }
        }
        while (itemsRef.current.length < 8) {
          itemsRef.current.push(createClinicItem(w, h, ledgeY));
        }

        // Update Obstacles (👻 Ghost, 🎃 Pumpkin, 🧙‍♀️ Fast Flying Witch)
        for (let i = 0; i < obstaclesRef.current.length; i++) {
          const ob = obstaclesRef.current[i];
          if (ob.caught) continue;
          ob.x += ob.speed * ob.dir * dt;
          ob.y = ob.baseY + Math.sin(globalTimeRef.current * ob.wiggleFreq + ob.phase) * (ob.type === 'witch' ? 12 : 8);

          // Fast flying witch emits glowing sparks behind her broom
          if (ob.type === 'witch' && Math.random() < 0.35) {
            particlesRef.current.push({
              x: ob.dir === 1 ? ob.x - ob.w * 0.45 : ob.x + ob.w * 0.45,
              y: ob.y + (Math.random() * 8 - 4),
              vx: -ob.dir * (Math.random() * 40 + 20),
              vy: (Math.random() - 0.5) * 30,
              color: Math.random() > 0.5 ? '#f43f5e' : '#c084fc',
              size: Math.random() * 3 + 1.5,
              life: 0.4,
              decay: 2.5,
            });
          }

          if (ob.dir === 1 && ob.x > w + ob.w + 35) {
            ob.x = -ob.w - 35;
            ob.baseY = Math.random() * (h - ledgeY - 110) + ledgeY + 45;
          } else if (ob.dir === -1 && ob.x < -ob.w - 35) {
            ob.x = w + ob.w + 35;
            ob.baseY = Math.random() * (h - ledgeY - 110) + ledgeY + 45;
          }
        }
        while (obstaclesRef.current.filter((o) => o.type === 'ghost').length < 3) {
          obstaclesRef.current.push(createObstacle('ghost', w, h, ledgeY));
        }
        while (obstaclesRef.current.filter((o) => o.type === 'pumpkin').length < 2) {
          obstaclesRef.current.push(createObstacle('pumpkin', w, h, ledgeY));
        }
        while (obstaclesRef.current.filter((o) => o.type === 'witch').length < 2) {
          obstaclesRef.current.push(createObstacle('witch', w, h, ledgeY));
        }

        // Background sparkle wisps drift
        for (const ws of wispsRef.current) {
          ws.y += ws.speed * dt;
          if (ws.y > h) {
            ws.y = 0;
            ws.x = Math.random() * w;
          }
        }

        // Particles
        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= p.decay * dt;
          if (p.life <= 0) particlesRef.current.splice(i, 1);
        }

        // Texts
        for (let i = textsRef.current.length - 1; i >= 0; i--) {
          const t = textsRef.current[i];
          t.y -= 38 * dt;
          t.life -= 1.2 * dt;
          if (t.life <= 0) textsRef.current.splice(i, 1);
        }
      }

      // 3. Draw Clinic Items (Botox, Filler, Laser)
      for (const it of itemsRef.current) {
        ctx.save();
        ctx.translate(it.x, it.y);
        if (it.dir === -1) ctx.scale(-1, 1);

        if (it.type === 'laser') {
          // ⚡ เครื่องยกกระชับ & เลเซอร์คลินิก (Ultherapy Aesthetic Cart Machine) - 50 คะแนน
          const lw = it.w;
          const lh = it.h;

          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 12;

          // 1. Lower Medical Cart Stand & Drawer
          // Cart Drawer Base
          ctx.fillStyle = '#cbd5e1';
          ctx.beginPath();
          ctx.roundRect(-lw * 0.35, lh * 0.18, lw * 0.7, lh * 0.26, 4);
          ctx.fill();
          // Drawer handle
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.roundRect(-lw * 0.2, lh * 0.21, lw * 0.4, 3, 1.5);
          ctx.fill();

          // Central Support Pillar
          ctx.fillStyle = '#94a3b8';
          ctx.fillRect(-lw * 0.1, -lh * 0.04, lw * 0.2, lh * 0.23);

          // Wraparound Cart Handle Bar
          ctx.strokeStyle = '#e2e8f0';
          ctx.lineWidth = 2.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-lw * 0.44, -lh * 0.05);
          ctx.lineTo(-lw * 0.46, lh * 0.06);
          ctx.lineTo(lw * 0.44, lh * 0.06);
          ctx.stroke();

          // 2. Main Console Base (Sleek curved white/grey cradle)
          ctx.fillStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.roundRect(-lw * 0.4, -lh * 0.16, lw * 0.8, lh * 0.24, [4, 4, 8, 8]);
          ctx.fill();

          // Angled Console Backrest / Cradle behind screen
          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.moveTo(-lw * 0.36, -lh * 0.14);
          ctx.lineTo(-lw * 0.32, -lh * 0.46);
          ctx.lineTo(lw * 0.32, -lh * 0.46);
          ctx.lineTo(lw * 0.36, -lh * 0.14);
          ctx.closePath();
          ctx.fill();

          // Front Console Port Bar (Grey strip)
          ctx.fillStyle = '#cbd5e1';
          ctx.fillRect(-lw * 0.36, -lh * 0.03, lw * 0.72, lh * 0.09);

          // Front Panel Controls (Cable port plug, USB ports, Red & Green LEDs)
          ctx.fillStyle = '#64748b';
          ctx.beginPath();
          ctx.arc(-lw * 0.14, 0, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(-lw * 0.14, -1.5, 6, 3);

          // USB slots
          ctx.fillStyle = '#334155';
          ctx.fillRect(-2, -1.5, 3, 2);
          ctx.fillRect(3, -1.5, 3, 2);

          // Red standby LED
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(lw * 0.22, 0, 2, 0, Math.PI * 2);
          ctx.fill();

          // Glowing Green Power LED
          const greenPulse = Math.sin(globalTimeRef.current * 8) * 0.3 + 0.7;
          ctx.fillStyle = `rgba(34, 197, 94, ${greenPulse})`;
          ctx.shadowColor = '#22c55e';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(lw * 0.29, 0, 2.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 10;

          // 3. Treatment Monitor Display (Ulthera Screen)
          // Monitor Outer White Bezel
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(-lw * 0.3, -lh * 0.5, lw * 0.6, lh * 0.42, 6);
          ctx.fill();
          ctx.stroke();

          // Inner Dark Display Screen
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.roundRect(-lw * 0.25, -lh * 0.46, lw * 0.5, lh * 0.32, 3);
          ctx.fill();

          // Screen Ultrasound Face Scan Visualization (Two profile faces with ultrasound lines)
          ctx.fillStyle = '#fdba74';
          ctx.beginPath();
          ctx.ellipse(-lw * 0.1, -lh * 0.32, 4.5, 6.5, 0.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(lw * 0.1, -lh * 0.32, 4.5, 6.5, -0.2, 0, Math.PI * 2);
          ctx.fill();

          // Ultrasound scan line
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-lw * 0.2, -lh * 0.26);
          ctx.lineTo(lw * 0.2, -lh * 0.26);
          ctx.stroke();

          // Screen top indicators
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(-lw * 0.22, -lh * 0.44, 5, 2);
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(lw * 0.16, -lh * 0.44, 4, 2);

          // 4. Handpiece / Transducer Wand in Left Holster
          // Holster Ring
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.roundRect(-lw * 0.46, -lh * 0.14, lw * 0.15, lh * 0.2, 3);
          ctx.fill();

          // Transducer Handpiece (White ergonomic handle)
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(-lw * 0.45, -lh * 0.3, lw * 0.13, lh * 0.26, [5, 5, 2, 2]);
          ctx.fill();
          ctx.stroke();

          // Handpiece blue control buttons
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(-lw * 0.39, -lh * 0.22, 1.5, 0, Math.PI * 2);
          ctx.arc(-lw * 0.39, -lh * 0.15, 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Transducer White Cable from wand bottom to front port
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-lw * 0.39, -lh * 0.04);
          ctx.quadraticCurveTo(-lw * 0.36, lh * 0.1, -lw * 0.24, lh * 0.07);
          ctx.quadraticCurveTo(-lw * 0.16, lh * 0.04, -lw * 0.14, 0);
          ctx.stroke();
        } else if (it.type === 'filler') {
          // ✨ กล่อง Filler "Reva Aesthetic Clinic" (30 คะแนน)
          const fw = it.w;
          const fh = it.h;

          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;

          // Back box (White with dark navy angled corner)
          ctx.save();
          ctx.translate(fw * 0.08, -fh * 0.1);
          ctx.rotate(0.12);
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.roundRect(-fw * 0.44, -fh * 0.38, fw * 0.88, fh * 0.76, 4);
          ctx.fill();

          // Dark navy angular accent on back box
          ctx.fillStyle = '#10223e';
          ctx.beginPath();
          ctx.moveTo(-fw * 0.44, -fh * 0.38);
          ctx.lineTo(-fw * 0.18, -fh * 0.38);
          ctx.lineTo(-fw * 0.44, fh * 0.1);
          ctx.closePath();
          ctx.fill();

          // Gold square seal on back box
          ctx.fillStyle = '#b59a57';
          ctx.fillRect(fw * 0.22, fh * 0.08, fw * 0.14, fh * 0.2);

          // Reva text on back box
          ctx.fillStyle = '#10223e';
          ctx.font = 'bold 7px Prompt, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Reva', 0, -fh * 0.08);
          ctx.restore();

          // Front box (Deep Navy Blue Reva Box)
          ctx.save();
          ctx.rotate(-0.06);

          // Navy gradient body
          const boxGrad = ctx.createLinearGradient(-fw * 0.45, -fh * 0.45, fw * 0.45, fh * 0.45);
          boxGrad.addColorStop(0, '#162a4a');
          boxGrad.addColorStop(0.5, '#0e1e36');
          boxGrad.addColorStop(1, '#091424');
          ctx.fillStyle = boxGrad;
          ctx.beginPath();
          ctx.roundRect(-fw * 0.46, -fh * 0.42, fw * 0.92, fh * 0.84, 5);
          ctx.fill();
          ctx.strokeStyle = '#223c63';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Light pastel cyan accent band (iconic feature from image)
          ctx.fillStyle = '#a5f3fc';
          ctx.fillRect(-fw * 0.32, -fh * 0.36, fw * 0.1, fh * 0.72);

          // Reva Brand Typography
          ctx.fillStyle = '#ffffff';
          ctx.font = '900 11px Prompt, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('Reva', -fw * 0.15, -fh * 0.02);

          // Subtitle 'Aesthetic Clinic'
          ctx.fillStyle = '#94a3b8';
          ctx.font = '500 5px Prompt, sans-serif';
          ctx.fillText('Aesthetic Clinic', -fw * 0.14, fh * 0.14);

          // Metallic Gold square badge seal in bottom-right corner
          const goldGrad = ctx.createLinearGradient(fw * 0.2, fh * 0.08, fw * 0.38, fh * 0.3);
          goldGrad.addColorStop(0, '#fef08a');
          goldGrad.addColorStop(0.5, '#ca8a04');
          goldGrad.addColorStop(1, '#854d0e');
          ctx.fillStyle = goldGrad;
          ctx.beginPath();
          ctx.roundRect(fw * 0.18, fh * 0.08, fw * 0.18, fh * 0.22, 2);
          ctx.fill();

          // Glossy sheen overlay
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.beginPath();
          ctx.moveTo(-fw * 0.46, -fh * 0.42);
          ctx.lineTo(fw * 0.2, -fh * 0.42);
          ctx.lineTo(-fw * 0.46, fh * 0.3);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        } else {
          // 💉 กล่อง Botox "Reva Aesthetic Clinic" & ขวดไวอัล (10 คะแนน)
          const bw = it.w;
          const bh = it.h;

          ctx.shadowColor = '#0284c7';
          ctx.shadowBlur = 12;

          // 1. Reva Cyan Box (Main Box Body, positioned slightly to the right)
          const boxX = -bw * 0.12;
          const boxY = -bh * 0.46;
          const boxW = bw * 0.58;
          const boxH = bh * 0.92;

          // Box gradient - crisp cyan
          const bGrad = ctx.createLinearGradient(boxX, boxY, boxX + boxW, boxY + boxH);
          bGrad.addColorStop(0, '#38bdf8');
          bGrad.addColorStop(0.3, '#0284c7');
          bGrad.addColorStop(1, '#0369a1');
          ctx.fillStyle = bGrad;
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 4);
          ctx.fill();

          // Subtle box top/side 3D edge highlight
          ctx.strokeStyle = '#7dd3fc';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Reva Brand Typography on box
          ctx.fillStyle = '#ffffff';
          ctx.font = '900 11px Prompt, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Reva', boxX + boxW * 0.5, boxY + boxH * 0.52);

          // Subtitle 'Aesthetic Clinic'
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.font = '500 4.5px Prompt, sans-serif';
          ctx.fillText('Aesthetic Clinic', boxX + boxW * 0.5, boxY + boxH * 0.34);

          // 2. Botox Glass Vial in front (left side)
          const vialX = -bw * 0.38;
          const vialY = bh * 0.05;
          const vialW = bw * 0.28;
          const vialH = bh * 0.42;

          // Vial shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
          ctx.beginPath();
          ctx.ellipse(vialX + vialW * 0.5, vialY + vialH, vialW * 0.5, 3, 0, 0, Math.PI * 2);
          ctx.fill();

          // Glass bottle body (transparent glass with white powder/solution base)
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.roundRect(vialX, vialY, vialW, vialH, [2, 2, 4, 4]);
          ctx.fill();
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Cyan label band on vial
          ctx.fillStyle = '#0284c7';
          ctx.fillRect(vialX, vialY + vialH * 0.22, vialW, vialH * 0.35);

          // Silver crimped neck collar
          ctx.fillStyle = '#e2e8f0';
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.roundRect(vialX + vialW * 0.12, vialY - vialH * 0.26, vialW * 0.76, vialH * 0.26, 1.5);
          ctx.fill();
          ctx.stroke();

          // Dark blue flip-off rubber cap on top
          ctx.fillStyle = '#1e3a8a';
          ctx.beginPath();
          ctx.roundRect(vialX + vialW * 0.05, vialY - vialH * 0.38, vialW * 0.9, vialH * 0.16, 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 4. Draw Obstacles (👻 Ghost -10, 🎃 Pumpkin -50, 🧙‍♀️ Fast Flying Witch -100)
      for (const ob of obstaclesRef.current) {
        ctx.save();
        ctx.translate(ob.x, ob.y);
        if (ob.dir === -1) ctx.scale(-1, 1);

        const ow = ob.w;
        const oh = ob.h;

        if (ob.type === 'witch') {
          // 🧙‍♀️ แม่มดขี่ไม้กวาดบินไวๆ (-100 คะแนน) - Fast Flying Witch Hazard!
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 16;

          // Wind speed streaks behind the witch
          const windPhase = Math.sin(globalTimeRef.current * 18 + ob.phase) * 6;
          ctx.strokeStyle = 'rgba(244, 63, 94, 0.45)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-ow * 0.55, -8 + windPhase);
          ctx.lineTo(-ow * 0.9, -8 + windPhase);
          ctx.moveTo(-ow * 0.5, 4 - windPhase);
          ctx.lineTo(-ow * 0.85, 4 - windPhase);
          ctx.stroke();

          // Straw broom bristles at back
          ctx.fillStyle = '#b45309';
          ctx.beginPath();
          ctx.moveTo(-ow * 0.28, 4);
          ctx.lineTo(-ow * 0.6, -2);
          ctx.lineTo(-ow * 0.62, 10);
          ctx.closePath();
          ctx.fill();
          // Bristle band
          ctx.strokeStyle = '#fef08a';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(-ow * 0.35, 2);
          ctx.lineTo(-ow * 0.35, 7);
          ctx.stroke();

          // Wooden Broomstick handle
          ctx.strokeStyle = '#78350f';
          ctx.lineWidth = 3.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-ow * 0.45, 4);
          ctx.lineTo(ow * 0.45, 1);
          ctx.stroke();

          // Billowing Flying Witch Cape / Robe
          const robeFlutter = Math.sin(globalTimeRef.current * 14 + ob.phase) * 5;
          ctx.fillStyle = '#4a044e';
          ctx.beginPath();
          ctx.moveTo(-ow * 0.05, -oh * 0.1);
          ctx.quadraticCurveTo(-ow * 0.35, -oh * 0.15 + robeFlutter, -ow * 0.45, oh * 0.15 + robeFlutter);
          ctx.lineTo(-ow * 0.15, oh * 0.22);
          ctx.closePath();
          ctx.fill();

          // Witch Torso & Dress
          ctx.fillStyle = '#1e1b4b';
          ctx.beginPath();
          ctx.ellipse(-ow * 0.05, oh * 0.05, ow * 0.18, oh * 0.25, 0.3, 0, Math.PI * 2);
          ctx.fill();

          // Pale spooky green face
          ctx.fillStyle = '#86efac';
          ctx.beginPath();
          ctx.ellipse(ow * 0.12, -oh * 0.12, ow * 0.12, oh * 0.14, 0.15, 0, Math.PI * 2);
          ctx.fill();

          // Hooked witch nose
          ctx.beginPath();
          ctx.moveTo(ow * 0.22, -oh * 0.14);
          ctx.lineTo(ow * 0.3, -oh * 0.1);
          ctx.lineTo(ow * 0.2, -oh * 0.08);
          ctx.closePath();
          ctx.fill();

          // Witch evil glowing eye
          ctx.fillStyle = '#f43f5e';
          ctx.beginPath();
          ctx.arc(ow * 0.16, -oh * 0.15, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Pointed Witch Hat with Brim
          ctx.fillStyle = '#172554';
          // Hat Brim
          ctx.beginPath();
          ctx.ellipse(ow * 0.1, -oh * 0.2, ow * 0.24, oh * 0.08, -0.2, 0, Math.PI * 2);
          ctx.fill();
          // Hat Cone leaning back from speed
          ctx.beginPath();
          ctx.moveTo(ow * 0.02, -oh * 0.22);
          ctx.lineTo(-ow * 0.22, -oh * 0.65);
          ctx.lineTo(ow * 0.2, -oh * 0.22);
          ctx.closePath();
          ctx.fill();
          // Hat Band & Gold Buckle
          ctx.fillStyle = '#ec4899';
          ctx.fillRect(ow * 0.04, -oh * 0.26, ow * 0.14, 3);
          ctx.fillStyle = '#facc15';
          ctx.fillRect(ow * 0.08, -oh * 0.27, 4, 5);

          // Fast Witch speed badge (-100)
          ctx.fillStyle = '#fda4af';
          ctx.font = '900 9.5px Prompt, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('-100', 0, oh * 0.44);
        } else if (ob.type === 'pumpkin') {
          // 🎃 ฟักทองฮาโลวีน (-50 คะแนน) - Spooky Jack-o'-Lantern
          ctx.shadowColor = '#f97316';
          ctx.shadowBlur = 14;

          const pw = ow * 0.9;
          const ph = oh * 0.85;

          // Pumpkin Outer Ribs (Side lobes)
          const pGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, pw * 0.5);
          pGrad.addColorStop(0, '#fdba74');
          pGrad.addColorStop(0.5, '#f97316');
          pGrad.addColorStop(0.9, '#ea580c');
          pGrad.addColorStop(1, '#9a3412');
          ctx.fillStyle = pGrad;

          ctx.beginPath();
          ctx.ellipse(-pw * 0.25, 0, pw * 0.26, ph * 0.44, -0.1, 0, Math.PI * 2);
          ctx.ellipse(pw * 0.25, 0, pw * 0.26, ph * 0.44, 0.1, 0, Math.PI * 2);
          ctx.fill();

          // Center lobe
          ctx.beginPath();
          ctx.ellipse(0, 0, pw * 0.28, ph * 0.47, 0, 0, Math.PI * 2);
          ctx.fill();

          // Green pumpkin stem
          ctx.fillStyle = '#15803d';
          ctx.beginPath();
          ctx.moveTo(-3, -ph * 0.45);
          ctx.quadraticCurveTo(2, -ph * 0.72, 8, -ph * 0.65);
          ctx.lineTo(6, -ph * 0.45);
          ctx.closePath();
          ctx.fill();

          // Carved Glowing Eyes (Jack-o'-lantern)
          ctx.fillStyle = '#fef08a';
          ctx.shadowColor = '#fef08a';
          ctx.shadowBlur = 8;

          // Left Eye Triangle
          ctx.beginPath();
          ctx.moveTo(-pw * 0.22, -ph * 0.18);
          ctx.lineTo(-pw * 0.1, -ph * 0.05);
          ctx.lineTo(-pw * 0.25, -ph * 0.04);
          ctx.closePath();
          ctx.fill();

          // Right Eye Triangle
          ctx.beginPath();
          ctx.moveTo(pw * 0.22, -ph * 0.18);
          ctx.lineTo(pw * 0.25, -ph * 0.04);
          ctx.lineTo(pw * 0.1, -ph * 0.05);
          ctx.closePath();
          ctx.fill();

          // Triangle Nose
          ctx.beginPath();
          ctx.moveTo(0, -ph * 0.06);
          ctx.lineTo(-3, 0);
          ctx.lineTo(3, 0);
          ctx.closePath();
          ctx.fill();

          // Carved Jagged Toothy Smile
          ctx.beginPath();
          ctx.moveTo(-pw * 0.28, ph * 0.1);
          ctx.lineTo(-pw * 0.16, ph * 0.2);
          ctx.lineTo(-pw * 0.1, ph * 0.12);
          ctx.lineTo(0, ph * 0.22);
          ctx.lineTo(pw * 0.1, ph * 0.12);
          ctx.lineTo(pw * 0.16, ph * 0.2);
          ctx.lineTo(pw * 0.28, ph * 0.1);
          ctx.lineTo(pw * 0.18, ph * 0.26);
          ctx.lineTo(0, ph * 0.28);
          ctx.lineTo(-pw * 0.18, ph * 0.26);
          ctx.closePath();
          ctx.fill();

          // Warning score badge
          ctx.fillStyle = '#fecdd3';
          ctx.font = '900 9px Prompt, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('-50', 0, ph * 0.44);
        } else {
          // 👻 ผีลอยไปมา (-10 คะแนน)
          const gw = ow;
          const gh = oh;
          const tailWiggle = Math.sin(globalTimeRef.current * 7 + ob.phase) * 5;

          // Ghostly aura
          ctx.shadowColor = '#a855f7';
          ctx.shadowBlur = 14;

          // Ghost body
          ctx.fillStyle = 'rgba(241, 245, 249, 0.92)';
          ctx.beginPath();
          ctx.arc(0, -gh * 0.18, gw * 0.42, Math.PI, 0);
          ctx.lineTo(gw * 0.42, gh * 0.28);
          ctx.quadraticCurveTo(gw * 0.22, gh * 0.42 + tailWiggle, 0, gh * 0.28);
          ctx.quadraticCurveTo(-gw * 0.22, gh * 0.42 - tailWiggle, -gw * 0.42, gh * 0.28);
          ctx.closePath();
          ctx.fill();

          // Ghost wavy hands
          ctx.beginPath();
          ctx.arc(-gw * 0.38, gh * 0.04, 4, 0, Math.PI * 2);
          ctx.arc(gw * 0.38, gh * 0.04, 4, 0, Math.PI * 2);
          ctx.fill();

          // Ghost glowing spooky eyes
          ctx.fillStyle = '#581c87';
          ctx.beginPath();
          ctx.arc(-6, -gh * 0.16, 3, 0, Math.PI * 2);
          ctx.arc(6, -gh * 0.16, 3, 0, Math.PI * 2);
          ctx.fill();

          // Ghost open spooky mouth
          ctx.fillStyle = '#3b0764';
          ctx.beginPath();
          ctx.ellipse(0, -gh * 0.04, 3.5, 5, 0, 0, Math.PI * 2);
          ctx.fill();

          // Warning spooky tag / skull badge
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 9px Prompt, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('-10', 0, gh * 0.2);
        }

        ctx.restore();
      }

      // 5. Draw Doctor (Doctor Dracula Costume)
      const doc = doctorRef.current;
      const dw = doc.width;
      const dh = doc.height;

      ctx.save();
      ctx.translate(doc.x, doc.y);
      ctx.rotate(doc.tilt);

      // Dracula's Vampire Cape (Behind)
      const capeFlutter = Math.sin(doc.capePhase) * 6;
      ctx.fillStyle = '#0f051d';
      ctx.beginPath();
      ctx.moveTo(-dw * 0.42, -dh * 0.2);
      ctx.lineTo(-dw * 0.58 + capeFlutter, dh * 0.55);
      ctx.lineTo(0, dh * 0.45);
      ctx.lineTo(dw * 0.58 + capeFlutter, dh * 0.55);
      ctx.lineTo(dw * 0.42, -dh * 0.2);
      ctx.closePath();
      ctx.fill();

      // Cape Crimson Interior High Collar
      ctx.fillStyle = '#b91c1c';
      ctx.beginPath();
      ctx.moveTo(-dw * 0.38, -dh * 0.28);
      ctx.lineTo(-dw * 0.2, -dh * 0.05);
      ctx.lineTo(dw * 0.2, -dh * 0.05);
      ctx.lineTo(dw * 0.38, -dh * 0.28);
      ctx.lineTo(dw * 0.26, dh * 0.05);
      ctx.lineTo(-dw * 0.26, dh * 0.05);
      ctx.closePath();
      ctx.fill();

      // Doctor Lab Coat Body (White & crisp)
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.ellipse(0, dh * 0.18, dw * 0.32, dh * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Coat Center Seam & Buttons
      ctx.strokeStyle = '#94a3b8';
      ctx.beginPath();
      ctx.moveTo(0, -dh * 0.02);
      ctx.lineTo(0, dh * 0.45);
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(0, dh * 0.08, 1.8, 0, Math.PI * 2);
      ctx.arc(0, dh * 0.22, 1.8, 0, Math.PI * 2);
      ctx.arc(0, dh * 0.34, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Doctor Stethoscope
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-dw * 0.18, -dh * 0.02);
      ctx.quadraticCurveTo(-dw * 0.08, dh * 0.28, 0, dh * 0.28);
      ctx.quadraticCurveTo(dw * 0.08, dh * 0.28, dw * 0.18, -dh * 0.02);
      ctx.stroke();
      ctx.fillStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.arc(0, dh * 0.28, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Doctor Dracula Head
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.ellipse(0, -dh * 0.18, dw * 0.24, dh * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();

      // Slicked Widow's Peak Hair
      ctx.fillStyle = '#09090b';
      ctx.beginPath();
      ctx.arc(0, -dh * 0.24, dw * 0.24, Math.PI * 0.9, Math.PI * 2.1);
      ctx.lineTo(0, -dh * 0.18);
      ctx.closePath();
      ctx.fill();

      // Doctor Head Reflector Mirror
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, -dh * 0.25, dw * 0.23, Math.PI * 0.95, Math.PI * 2.05);
      ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(-dw * 0.12, -dh * 0.28, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-dw * 0.13, -dh * 0.29, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Vampire Eyes & Fangs
      ctx.fillStyle = '#b91c1c';
      ctx.beginPath();
      ctx.arc(-5.5, -dh * 0.18, 2, 0, Math.PI * 2);
      ctx.arc(5.5, -dh * 0.18, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#09090b';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(0, -dh * 0.12, 4.5, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-3, -dh * 0.11); ctx.lineTo(-2, -dh * 0.07); ctx.lineTo(-1, -dh * 0.11);
      ctx.moveTo(1, -dh * 0.11); ctx.lineTo(2, -dh * 0.07); ctx.lineTo(3, -dh * 0.11);
      ctx.fill();

      // Magic controller in hands
      ctx.fillStyle = '#f97316';
      ctx.shadowColor = '#f97316';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(0, dh * 0.44, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Damage Shock Flash (if touched ghost)
      if (doc.damageFlash > 0) {
        ctx.strokeStyle = `rgba(239, 68, 68, ${Math.sin(doc.damageFlash * 28) > 0 ? 0.95 : 0.25})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.ellipse(0, 0, dw * 0.52, dh * 0.6, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();

      // 6. Draw Spooky Magical Claw Tether
      const startX = doc.x;
      const startY = ledgeY - 4;
      const tether = tetherRef.current;
      const endX = tether.x;
      const endY = tether.y;

      ctx.save();
      const tetherGrad = ctx.createLinearGradient(startX, startY, endX, endY);
      tetherGrad.addColorStop(0, '#f97316');
      tetherGrad.addColorStop(0.5, '#c084fc');
      tetherGrad.addColorStop(1, '#38bdf8');

      ctx.strokeStyle = tetherGrad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#c084fc';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Glowing pulse nodes on tether
      const dist = Math.hypot(endX - startX, endY - startY);
      const ringSteps = Math.floor(dist / 28);
      ctx.fillStyle = 'rgba(250, 204, 21, 0.7)';
      for (let s = 1; s <= ringSteps; s++) {
        const factor = s / (ringSteps + 1);
        const px = startX + (endX - startX) * factor;
        const py = startY + (endY - startY) * factor;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Skeletal Claw at tip
      ctx.translate(endX, endY);
      ctx.fillStyle = '#f8fafc';
      ctx.shadowColor = '#f97316';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fill();

      const gripAngle = tether.caughtItem ? 0.2 : Math.sin(tether.pulse) * 0.25 + 0.5;
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, 4); ctx.lineTo(0, 14); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-4, 2); ctx.lineTo(-8 - gripAngle * 8, 11); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(4, 2); ctx.lineTo(8 + gripAngle * 8, 11); ctx.stroke();

      ctx.restore();

      // 7. Floating Particles
      for (const p of particlesRef.current) {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 8. Floating Texts
      for (const t of textsRef.current) {
        ctx.save();
        ctx.font = 'bold 15px Prompt, sans-serif';
        ctx.fillStyle = t.color;
        ctx.shadowColor = 'rgba(0,0,0,0.85)';
        ctx.shadowBlur = 6;
        ctx.textAlign = 'center';
        ctx.globalAlpha = Math.max(0, t.life);
        ctx.fillText(t.text, t.x, t.y);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Download standalone single HTML file
  const handleDownloadHtml = () => {
    const link = document.createElement('a');
    link.href = '/fishing-game.html';
    link.download = 'doctor-clinic-halloween-game.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy HTML code trigger
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const totalCaught = counts.botox + counts.filler + counts.laser;

  return (
    <div className="min-h-screen bg-[#07030e] text-slate-100 flex flex-col items-center justify-between p-2 md:p-6 select-none font-sans">
      {/* Top Header */}
      <header className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-3 mb-3 px-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 via-orange-600 to-rose-600 flex items-center justify-center text-2xl shadow-lg shadow-orange-600/30">
            🧛‍♂️
          </div>
          <div>
            <h1 className="font-extrabold text-base md:text-lg text-white leading-tight flex items-center gap-1.5">
              <span>เกมหมอแดรกคูล่าจับของคลินิก 2D</span>
              <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded-full font-bold">
                Clinic Edition
              </span>
            </h1>
            <p className="text-xs text-purple-300/80">
              กล่อง Botox (10) • กล่อง Filler (30) • เครื่องเลเซอร์ (50) • ผี (-10) • ฟักทอง (-50) • แม่มดบินไว (-100)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick instructions button */}
          <button
            onClick={() => setShowInfoModal(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors border border-purple-900/60"
            title="กติกาการเล่น"
          >
            <Info className="w-3.5 h-3.5 text-orange-400" />
            <span className="hidden sm:inline">กติกา</span>
          </button>

          {/* Toggle device frame mode */}
          <button
            onClick={() => setPhoneFrame(!phoneFrame)}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors border border-purple-900/60"
            title={phoneFrame ? 'ขยายเต็มหน้าจอ' : 'มุมมองจอมือถือ'}
          >
            {phoneFrame ? (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">เต็มจอ</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">จอมือถือ</span>
              </>
            )}
          </button>

          {/* View / Copy HTML code button */}
          <button
            onClick={() => setShowCodeModal(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-purple-300 flex items-center gap-1.5 transition-colors border border-purple-900/50"
          >
            <Code className="w-3.5 h-3.5" />
            <span>ดูโค้ด HTML</span>
          </button>

          {/* Direct Download HTML single file button */}
          <button
            onClick={handleDownloadHtml}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-xs font-bold text-white flex items-center gap-1.5 shadow-md shadow-orange-500/25 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>ดาวน์โหลด .html</span>
          </button>
        </div>
      </header>

      {/* Main Game Screen Center */}
      <main className="w-full flex-1 flex items-center justify-center relative">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          className={`relative overflow-hidden transition-all duration-300 ${
            phoneFrame
              ? 'w-[370px] max-w-[95vw] h-[660px] max-h-[82vh] rounded-[36px] border-4 border-purple-950/90 shadow-[0_25px_60px_-15px_rgba(234,88,12,0.3)]'
              : 'w-full max-w-[500px] h-[85vh] rounded-2xl border-2 border-purple-900/50 shadow-2xl'
          } bg-gradient-to-b from-[#110726] via-[#0d051c] to-[#040108]`}
        >
          {/* Top In-Game HUD - Ultra-compact and slim so it never obscures Dracula's face */}
          <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-20 gap-1.5">
            {/* Score */}
            <div className="bg-slate-950/90 backdrop-blur-md border border-orange-500/40 rounded-xl px-2.5 py-1 shadow-md flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-orange-400">คะแนน</span>
              <span className="text-sm font-black text-amber-300 tabular-nums leading-none">
                {score}
              </span>
            </div>

            {/* Total Items Caught Counter */}
            <div className="bg-slate-950/90 backdrop-blur-md border border-purple-500/40 rounded-xl px-2 py-1 shadow-md flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-purple-300">จับได้</span>
              <span className="text-sm font-black text-emerald-300 tabular-nums leading-none">
                {totalCaught}
              </span>
            </div>

            {/* Timer 60s */}
            <div
              className={`bg-slate-950/90 backdrop-blur-md border border-purple-500/40 rounded-xl px-2 py-1 shadow-md flex items-center gap-1.5 transition-all ${
                timeLeft <= 10 && isPlaying ? 'border-rose-500/90 animate-pulse' : ''
              }`}
            >
              <span className="text-[10px] font-bold text-purple-400">เวลา</span>
              <span
                className={`text-sm font-black tabular-nums leading-none ${
                  timeLeft <= 10 ? 'text-rose-400' : 'text-white'
                }`}
              >
                {timeLeft}s
              </span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                soundRef.current.init();
                setSoundEnabled(!soundEnabled);
              }}
              className="pointer-events-auto w-7 h-7 rounded-xl bg-slate-950/90 backdrop-blur-md border border-purple-500/40 text-white flex items-center justify-center hover:bg-slate-800 transition-transform active:scale-90 shrink-0"
              title="เปิด/ปิดเสียง"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-orange-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>
          </div>

          {/* Interactive Game Canvas */}
          <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair touch-none" />

          {/* Tap hint during game */}
          {isPlaying && (
            <div className="absolute bottom-5 inset-x-0 text-center pointer-events-none z-10 animate-bounce">
              <span className="bg-slate-950/80 backdrop-blur-sm text-orange-200 text-xs px-3.5 py-1.5 rounded-full border border-orange-500/30 font-medium shadow-lg">
                🧛 แตะหย่อนมือกลจับของ • ระวังแม่มดบินไว (-100) ฟักทอง (-50) ผี (-10)
              </span>
            </div>
          )}

          {/* Start Screen Modal */}
          {!isPlaying && !showGameOver && (
            <div className="absolute inset-0 bg-[#07030e]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 z-30">
              <div className="w-full max-w-[320px] bg-slate-950/95 border-2 border-orange-500/50 rounded-3xl p-5 text-center shadow-2xl shadow-orange-500/20">
                <div className="text-4xl mb-1.5 animate-bounce">🧛‍♂️</div>
                <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-300 to-purple-400 tracking-wide mb-0.5">
                  หมอแดรกคูล่าจับของคลินิก
                </h2>
                <p className="text-[11px] text-orange-200/80 mb-3">
                  หย่อนมือกลจับของคลินิก ระวังแม่มด ฟักทอง และผี!
                </p>

                {/* Score breakdown helper */}
                <div className="bg-slate-900/80 rounded-2xl p-2.5 text-xs text-left space-y-1.5 mb-4 border border-purple-500/20">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span>💉</span>
                      <span>กล่อง Botox Reva</span>
                    </span>
                    <span className="text-sky-400 font-bold">+10 คะแนน</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span>✨</span>
                      <span>กล่อง Filler Reva</span>
                    </span>
                    <span className="text-amber-300 font-bold">+30 คะแนน</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>เลเซอร์ Ultherapy</span>
                    </span>
                    <span className="text-sky-300 font-extrabold">+50 คะแนน</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300 border-t border-white/10 pt-1.5">
                    <span className="flex items-center gap-1.5">
                      <span>👻</span>
                      <span>ผีลอยไปมา</span>
                    </span>
                    <span className="text-rose-400 font-bold">หัก -10 คะแนน</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span>🎃</span>
                      <span>ฟักทองฮาโลวีน</span>
                    </span>
                    <span className="text-orange-400 font-bold">หัก -50 คะแนน</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span>🧙‍♀️</span>
                      <span>แม่มดบินไวๆ</span>
                    </span>
                    <span className="text-pink-400 font-extrabold">หัก -100 คะแนน</span>
                  </div>
                </div>

                {highScore > 0 && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-amber-300/90 mb-3 font-semibold">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>สถิติสูงสุด: {highScore} คะแนน</span>
                  </div>
                )}

                <button
                  onClick={handleStartGame}
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-400 hover:to-purple-500 active:scale-95 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/35 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>เริ่มเล่นเกม (60 วิ)</span>
                </button>
              </div>
            </div>
          )}

          {/* Game Over Modal */}
          {showGameOver && (
            <div className="absolute inset-0 bg-[#07030e]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 z-30 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-full max-w-[320px] bg-slate-950/95 border-2 border-orange-500/50 rounded-3xl p-5 text-center shadow-2xl shadow-orange-500/20">
                <div className="text-3xl mb-1">🏆</div>
                <h2 className="text-xl font-black text-white">หมดเวลา 60 วินาที!</h2>
                <div className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/40 px-2.5 py-0.5 rounded-full text-xs font-semibold my-1">
                  สรุปผลงานคืนนี้
                </div>

                {/* Score badge */}
                <div className="bg-orange-500/10 border border-orange-400/30 rounded-2xl py-2.5 px-3 mb-3">
                  <div className="text-[10px] font-semibold text-orange-300 uppercase tracking-wider">
                    คะแนนรวมที่ได้
                  </div>
                  <div className="text-3xl font-black text-amber-400 my-0.5">{score}</div>
                  <div className="text-xs text-amber-300 font-bold">
                    สถิติสูงสุด: {Math.max(score, highScore)} คะแนน
                  </div>
                </div>

                {/* Stats breakdown */}
                <div className="bg-slate-900/80 rounded-2xl p-2 text-xs text-left space-y-1 mb-4 border border-purple-500/20">
                  <div className="flex justify-between items-center py-0.5 px-2">
                    <span className="text-slate-300">💉 Botox Reva (+10)</span>
                    <span className="font-bold text-sky-400">{counts.botox} กล่อง</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 px-2">
                    <span className="text-slate-300">✨ Filler Reva (+30)</span>
                    <span className="font-bold text-amber-400">{counts.filler} กล่อง</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 px-2">
                    <span className="text-slate-300">⚡ เลเซอร์ Ultherapy (+50)</span>
                    <span className="font-bold text-sky-300">{counts.laser} เครื่อง</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 px-2 border-t border-white/5 pt-1">
                    <span className="text-slate-300">👻 ผี (-10)</span>
                    <span className="font-bold text-rose-400">{counts.ghost} ครั้ง</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 px-2">
                    <span className="text-slate-300">🎃 ฟักทอง (-50)</span>
                    <span className="font-bold text-orange-400">{counts.pumpkin} ครั้ง</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 px-2">
                    <span className="text-slate-300">🧙‍♀️ แม่มดบินไว (-100)</span>
                    <span className="font-bold text-pink-400">{counts.witch} ครั้ง</span>
                  </div>
                </div>

                <button
                  onClick={handleStartGame}
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-400 hover:to-purple-500 active:scale-95 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/35 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>เล่นใหม่อีกรอบ</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="w-full max-w-5xl mt-3 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 px-2">
        <div>
          💉 Botox (10) | ✨ Filler (30) | ⚡ เลเซอร์ (50) | 👻 ผี (-10) | 🎃 ฟักทอง (-50) | 🧙‍♀️ แม่มดบินไว (-100)
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/fishing-game.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline font-medium"
          >
            เปิดไฟล์ fishing-game.html โดยตรง
          </a>
        </div>
      </footer>

      {/* Code Viewer Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-900/60 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base">โค้ด HTML เดี่ยว (Single File HTML)</h3>
                <p className="text-xs text-slate-400">
                  ไฟล์เดี่ยวที่มีทั้ง HTML + CSS + JavaScript + Web Audio พร้อมเปิดเล่นทันที
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Code className="w-4 h-4" />}
                  <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกโค้ด'}</span>
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 flex-1 overflow-auto bg-slate-950 font-mono text-xs text-slate-300">
              <pre className="whitespace-pre-wrap select-all">{htmlCode}</pre>
            </div>
          </div>
        </div>
      )}

      {/* Rules Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-900/60 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧛‍♂️</span>
                <h3 className="font-extrabold text-white text-lg">กติกาและวิธีการเล่น</h3>
              </div>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed mb-6">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
                <span className="font-bold text-orange-400 block mb-1">🎯 ระบบคะแนน:</span>
                • 💉 <strong>กล่อง Botox Reva & ไวอัล</strong>: ได้ 10 คะแนน<br />
                • ✨ <strong>กล่อง Filler Reva (น้ำเงิน-ขาว)</strong>: ได้ 30 คะแนน<br />
                • ⚡ <strong>เลเซอร์ยกกระชับ Ultherapy</strong>: ได้ 50 คะแนน
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
                <span className="font-bold text-rose-400 block mb-1">👻 สิ่งกีดขวาง (ระวังให้ดี!):</span>
                • 👻 <strong>ผีลอยไปมา</strong>: หัก 10 คะแนน<br />
                • 🎃 <strong>ฟักทองฮาโลวีน</strong>: หัก 50 คะแนน<br />
                • 🧙‍♀️ <strong>แม่มดขี่ไม้กวาดบินไวๆ</strong>: หัก 100 คะแนน!
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5">
                <span className="font-bold text-orange-400 block mb-1">🎮 การควบคุม:</span>
                • <strong>แตะหน้าจอ</strong>: หย่อนมือกลลงไปจับของรางวัล<br />
                • <strong>ลากนิ้วซ้าย-ขวา</strong>: เลื่อนคุณหมอแดรกคูล่าไปยังตำแหน่งที่ต้องการ<br />
                • <strong>แตะซ้ำขณะสายยืด</strong>: ดึงสายกลับทันทีเพื่อหลบสิ่งกีดขวาง
              </div>
            </div>

            <button
              onClick={() => setShowInfoModal(false)}
              className="w-full py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 font-bold text-sm text-white transition-colors"
            >
              เข้าใจแล้ว
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
