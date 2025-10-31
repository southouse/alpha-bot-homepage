import { ArrowRight, BarChart, BrainCircuit, DollarSign, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="text-center py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            감정은 빼고, 수익만 더하세요.
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-semibold text-muted-foreground">
            AI 자동매매 알파봇과 함께 기계적인 트레이딩을 경험하세요.
          </p>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            2020년부터 2025년까지의 백테스팅 결과, 1만 달러가 19만 달러가 되는 2220%의 수익률을 확인하세요.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#contact">
              지금 바로 문의하기 <ArrowRight className="inline-block ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 sm:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">왜 우리는 투자에서 실패할까요?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            수익에 대한 탐욕, 손실에 대한 공포. 성공적인 투자의 가장 큰 적은 바로 우리 안의 ‘감정’입니다. <br />알파봇은 이 감정을 완전히 배제하고, 데이터에만 근거하여 거래합니다.
          </p>
          <div className="mt-12 flex justify-center">
            <BrainCircuit size={64} className="text-destructive" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">알파봇의 핵심 전략: 순환매</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                    <DollarSign className="text-primary" size={40} />
                </div>
                <CardTitle>1. 소액 진입</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">전체 시드의 4.75%만으로 첫 매수를 시작하여 리스크를 최소화합니다.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                    <BarChart className="text-primary" size={40} />
                </div>
                <CardTitle>2. 스마트 추가 매수</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">단순 하락이 아닌, 이평선과 캔들 파동을 분석해 ‘진짜 바닥’에서만 추가 매수하여 평단을 낮춥니다.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                    <LineChart className="text-primary" size={40} />
                </div>
                <CardTitle>3. 분할 익절</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">평균 단가 위로 2% 상승 시마다 꾸준히 분할로 수익을 실현하여 안정성을 높입니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-16 sm:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">데이터로 증명된 압도적인 성과</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground">백테스트 누적 수익률</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">2220%</p>
                <p className="text-muted-foreground mt-2">(5년, $10,000 → $191,963)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground">백테스트 승률</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">86.1%</p>
                <p className="text-muted-foreground mt-2">압도적인 거래 성공률</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground">실계좌 수익률</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">26.27%</p>
                <p className="text-muted-foreground mt-2">(72일)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">3단계로 시작하는 자동매매</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">문의 및 상담</h3>
                <p className="text-muted-foreground">하단 버튼을 통해 문의를 남겨주시면 전문가가 상담을 도와드립니다.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">지표 및 연동 설정</h3>
                <p className="text-muted-foreground">트레이딩뷰 지표를 제공받고, 거래소 API와 연동하는 과정을 지원합니다.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">자동매매 시작</h3>
                <p className="text-muted-foreground">설정이 완료되면 24시간 자동으로 거래가 시작됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 sm:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            당신의 투자를 바꾸세요
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            더 이상 시장을 보며 스트레스 받지 마세요. 알파봇이 당신을 대신하여 24시간 일하게 하세요.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#"> {/* 실제 문의 링크로 변경해야 합니다. */}
              전문가와 상담하기 <ArrowRight className="inline-block ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alpha Bot. All rights reserved.</p>
          <p className="mt-2 text-sm">
            본 서비스는 정보 제공을 목적으로 하며, 투자에 대한 최종 책임은 투자자 본인에게 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}