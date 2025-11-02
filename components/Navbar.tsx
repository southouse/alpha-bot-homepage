'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Alpha Bot
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#solution" className="text-gray-300 hover:text-white transition-colors">
              솔루션
            </Link>
            <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
              작동 방식
            </Link>
            <Link href="#proof" className="text-gray-300 hover:text-white transition-colors">
              성과 증명
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              문의하기
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              알파봇 연동 문의
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
