import HomeClient from "./components/HomeClient";

export const metadata = {
  title: "Home",
  description: "클라우드 엔지니어 홍병찬의 포트폴리오입니다. AWS 자격증, AI 챗 기능, 프로젝트를 소개합니다.",
  openGraph: {
    title: "Byeongchan Hong - Cloud Engineer Portfolio",
    description: "클라우드 엔지니어 홍병찬의 포트폴리오입니다. AWS 자격증, AI 챗 기능, 프로젝트를 소개합니다.",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Byeongchan Hong",
      }
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
