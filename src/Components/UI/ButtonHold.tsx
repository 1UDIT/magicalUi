"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Power,
  type LucideIcon,
} from "lucide-react";

type HoldActionVariant = "delete" | "warning" | "success" | "danger";

type HoldActionButtonProps = {
  onAction?: () => void;
  holdDuration?: number;
  variant?: HoldActionVariant;
  children?: React.ReactNode;
};

const VARIANT_STYLES: Record<
  HoldActionVariant,
  {
    fill: string;
    border: string;
    label: string;
    holdingLabel: string;
    Icon: LucideIcon;
  }
> = {
  delete: {
    fill: "bg-red-600",
    border: "border-red-500/40",
    label: "Delete",
    holdingLabel: "Hold to delete...",
    Icon: Trash2,
  },
  warning: {
    fill: "bg-yellow-500",
    border: "border-yellow-400/40",
    label: "Warning",
    holdingLabel: "Hold to continue...",
    Icon: AlertTriangle,
  },
  success: {
    fill: "bg-green-600",
    border: "border-green-500/40",
    label: "Confirm",
    holdingLabel: "Hold to confirm...",
    Icon: CheckCircle2,
  },
  danger: {
    fill: "bg-orange-600",
    border: "border-orange-500/40",
    label: "Proceed",
    holdingLabel: "Hold to proceed...",
    Icon: Power,
  },
};

export default function HoldActionButton({
  onAction,
  holdDuration = 1200,
  variant = "delete",
  children,
}: HoldActionButtonProps) {
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const [isHolding, setIsHolding] = useState(false);
  const [completed, setCompleted] = useState(false);

  const current = VARIANT_STYLES[variant];
  const Icon = current.Icon;

  const startHold = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (isHolding) return;

    e.currentTarget.setPointerCapture(e.pointerId); // ✅ IMPORTANT

    setCompleted(false);
    setIsHolding(true);
    progress.set(0);

    animationRef.current = animate(progress, 100, {
      duration: holdDuration / 1000,
      ease: "linear",
      onComplete: () => {
        setCompleted(true);
        setIsHolding(false);
        onAction?.();

        setTimeout(() => {
          progress.set(0);
          setCompleted(false);
        }, 150);
      },
    });
  };

  const cancelHold = () => {
    if (completed) return;

    animationRef.current?.stop();
    setIsHolding(false);

    animate(progress, 0, {
      duration: 0.2,
      ease: "easeOut",
    });
  };

  const resetProgress = () => {
    animationRef.current?.stop();
    setIsHolding(false);
    animate(progress, 0, {
      duration: 0.15,
      ease: "easeOut",
    });
  };


  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isHolding || !buttonRef.current || completed) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const inside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!inside) {
      resetProgress();
    }
  };

  return (
    <motion.button
      ref={buttonRef}  
      type="button"
      onPointerDown={startHold}
      onPointerMove={handlePointerMove} 
      onPointerUp={cancelHold}
      onPointerCancel={cancelHold}
      whileTap={{ scale: 0.97 }}
      className={`relative select-none overflow-hidden rounded-xl border bg-zinc-900 px-4 py-2 text-white ${current.border} w-50`}
    >
      <motion.div
        className={`pointer-events-none absolute inset-y-0 left-0 ${current.fill}`}
        style={{ width }}
      />

      <span className="relative z-10 flex items-center gap-2 font-medium">
        <Icon className="h-4 w-4" />
        {children ?? (isHolding ? current.holdingLabel : current.label)}
      </span>
    </motion.button>
  );
}