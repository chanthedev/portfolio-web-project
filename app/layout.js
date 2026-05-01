import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: {
    default: "Byeongchan Hong - Cloud Engineer Portfolio",
    template: "%s | Portfolio"
  },
  description: "클라우드 엔지니어 홍병찬의 포트폴리오. AWS 자격증 보유, AI 기반 포트폴리오 챗 구현.",
  keywords: ["포트폴리오", "개발자", "클라우드", "AWS", "풀스택", "AI", "ChatGPT"],
  authors: [{ name: "Byeongchan Hong" }],
  creator: "Byeongchan Hong",
  openGraph: {
    title: "Byeongchan Hong - Cloud Engineer Portfolio",
    description: "클라우드 엔지니어 홍병찬의 포트폴리오. AWS 자격증, AI 챗 기능 구현.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Byeongchan Hong Portfolio",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t!=='light';document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className}
        antialiased leading-8 overflow-x-hidden bg-white text-gray-900
        dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}