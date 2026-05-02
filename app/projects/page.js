import Work from "../components/Work";

export const metadata = {
  title: "Projects",
  description: "클라우드 엔지니어 홍병찬의 프로젝트 포트폴리오. 최신 작업물을 확인하세요.",
  openGraph: {
    title: "Projects - Byeongchan Hong",
    description: "클라우드 엔지니어 홍병찬의 프로젝트 포트폴리오. 최신 작업물을 확인하세요.",
    url: "https://chanthedev.cloud/projects",
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

export default function ProjectsPage() {
  return <Work />;
}