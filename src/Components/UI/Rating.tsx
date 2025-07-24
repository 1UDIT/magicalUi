"use client"

import React, { useState } from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  value: number;
  onChange: (newValue: number) => void;
  maxStars?: number;
  icon?: IconType;
  iconColor?: string;
  iconSize?: number;
  allowHalf?: boolean;
};

const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  maxStars = 5,
  icon: Icon = FaStar,
  iconColor = "#facc15",
  iconSize = 24,
  allowHalf = true,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const getFillState = (index: number) => {
    const current = hoverValue !== null ? hoverValue : value;
    if (current >= index + 1) return "full";
    if (allowHalf && current >= index + 0.5) return "half";
    return "empty";
  };

  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, index) => {
        const fillState = getFillState(index);

        return (
          <div
            key={index}
            className="relative cursor-pointer"
            onMouseLeave={() => setHoverValue(null)}
          >
            {/* Background icon (empty) */}
            {Icon && <Icon size={iconSize} className="text-gray-300" />}

            {/* Foreground fill (half or full) */}
            {fillState !== "empty" && Icon && (
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{
                  width: fillState === "half" ? "50%" : "100%",
                  height: "100%",
                  color: iconColor,
                  pointerEvents: "none",
                }}
              >
                <Icon size={iconSize} />
              </div>
            )}

            {/* Hover/click handler */}
            <div
              className="absolute inset-0 z-10"
              onMouseMove={(e) => {
                const box = e.currentTarget.getBoundingClientRect();
                const isHalf = e.clientX - box.left < box.width / 2;
                setHoverValue(isHalf ? index + 0.5 : index + 1);
              }}
              onClick={(e) => {
                const box = e.currentTarget.getBoundingClientRect();
                const isHalf = e.clientX - box.left < box.width / 2;
                onChange(isHalf ? index + 0.5 : index + 1);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
