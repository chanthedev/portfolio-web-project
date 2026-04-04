function addMessage(text, sender) {
  const div = document.createElement("div");
  div.textContent = (sender === "user" ? "나: " : "봇: ") + text;
  document.getElementById("chat").appendChild(div);
}

async function sendMessage() {
  const input = document.getElementById("input");
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  const res = await fetch("http://127.0.0.1:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  if (!res.ok || data.error) {
    addMessage("오류: " + (data.error || "서버 응답 실패"), "bot");
    return;
  }
  addMessage(data.reply, "bot");
}
