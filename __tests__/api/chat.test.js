/**
 * @jest-environment node
 */
import { POST } from '@/app/api/chat/route';

describe('POST /api/chat', () => {
  test('마지막 메시지 content가 빈 문자열이면 400을 반환한다', async () => {
    const req = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [{ role: 'user', content: '' }]
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error).toBe('Message content cannot be empty');
  });
});
