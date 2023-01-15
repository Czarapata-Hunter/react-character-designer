import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  // const { move, setMove } = React.useState(false);
  return (
    <div className="header">
      <motion.p
        initial={{ y: '0%', opacity: 1, scale: 1 }}
        animate={{ x: [0, 1675], opacity: 0, scale: 1 }}
        transition={{ repeat: Infinity, duration: 20 }}
      >
        Character Designer
      </motion.p>
    </div>
  );
}
