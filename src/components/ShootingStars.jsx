import { useEffect, useRef, useCallback } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ShootingStars — Canvas-based animated meteor shower.
 *
 * Props:
 *  - quantity      : max concurrent shooting stars (default 4)
 *  - minSpeed      : min travel speed in px/frame (default 10)
 *  - maxSpeed      : max travel speed in px/frame (default 18)
 *  - minDelay      : min ms between spawns (default 800)
 *  - maxDelay      : max ms between spawns (default 3200)
 *  - starWidth     : trail stroke width (default 2)
 *  - starLength    : trail length in px (default 120)
 *  - colors        : array of hex colours for random pick
 *  - className     : extra CSS classes
 */
const ShootingStars = ({
  quantity = 4,
  minSpeed = 10,
  maxSpeed = 18,
  minDelay = 800,
  maxDelay = 3200,
  starWidth = 2,
  starLength = 120,
  colors = ["#ffffff", "#7a57db", "#33c2cc", "#d4c4fb"],
  className = "",
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);
  const lastSpawnRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const dpr =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  /** Create one shooting star with randomised properties */
  const spawnStar = useCallback(() => {
    const { w, h } = sizeRef.current;
    if (w === 0 || h === 0) return null;

    const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const length = starLength * (0.6 + Math.random() * 0.8);
    const width = starWidth * (0.5 + Math.random() * 0.7);

    // Pick a random edge (0=top, 1=right, 2=bottom, 3=left) and spawn
    // the star along that edge, then aim it inward with some angular spread
    const edge = Math.floor(Math.random() * 4);
    let x, y, baseAngleDeg;

    switch (edge) {
      case 0: // top edge — shoot downward
        x = Math.random() * w;
        y = -length;
        baseAngleDeg = 90; // straight down
        break;
      case 1: // right edge — shoot leftward
        x = w + length;
        y = Math.random() * h;
        baseAngleDeg = 180; // straight left
        break;
      case 2: // bottom edge — shoot upward
        x = Math.random() * w;
        y = h + length;
        baseAngleDeg = 270; // straight up
        break;
      case 3: // left edge — shoot rightward
        x = -length;
        y = Math.random() * h;
        baseAngleDeg = 0; // straight right
        break;
    }

    // Add ±60° spread so stars don't all go perfectly perpendicular
    const angleDeg = baseAngleDeg + (Math.random() - 0.5) * 120;
    const angle = (angleDeg * Math.PI) / 180;

    return {
      x,
      y,
      angle,
      speed,
      color,
      length,
      width,
      opacity: 0,
      // phases: fade-in → full → fade-out
      phase: "in",
      life: 0,
      maxLife: 60 + Math.random() * 40, // frames
    };
  }, [minSpeed, maxSpeed, colors, starLength, starWidth]);

  /** Resize canvas to fill container */
  const resize = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    sizeRef.current = { w, h };

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
  }, [dpr]);

  /** Main animation loop */
  const animate = useCallback(
    (now) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const { w, h } = sizeRef.current;
      if (!ctx || w === 0) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Spawn new stars at random intervals
      if (
        starsRef.current.length < quantity &&
        now - lastSpawnRef.current > minDelay + Math.random() * (maxDelay - minDelay)
      ) {
        const star = spawnStar();
        if (star) starsRef.current.push(star);
        lastSpawnRef.current = now;
      }

      // Update & draw each star
      starsRef.current = starsRef.current.filter((star) => {
        star.life++;

        // Opacity phases
        const fadeFrames = 8;
        if (star.phase === "in") {
          star.opacity = Math.min(1, star.opacity + 1 / fadeFrames);
          if (star.opacity >= 1) star.phase = "full";
        } else if (star.life > star.maxLife - fadeFrames) {
          star.phase = "out";
          star.opacity = Math.max(0, star.opacity - 1 / fadeFrames);
        }

        // Move
        const vx = Math.cos(star.angle) * star.speed;
        const vy = Math.sin(star.angle) * star.speed;
        star.x += vx;
        star.y += vy;

        // Trail end-point (behind the head)
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        // Draw trail with gradient
        const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.6, `${star.color}44`);
        grad.addColorStop(1, star.color);

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.strokeStyle = grad;
        ctx.lineWidth = star.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Bright head glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.width * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity * 0.8;
        ctx.fill();

        // Soft outer glow
        const glowGrad = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.width * 6
        );
        glowGrad.addColorStop(0, `${star.color}55`);
        glowGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.width * 6, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.globalAlpha = star.opacity * 0.5;
        ctx.fill();

        ctx.restore();

        // Remove if off-screen or faded out
        const padding = star.length + 50;
        if (
          star.x < -padding ||
          star.x > w + padding ||
          star.y < -padding ||
          star.y > h + padding ||
          (star.phase === "out" && star.opacity <= 0)
        ) {
          return false;
        }
        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    },
    [dpr, quantity, minDelay, maxDelay, spawnStar]
  );

  useEffect(() => {
    resize();
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [resize, animate]);

  return (
    <div
      ref={containerRef}
      className={twMerge("pointer-events-none", className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

export default ShootingStars;
