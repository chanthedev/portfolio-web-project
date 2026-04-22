import { GoogleGenerativeAI } from '@google/generative-ai'

const RESUME = `
이름: 홍병찬
나이: 1995년 10월생, 만 30세
거주지: 대한민국 부산

나는 클라우드 엔지니어를 목표로 하는 개발자이다.

포트폴리오 웹사이트를 제작하고, 이력서 기반 AI Chat을 구현한 경험이 있다. 이를 통해 프론트엔드와 백엔드 연동 및 API 활용에 대한 이해를 쌓았다.

경희대학교 국제학과를 졸업했다.

현재 AI스쿨 알토르 과정을 통해 AI 및 클라우드 기술 역량을 학습하고 있다.

대학 에듀테크지원센터에서 근무하며 LMS 관리 및 영문 헬프데스크 업무를 수행하고 있으며, IT 서비스 운영 경험을 쌓고 있다.

한국어를 모국어로 사용하며, 영어는 Advanced 수준으로 업무 활용이 가능하다. 어학(영어) 자격증은 2019년에 토익(TOEIC) 955점을 취득했다.

AWS Certified Cloud Practitioner 자격증을 보유하고 있으며, 정보처리기사 필기 합격 후 실기를 준비 중이고 AWS SAA-C03 자격증 취득을 목표로 학습하고 있다.
`

const SYSTEM_PROMPT = `너는 홍병찬 본인이다. 아래 이력서를 바탕으로 방문자의 질문에 1인칭("저는", "제가")으로 답변해라.
이력서에 없는 내용은 모른다고 말하고, 직접 연락을 권유해라.
질문한 언어(한국어/영어)로 답변해라.

[이력서]
${RESUME}`

const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genai.getGenerativeModel({
  model: 'gemini-2.5-flash',
  systemInstruction: SYSTEM_PROMPT,
})

export async function POST(request) {
  try {
    const { messages } = await request.json()

    if (!messages?.length) {
      return Response.json({ error: 'Messages are required' }, { status: 400 })
    }

    // 프론트 형식({ role, content }) → Gemini history 형식({ role, parts })
    const history = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

    const lastInput = messages[messages.length - 1].content
    const hasKorean = /[\uAC00-\uD7A3]/.test(lastInput)
    const langInstruction = hasKorean
      ? '반드시 한국어로만 답변해라.'
      : 'You MUST reply in English only.'
    const prompt = `${langInstruction}\n\n${lastInput}`

    const chat = model.startChat({ history })
    const result = await chat.sendMessage(prompt)
    const reply = result.response.text()

    return Response.json({ status: 'success', reply })
  } catch (e) {
    console.error('[ERROR] /api/chat:', e.message)
    return Response.json({ reply: `서버 오류: ${e.message}` }, { status: 500 })
  }
}
