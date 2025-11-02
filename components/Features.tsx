'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: '초보자도 쉬운 직관적인 신호',
    description: '트레이딩뷰 차트에 \'롱(매수)\'과 \'익절(매도)\' 신호가\n명확하게 표시됩니다.\n복잡한 분석이 필요 없습니다.',
    icon: '�'
  },
  {
    title: '지능형 순환매 로직',
    description: '단순한 물타기가 아닙니다.\n이평선, 캔들 파동을 정밀 분석하여\n\'진짜 바닥\'이라고 판단되는 구간에서만\n안전하게 추가 매수합니다.',
    icon: '🧠'
  },
  {
    title: '철저한 리스크 관리',
    description: '첫 진입은 전체 시드의 4.75% 저비중으로 시작.\n평균 단가 2% 상승 시마다 분할 익절하여\n리스크를 최소화하고 수익을 극대화합니다.',
    icon: '�️'
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-lighter to-dark border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed whitespace-pre-line">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              알파봇: 감정 없는 AI 트레이딩 솔루션
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
