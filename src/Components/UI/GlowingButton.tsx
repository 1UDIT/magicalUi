
import { memo, useCallback, useEffect, useRef } from "react";
import { animate } from "motion/react";
import { cn } from "@/Lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
  disabled?: boolean;
  blur?: number;
  spread?: number;
  movementDuration?: number;
  borderWidth?: number;
  variant?: "default" | "white";
}

export const GlowingButton = memo(({
  children,
  onClick,
  className,
  disabled = false,
  blur = 6,
  spread = 20,
  movementDuration = 2,
  borderWidth = 2,
  variant = "default",
}: GlowingButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const animationFrameRef = useRef<number>(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMove = useCallback((e?: MouseEvent | { x: number; y: number }) => {
    if (!buttonRef.current) return;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    animationFrameRef.current = requestAnimationFrame(() => {
      const el = buttonRef.current!;
      const { left, top, width, height } = el.getBoundingClientRect();
      const mouseX = e?.x ?? lastPos.current.x;
      const mouseY = e?.y ?? lastPos.current.y;
      lastPos.current = { x: mouseX, y: mouseY };

      const center = [left + width / 2, top + height / 2];
      const current = parseFloat(el.style.getPropertyValue("--start")) || 0;
      const target = (Math.atan2(mouseY - center[1], mouseX - center[0]) * 180) / Math.PI + 90;
      const delta = ((target - current + 180) % 360) - 180;

      animate(current, current + delta, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: v => el.style.setProperty("--start", String(v)),
      });

      el.style.setProperty("--active", "1");
    });
  }, [movementDuration]);

  useEffect(() => {
    if (disabled) return;
    const move = (e: PointerEvent) => handleMove(e);
    document.body.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      document.body.removeEventListener("pointermove", move);
    };
  }, [handleMove, disabled]);

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      onClick={onClick}
      style={{
        "--blur": `${blur}px`,
        "--spread": spread,
        "--start": "0",
        "--active": "0",
        "--glowingeffect-border-width": `${borderWidth}px`,
        "--repeating-conic-gradient-times": "5",
        "--gradient": variant === "white"
          ? `repeating-conic-gradient(from 236.84deg at 50% 50%, white, white calc(25% / var(--repeating-conic-gradient-times)))`
          : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
             radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
             radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
             radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
             repeating-conic-gradient(from 236.84deg at 50% 50%,
            rgb(241, 8, 160) 0%, #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
            rgb(68, 112, 33) calc(50% / var(--repeating-conic-gradient-times)),
            rgb(37, 98, 136) calc(75% / var(--repeating-conic-gradient-times)),
            rgb(173, 27, 122) calc(100% / var(--repeating-conic-gradient-times)))`
      } as React.CSSProperties}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all overflow-hidden",
        "bg-black text-white hover:opacity-90",
        "before:content-[''] before:absolute before:inset-[-1px] before:rounded-[inherit]",
        "before:[border:var(--glowingeffect-border-width)_solid_transparent]",
        "before:[background:var(--gradient)] before:[background-attachment:fixed]",
        "before:opacity-[var(--active)] before:transition-opacity before:duration-300",
        "before:[mask-clip:padding-box,border-box] before:[mask-composite:intersect]",
        "before:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
});

GlowingButton.displayName = "GlowingButton";
