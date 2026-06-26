import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

export function DataCore3D({ className }: { className?: string }) {
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run parallax on desktop to save battery/performance on mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen, mapped to [-1, 1]
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Smooth interpolation (easing) for parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (coreRef.current) {
        // Max rotation of 12deg on parallax to keep it subtle
        coreRef.current.style.transform = `rotateX(${currentY * -12}deg) rotateY(${currentX * 12}deg) translateZ(0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn("group relative perspective-[1200px]", className)}>
      {/* Tightened shadow beneath the object */}
      <div className="absolute -bottom-8 left-1/2 h-20 w-32 -translate-x-1/2 rounded-[100%] bg-oceanic/20 blur-[20px] transition-opacity duration-1000 group-hover:bg-oceanic/30" />
      
      {/* Outer 3D Container (Parallax) */}
      <div ref={coreRef} className="relative h-40 w-40 sm:h-48 sm:w-48 preserve-3d will-change-transform transition-transform duration-200">
        
        {/* Slow 3D Rotation Container */}
        <div className="absolute inset-0 preserve-3d animate-spin-slow-3d">
          
          {/* Inner Glowing Core with Icon */}
          <div className="absolute inset-6 grid place-items-center rounded-[8px] bg-forsythia/20 shadow-[0_0_30px_rgba(255,200,1,0.4)] backdrop-blur-sm preserve-3d animate-pulse-core">
            <Icon name="cubeSolid" className="h-10 w-10 text-forsythia/80 drop-shadow-[0_0_10px_rgba(255,200,1,0.8)]" />
          </div>
          
          {/* Cube Faces */}
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-front" />
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-back" />
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-right" />
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-left" />
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-top" />
          <div className="absolute inset-0 border border-forsythia/30 bg-oceanic/30 backdrop-blur-[2px] face-bottom" />

          {/* Orbiting Data Particles (hidden on small mobile to keep it simple) */}
          <div className="absolute left-1/2 top-1/2 hidden h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 preserve-3d animate-orbit-1 sm:block">
            <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_12px_#D9E8E2]" />
          </div>
          <div className="absolute left-1/2 top-1/2 hidden h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 preserve-3d animate-orbit-2 sm:block">
            <span className="absolute bottom-4 right-0 h-1.5 w-1.5 rounded-full bg-forsythia shadow-[0_0_10px_#FFC801]" />
          </div>
        </div>
      </div>
    </div>
  );
}
