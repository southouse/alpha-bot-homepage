'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Alpha Bot
            </h3>
            <p className="text-gray-400 text-sm">
              감정은 지우고,<br />
              수익은 쌓는다
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">솔루션</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#solution" className="hover:text-white transition-colors">AI 트레이딩</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">작동 방식</Link></li>
              <li><Link href="#proof" className="hover:text-white transition-colors">성과 증명</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">연동 문의</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">성과</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>백테스트 수익률: 2220%</li>
              <li>승률: 86.1%</li>
              <li>24시간 자동매매</li>
              <li>감정 없는 트레이딩</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">문의</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>트레이딩뷰 지표 설정</li>
              <li>거래소 연동 안내</li>
              <li><Link href="#" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">1:1 문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">Alpha Bot - AI 자동매매 솔루션</p>
          <p className="mb-4">투자의 감정을 제거하고, 기계적인 수익을 만드는 AI 트레이딩 시스템</p>
          <p className="text-xs">© 2025 Alpha Bot. ALL RIGHT RESERVED.</p>
          <p className="text-xs mt-2">투자에는 원금 손실 위험이 있습니다. 과거 수익률이 미래 수익을 보장하지 않습니다.</p>
        </div>
      </div>
    </footer>
  );
}
