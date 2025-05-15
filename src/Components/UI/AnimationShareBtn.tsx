import { ReactElement, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { MdIosShare } from "react-icons/md";

interface SocialLinkProps {
  index: number;
  totalItems: number;
  icon: React.ReactNode;
  color: string;
  isOpen: boolean;
  url: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  index,
  totalItems,
  icon,
  color,
  isOpen,
  url,
}) => {
  const angle = (2 * Math.PI) / totalItems;
  const itemAngle = angle * index - Math.PI / 2;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute flex items-center justify-center rounded-full bg-white shadow-md w-10 h-10"
      style={{ color }}
      initial={{ scale: 0 }}
      animate={{
        scale: isOpen ? 1 : 0,
        x: isOpen ? Math.cos(itemAngle) * 140 : 0,
        y: isOpen ? Math.sin(itemAngle) * 140 : 0,
      }}
      transition={{
        delay: isOpen ? index * 0.05 : 0,
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 0 2px ${color}, 0 0 0 6px #fff`,
      }}
    >
      {icon}
    </motion.a>
  );
};

interface SocialLinkItem {
  icon: ReactElement;
  color: string;
  url: string;
}

interface MagicalShareMenuProps {
  socialLinks: SocialLinkItem[];
}

export const AnimationShareBtn: React.FC<MagicalShareMenuProps> = ({
  socialLinks,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative "
    >
      <motion.div
        className="relative z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        animate={{
          rotate: isOpen ? 360 : 0,
          boxShadow: isOpen
            ? "0 6px 8px rgba(0, 0, 0, 0.15), 0 0 0 2px #333, 0 0 0 8px #fff"
            : "0 3px 4px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.5 }}
      >
        <MdIosShare className="w-6 h-6 text-gray-800" />
      </motion.div>

      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          index={index}
          totalItems={socialLinks.length}
          icon={link.icon}
          color={link.color}
          isOpen={isOpen}
          url={link.url}
        />
      ))}
    </div>
  );
};
