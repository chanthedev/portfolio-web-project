import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 일반 검색엔진 (Google, Naver 등)
      {
        userAgent: '*',
        allow: '/',
      },
      // AI 크롤러들 명시적 허용
      {
        userAgent: 'GPTBot',          // ChatGPT (OpenAI)
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',       // Claude (Anthropic)
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',   // Perplexity
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google AI (Gemini, AI Overviews)
        allow: '/',
      },
    ],
    sitemap: 'https://chanthedev.cloud/sitemap.xml',
  }
}
