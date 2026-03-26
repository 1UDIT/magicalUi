'use client';

import { useEffect } from "react";

type SpaceBgOptions = {
  starCount?: number;
  disableOnMobile?: boolean;
  onReady?: () => void;
};

export function useSpaceBackground(
  canvasId: string,
  options: SpaceBgOptions = {}
) {
  const {
    starCount = 300,
    disableOnMobile = false,
    onReady,
  } = options;

  useEffect(() => {
    if (disableOnMobile && window.innerWidth < 768) return;

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ✅ MUST CALL THIS
    resize();

    // ✅ PRE-PAINT (prevents black flash)
    ctx.fillStyle = "#050510";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    onReady?.();

    window.addEventListener("resize", resize);

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.01,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🌌 background
      const bg = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      bg.addColorStop(0, "#050510");
      bg.addColorStop(1, "#000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // ✨ stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha <= 0 || star.alpha >= 1) star.speed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      // 🌈 glow
      const glow = ctx.createRadialGradient(
        window.innerWidth / 2,
        window.innerHeight,
        50,
        window.innerWidth / 2,
        window.innerHeight,
        window.innerWidth
      );

      glow.addColorStop(0, "rgba(0,245,255,0.25)");
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasId, starCount, disableOnMobile, onReady]);
}
