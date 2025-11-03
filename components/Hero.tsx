'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="block text-white mb-2">감정은 지우고, 수익은 쌓는다</span>
              <span className="block bg-gradient-to-r from-accent-shimmer via-cyan-electric to-mint-shimmer bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(127,229,255,0.9)]">
                AI 자동매매 알파봇
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            전략을 찾는 #1 AI 에이전트, <span className="text-cyan-bright font-semibold">15,000명 이상의 트레이더가</span> 사용하는 최고의 트레이딩 지표로 구동됩니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
          >
            <button className="px-8 py-3.5 bg-gradient-to-r from-primary via-primary-bright to-cyan-bright text-white rounded-lg font-bold text-base shadow-lg shadow-cyan-bright/40 hover:shadow-2xl hover:shadow-cyan-electric/80 hover:from-cyan-bright hover:to-accent-shimmer transition-all transform hover:scale-105">
              30일 무료 체험 시작하기
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-16"
          >
            <div className="relative group p-6 rounded-xl bg-dark-lighter/40 backdrop-blur-sm border border-primary-bright/60 hover:border-cyan-electric/90 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/40 via-primary-glow/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-4xl font-black text-cyan-electric drop-shadow-[0_0_35px_rgba(56,212,255,1)] mb-2">2220%</div>
              <div className="relative text-gray-300 text-base">5년 백테스트<br />수익률</div>
              <div className="absolute inset-0 rounded-xl bg-cyan-bright/0 group-hover:bg-cyan-electric/30 blur-xl transition-all duration-300"></div>
            </div>
            <div className="relative group p-6 rounded-xl bg-dark-lighter/40 backdrop-blur-sm border border-primary-bright/60 hover:border-cyan-electric/90 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/40 via-primary-glow/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-4xl font-black text-cyan-electric drop-shadow-[0_0_35px_rgba(56,212,255,1)] mb-2">86.1%</div>
              <div className="relative text-gray-300 text-base">승률<br />정확도</div>
              <div className="absolute inset-0 rounded-xl bg-cyan-bright/0 group-hover:bg-cyan-electric/30 blur-xl transition-all duration-300"></div>
            </div>
            <div className="relative group p-6 rounded-xl bg-dark-lighter/40 backdrop-blur-sm border border-primary-bright/60 hover:border-cyan-electric/90 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/40 via-primary-glow/25 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-4xl font-black text-cyan-electric drop-shadow-[0_0_35px_rgba(56,212,255,1)] mb-2">24/7</div>
              <div className="relative text-gray-300 text-base">자동<br />매매</div>
              <div className="absolute inset-0 rounded-xl bg-cyan-bright/0 group-hover:bg-cyan-electric/30 blur-xl transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/80 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
