'use client'

import { useState, useRef, useEffect } from 'react'

const ChatWidget = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi, Ask anything about me!' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const send = async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const userMessage = { role: 'user', content: text }
    const apiMessages = [...messages.slice(1), userMessage] // skip the initial greeting

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      {isOpen && (
        <div className={`w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border
          ${isDarkMode
            ? 'bg-darkTheme border-white/20 text-white'
            : 'bg-white border-gray-200 text-gray-800'}`}
          style={{ height: '420px' }}>

          {/* Header */}
          <div className={`px-4 py-3 flex items-center justify-between border-b
            ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <div>
              <p className='font-semibold text-sm font-Ovo tracking-widest uppercase'>AI Chat</p>
            </div>
            <button onClick={() => setIsOpen(false)}
              className={`w-7 h-7 flex items-center justify-center rounded-full
                ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
              <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                <path d='M18 6L6 18M6 6l12 12' stroke='currentColor' strokeWidth='2'
                  strokeLinecap='round' fill='none'/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3'>
            <div className={`text-xs px-3 py-2 rounded-xl text-center leading-relaxed
              ${isDarkMode ? 'bg-white/5 text-white/50' : 'bg-gray-50 text-gray-500'}`}>
              이 채팅 기능은 Gemini API를 활용하여, 제 이력서를 기반으로 질문에 답변하도록 구현했습니다.
            </div>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-sm'
                    : isDarkMode
                      ? 'bg-white/10 rounded-bl-sm'
                      : 'bg-gray-100 rounded-bl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className={`px-4 py-2 rounded-2xl rounded-bl-sm text-sm
                  ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <span className='flex gap-1 items-center'>
                    <span className='w-1.5 h-1.5 rounded-full bg-current animate-bounce' style={{ animationDelay: '0ms' }}/>
                    <span className='w-1.5 h-1.5 rounded-full bg-current animate-bounce' style={{ animationDelay: '150ms' }}/>
                    <span className='w-1.5 h-1.5 rounded-full bg-current animate-bounce' style={{ animationDelay: '300ms' }}/>
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className={`px-3 py-3 border-t flex gap-2 items-end
            ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder='Type a message...'
              rows={1}
              className={`flex-1 resize-none rounded-xl px-3 py-2 text-sm outline-none
                max-h-24 overflow-y-auto
                ${isDarkMode
                  ? 'bg-white/10 placeholder-white/30 text-white'
                  : 'bg-gray-100 placeholder-gray-400 text-gray-800'}`}
            />
            <button onClick={send} disabled={isLoading || !input.trim()}
              className='w-8 h-8 flex items-center justify-center rounded-xl
              bg-black text-white dark:bg-white dark:text-black
              disabled:opacity-30 shrink-0 mb-0.5'>
              <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='w-14 h-14 rounded-full bg-black text-white dark:bg-white dark:text-black
        flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200'>
        {isOpen
          ? <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
              <path d='M18 6L6 18M6 6l12 12' stroke='currentColor' strokeWidth='2.5'
                strokeLinecap='round' fill='none'/>
            </svg>
          : <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24'>
              <path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'/>
            </svg>
        }
      </button>
    </div>
  )
}

export default ChatWidget
