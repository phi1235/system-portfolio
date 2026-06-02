"use client";

import { useEffect, useRef } from "react";
import { ThemeId, themes } from "@/config/portfolio";

type StarfieldProps = {
  activeTheme: ThemeId;
};

export function Starfield({ activeTheme }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 100;
    const stars: { x: number; y: number; z: number; color: string; size: number }[] = [];
    const colors = themes[activeTheme].starColors;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.08;
      mouseY = (e.clientY - height / 2) * 0.08;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const speed = 0.65; // Elegant slow drift speed

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }

        const k = 140 / star.z;
        const px = star.x * k + width / 2 + mouseX * (1 - k * 0.5);
        const py = star.y * k + height / 2 + mouseY * (1 - k * 0.5);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = star.size * (1 - star.z / width) * 2;

          ctx.beginPath();
          ctx.arc(px, py, size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = 0.18;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.8 * (1 - star.z / width);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTheme]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />;
}
