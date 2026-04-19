// app/api/chat/route.js

export async function POST(request) {
  try {
    const body = await request.json()

    // EC2 백엔드로 요청 전달 (프록시)
    const response = await fetch('https://api.chanthedev.cloud/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    // EC2 응답 { reply } → 프론트가 기대하는 { text } 로 변환
    return Response.json({ text: data.reply })
  } catch (e) {
    console.error('[ERROR] /api/chat proxy:', e.message)
    return Response.json(
      { text: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
