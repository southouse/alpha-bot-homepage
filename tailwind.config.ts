import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 메인 컬러 - #0f719d 기반, 더욱 영롱하고 생동감 있게
        primary: {
          DEFAULT: '#0f719d', // 메인 컬러
          dark: '#06293d', // 깊은 심해 블루
          light: '#1e9fd9', // 생동감 있는 밝은 블루
          bright: '#38d4ff', // 네온 블루 (강렬한 영롱함)
          glow: '#5ce1ff', // 발광 블루 (최고 밝기)
        },
        // 서브 컬러 (강조) - 더 화려한 그라데이션
        accent: {
          DEFAULT: '#0f719d', // 메인과 동일
          dark: '#084159', // 더 깊은 블루
          light: '#3db8e8', // 밝고 선명한 하늘색
          bright: '#60d5ff', // 크리스탈 블루
          shimmer: '#7fe5ff', // 반짝이는 효과
        },
        cyan: {
          DEFAULT: '#1e9fd9', // 선명한 사이언
          bright: '#38d4ff', // 밝은 네온 사이언
          glow: '#5ce1ff', // 빛나는 사이언
          electric: '#80edff', // 전기 블루
        },
        purple: {
          DEFAULT: '#1a6ba8', // 로얄 블루
          pink: '#5aa3d6', // 밝은 스카이 블루
          deep: '#0d3a5c', // 딥 미드나잇 블루
          neon: '#4db8ff', // 네온 퍼플-블루
        },
        mint: {
          DEFAULT: '#4dc9e8', // 생동감 있는 민트
          bright: '#6dd9f5', // 밝은 민트 블루
          shimmer: '#8eeaff', // 반짝이는 민트
        },
        blue: {
          DEFAULT: '#0f719d',
          gradient: {
            start: '#083a52', // 어두운 시작
            end: '#2ec4ff', // 밝은 끝
          }
        },
        dark: {
          DEFAULT: '#05111a', // 메인 컬러 계열의 매우 어두운 베이스
          lighter: '#0a1f2e',
          light: '#0f2d42',
        },
        gray: {
          DEFAULT: '#808080',
          dark: '#4A4A4A',
          light: '#B3B3B3',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
