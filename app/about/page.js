import About from "../components/About";

export const metadata = {
  title: "About",
  description: "클라우드 엔지니어 홍병찬의 자기소개. 교육, 언어, 자격증 정보를 확인하세요.",
  openGraph: {
    title: "About - Byeongchan Hong",
    description: "클라우드 엔지니어 홍병찬의 자기소개. 교육, 언어, 자격증 정보를 확인하세요.",
    url: "https://chanthedev.cloud/about",
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

export default function AboutPage() {
  return <About />;
}