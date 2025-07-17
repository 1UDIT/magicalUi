import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

type SilderProps = {
  position?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Silder({ position = "right", isOpen, setIsOpen }: SilderProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <> 
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          /> 
          <motion.div
            ref={sidebarRef}
            initial={{ x: position === "right" ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: position === "right" ? '100%' : '-100%' }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 ${position === "right" ? 'right-0' : 'left-0'} h-full w-80 bg-white shadow-lg z-50 p-6 text-black dark:bg-gray-800 dark:text-white`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-600">
                ✕
              </button>
            </div>
            <p>SideBar options go here.</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
