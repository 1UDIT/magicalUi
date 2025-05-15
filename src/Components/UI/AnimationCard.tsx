import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface FloatCardProps {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string;
}


export const AnimationCard: React.FC<FloatCardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 2 - 1;
    const percentY = (offsetY / rect.height) * 2 - 1;

    const maxRotate = 25;

    const rotateXValue = percentY * -maxRotate;
    const rotateYValue = percentX * maxRotate;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setScale(0.95);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-72 h-96 bg-neutral-950 rounded-xl hover:shadow-neutral-950 shadow-2xs overflow-hidden cursor-pointer perspective-1000 "
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={id}
    >
      <div className="relative w-full h-full flex flex-col">
        {imageUrl && (
          <div className="w-full h-full bg-gray-100 overflow-hidden">
            <img
              src={imageUrl}
              alt={title || "card image"}
              className="object-cover"
            />
          </div>
        )}

        {/* Card Title and Description is added here */}
        <div className="p-4 flex-1 w-full flex flex-col absolute bottom-0 left-0 bg-black opacity-90">
          <h3 className="text-xl text-gray-100 font-bold mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>

        <motion.div
          className="absolute inset-0 bg-white opacity-10 rounded-xl pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
          }}
          animate={{
            backgroundPosition: `${-rotateY * 10 + 200}% ${rotateX * 10 + 200
              }%`,
          }}
        />
      </div>
    </motion.div>
  );
};
