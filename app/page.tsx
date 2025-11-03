import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Introduction from "@/components/Introduction";
import MainFeatures from "@/components/MainFeatures";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      {/* 전체 페이지 공통 배경 블러 효과 - 영롱하고 생동감 있는 그라데이션 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[1000px] h-[1000px] bg-primary-dark/45 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] right-[15%] w-[900px] h-[900px] bg-cyan-electric/35 rounded-full blur-[130px]"></div>
        <div className="absolute top-[70%] left-[20%] w-[800px] h-[800px] bg-primary-glow/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[950px] h-[950px] bg-accent-shimmer/28 rounded-full blur-[120px]"></div>
        <div className="absolute top-[25%] left-[50%] w-[850px] h-[850px] bg-cyan-bright/32 rounded-full blur-[160px]"></div>
        <div className="absolute top-[60%] right-[40%] w-[700px] h-[700px] bg-mint-shimmer/25 rounded-full blur-[135px]"></div>
        <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] bg-purple-neon/20 rounded-full blur-[110px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Introduction />
        <MainFeatures />
        <Footer />
      </div>
    </main>
  );
}
