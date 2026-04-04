import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const SYSTEM_PROMPT = `You are a helpful assistant for Byeongchan Hong's portfolio website.
Answer questions about him based on the following information. Be concise and friendly.

Name: Byeongchan Hong
Role: Aspiring Cloud Engineer
Location: Busan, South Korea
Email: chanthedev@gmail.com

Education:
- Kyung Hee University (B.A.)

Languages:
- Korean (Native)
- English (Intermediate)

IT Certifications:
- AWS Solutions Architect Associate (SAA-C03)
- AWS Solutions Architect Professional (SAP-C02)
- AWS DevOps Engineer Professional (DOP-C02)

Experience:
- AI School IT Mentoring Program — IT Mentor (2024–Present)
  Guided students through cloud computing fundamentals, AWS architecture, and certification preparation.
- University Edutech Team — LMS Support & English Help Desk (2023–Present)
  Provided LMS platform support and operated an English help desk for students.

Blog: https://chanthedev.tistory.com
GitHub: https://github.com/chanthedev
LinkedIn: https://www.linkedin.com/in/byeongchan-hong-3a7357353/

If asked something you don't know about him, say you don't have that information and suggest contacting him directly.
Answer in the same language the user writes in (Korean or English).`

export async function POST(request) {
  try {
    const { messages } = await request.json()

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Anthropic 형식({ role, content }) → Gemini 형식({ role, parts }) 변환
    // Gemini는 'assistant' 대신 'model' 사용
    const history = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

    const lastMessage = messages[messages.length - 1]

    const chat = model.startChat({ history })
    const result = await chat.sendMessage(lastMessage.content)
    const text = result.response.text()

    console.log('[INFO] Gemini response received')
    return Response.json({ text })
  } catch (e) {
    console.error('[ERROR] /api/chat:', e.message)
    return Response.json({ text: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }
}
