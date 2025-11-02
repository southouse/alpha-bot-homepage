'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const mainFeatures = [
  {
    title: '백테스트 성과',
    subtitle: '2020년 4월 ~ 2025년 1월',
    description: '초기 시드: $10,000 (약 1,000만 원)\n최종 자산: $191,963 (약 2억 2천만 원)\n\n총수익률: 2220% | 승률: 86.1%',
    stats: [
      { label: '수익률', value: '2220%' },
      { label: '승률', value: '86.1%' },
      { label: '기간', value: '5년' }
    ],
    image: '📊'
  },
  {
    title: '실제 계좌 성과',
    subtitle: '검증된 실전 수익',
    description: '사례 A: 35일간 자동매매, 총 수익률 11.55%\n사례 B: 72일간 자동매매, 총 수익률 26.27%\n\n시장 상황(상승/하락/횡보)에 구애받지 않고\n매달 꾸준히 복리 수익을 쌓아갑니다.',
    stats: [
      { label: '사례 A', value: '11.55%' },
      { label: '사례 B', value: '26.27%' },
      { label: '안정성', value: '우상향' }
    ],
    image: '�'
  },
];

export default function MainFeatures() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              숫자로 증명된 알파봇의 성과
            </span>
          </h2>
          <p className="text-xl text-gray-300 mt-6">
            큰 하락 없이 꾸준히 우상향하는 수익 곡선
          </p>
        </motion.div>

        <div className="space-y-12">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group hover:border-accent/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-center justify-center text-9xl">
                    {feature.image}
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-lg text-accent mb-6">
                  {feature.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                  {feature.description}
                </p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-dark/50 border border-primary/20">
                        <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            이제, 감정 소모는 멈추고 AI에게 맡기세요.
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            24시간 365일, 당신이 자는 순간에도 알파봇은 기계적으로 수익을 만들어냅니다.<br />
            지금 바로 알파봇을 거래소에 연동하고, 감정 없는 투자를 시작하세요.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-xl hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 mb-4">
            지금 바로 자동매매 연동하기
          </button>
          <p className="text-sm text-gray-400 mt-4">
            버튼을 클릭하여 문의를 남겨주시면, 트레이딩뷰 지표 설정 및 거래소 연동 방법을 상세히 안내해 드립니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
