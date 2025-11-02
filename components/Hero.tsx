'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-dark/20 to-accent-dark/20"></div>
      
      {/* Animated circles */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block mb-4">감정은 지우고, 수익은 쌓는다</span>
            <span className="block bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">
              1000만원을 2억 2천으로 만든
            </span>
            <span className="block bg-gradient-to-r from-accent via-primary to-primary-light bg-clip-text text-transparent mt-2">
              AI 자동매매 '알파봇'
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            투자의 가장 큰 적은 <span className="text-white font-semibold">'인간의 심리'</span>입니다.<br />
            공포와 탐욕을 100% 배제한 기계적인 매매로<br />
            꾸준한 복리 수익을 경험하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <div className="text-4xl font-bold text-accent mb-2">2220%</div>
              <div className="text-gray-300">2020-2025년 백테스트<br />수익률</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <div className="text-4xl font-bold text-accent mb-2">86.1%</div>
              <div className="text-gray-300">압도적인<br />승률</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-300">감정 없는<br />자동매매</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105">
              알파봇 연동 문의하기
            </button>
            <button className="px-8 py-4 border-2 border-primary/50 rounded-full text-white font-bold text-lg hover:bg-primary/10 transition-all">
              자세히 알아보기
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
