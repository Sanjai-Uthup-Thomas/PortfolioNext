"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Briefcase } from "lucide-react";
import WhatsappIcon from "../../../../public/whatsapp.svg";

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Show after scrolling 300px
      if (current > 300) {
        if (current < lastScroll) {
          setVisible(true); // scrolling up
        } else {
          setVisible(false); // scrolling down
        }
      } else {
        setVisible(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-4"
        >
          {/* 💬 WhatsApp */}
          <motion.a
            href="https://wa.me/919048856828?text=Hi%20Sanjai,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-14 h-14 flex items-center justify-center rounded-full 
            bg-green-500 text-white shadow-lg 
            hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] 
            transition-all duration-300"
          >
            {/* <MessageCircle className="w-6 h-6" /> */}
        {/* ICON */}
        <Image
          src={WhatsappIcon}
          alt="WhatsApp"
          width={52}
          height={52}
          className="transition-transform duration-300 hover:scale-110"
        />
            {/* Tooltip */}
            <span className="absolute right-16 bg-black text-white text-xs px-2 py-1 rounded 
            opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </motion.a>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;