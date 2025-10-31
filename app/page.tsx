
import { ArrowRight, BarChart, BrainCircuit, Cpu, DollarSign, LineChart, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 sm:py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            감정은 빼고, 수익만 더하세요.
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
            AI 자동매매 알파봇과 함께 기계적인 트레이딩을 경험하세요.
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            2020년부터 2025년까지의 백테스팅 결과, 1만 달러가 19만 달러가 되는 2220%의 수익률을 확인하세요.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
          >
            지금 바로 문의하기 <ArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">왜 우리는 투자에서 실패할까요?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            수익에 대한 탐욕, 손실에 대한 공포. 성공적인 투자의 가장 큰 적은 바로 우리 안의 ‘감정’입니다. <br />알파봇은 이 감정을 완전히 배제하고, 데이터에만 근거하여 거래합니다.
          </p>
          <div className="mt-12 flex justify-center">
            <BrainCircuit size={64} className="text-red-500" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">알파봇의 핵심 전략: 순환매</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <DollarSign className="text-blue-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">1. 소액 진입</h3>
              <p className="text-gray-400">전체 시드의 4.75%만으로 첫 매수를 시작하여 리스크를 최소화합니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <BarChart className="text-blue-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">2. 스마트 추가 매수</h3>
              <p className="text-gray-400">단순 하락이 아닌, 이평선과 캔들 파동을 분석해 ‘진짜 바닥’에서만 추가 매수하여 평단을 낮춥니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <LineChart className="text-blue-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">3. 분할 익절</h3>
              <p className="text-gray-400">평균 단가 위로 2% 상승 시마다 꾸준히 분할로 수익을 실현하여 안정성을 높입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">데이터로 증명된 압도적인 성과</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">백테스트 누적 수익률</h3>
              <p className="text-5xl font-bold text-green-400">2220%</p>
              <p className="text-gray-500 mt-2">(5년, $10,000 → $191,963)</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">백테스트 승률</h3>
              <p className="text-5xl font-bold text-green-400">86.1%</p>
              <p className="text-gray-500 mt-2">압도적인 거래 성공률</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">실계좌 수익률</h3>
              <p className="text-5xl font-bold text-green-400">26.27%</p>
              <p className="text-gray-500 mt-2">(72일)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">3단계로 시작하는 자동매매</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center flex-col text-center">
              <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">문의 및 상담</h3>
              <p className="text-gray-400">하단 버튼을 통해 문의를 남겨주시면 전문가가 상담을 도와드립니다.</p>
            </div>
            <div className="flex items-center flex-col text-center">
              <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">지표 및 연동 설정</h3>
              <p className="text-gray-400">트레이딩뷰 지표를 제공받고, 거래소 API와 연동하는 과정을 지원합니다.</p>
            </div>
            <div className="flex items-center flex-col text-center">
              <div className="bg-green-500/20 p-4 rounded-full mb-4">
                <div className="text-2xl font-bold text-green-400">3</div>
              </div>
              <h3 className="text-xl font-bold mb-2">자동매매 시작</h3>
              <p className="text-gray-400">설정이 완료되면 24시간 자동으로 거래가 시작됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            당신의 투자를 바꾸세요
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            더 이상 시장을 보며 스트레스 받지 마세요. 알파봇이 당신을 대신하여 24시간 일하게 하세요.
          </p>
          <a
            href="#" // 실제 문의 링크로 변경해야 합니다.
            className="mt-8 inline-block bg-green-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-green-600 transition-colors text-lg"
          >
            전문가와 상담하기 <ArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alpha Bot. All rights reserved.</p>
          <p className="mt-2 text-sm">
            본 서비스는 정보 제공을 목적으로 하며, 투자에 대한 최종 책임은 투자자 본인에게 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
