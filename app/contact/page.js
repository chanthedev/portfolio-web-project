import Contact from "../components/Contact";

export const metadata = {
  title: "Contact",
  description: "클라우드 엔지니어 홍병찬에게 연락하세요. 이메일, 소셜 미디어 정보를 확인하세요.",
  openGraph: {
    title: "Contact - Byeongchan Hong",
    description: "클라우드 엔지니어 홍병찬에게 연락하세요. 이메일, 소셜 미디어 정보를 확인하세요.",
    url: "/contact",
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

export default function ContactPage() {
  return <Contact />;
}