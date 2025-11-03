'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-primary-bright/60"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-bright transition-colors drop-shadow-[0_0_10px_rgba(56,212,255,0.3)]">
            AlphaBot
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#features" className="text-gray-400 hover:text-cyan-electric transition-colors text-sm font-medium drop-shadow-[0_0_8px_rgba(128,237,255,0.5)]">
              기능
            </Link>
            <Link href="#performance" className="text-gray-400 hover:text-cyan-electric transition-colors text-sm font-medium drop-shadow-[0_0_8px_rgba(128,237,255,0.5)]">
              성과
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-cyan-electric transition-colors text-sm font-medium drop-shadow-[0_0_8px_rgba(128,237,255,0.5)]">
              가격
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-cyan-electric transition-colors text-sm font-medium drop-shadow-[0_0_8px_rgba(128,237,255,0.5)]">
              소개
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-primary via-primary-bright to-cyan-bright text-white rounded-md font-bold text-sm shadow-md shadow-cyan-bright/40 hover:shadow-lg hover:shadow-cyan-electric/70 hover:from-cyan-bright hover:to-accent-shimmer transition-all"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
