"use client";

import { Bot, MessageCircle, Send, User, X } from "lucide-react";
import { useState } from "react";
import {
  chatbotAnswers,
  fallbackAnswer,
  suggestedQuestions,
} from "@/data/chatbot";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "bot" | "user";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "bot",
    content:
      "Xin chào! Mình là MacBook Advisor. Mình có thể giúp bạn chọn cấu hình MacBook Pro phù hợp với nhu cầu học tập, lập trình, thiết kế hoặc làm việc chuyên nghiệp.",
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");

  function sendMessage(question?: string) {
    const userMessage = question ?? input.trim();

    if (!userMessage) {
      return;
    }

    const botReply = chatbotAnswers[userMessage] ?? fallbackAnswer;

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: userMessage,
      },
      {
        role: "bot",
        content: botReply,
      },
    ]);

    setInput("");
  }

  function resetChat() {
    setMessages(initialMessages);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={cn(
          "mb-4 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[2rem] border border-black/10 bg-white/95 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-neutral-950/95",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        )}
      >
        <div className="flex items-center justify-between border-b border-black/5 p-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <Bot className="h-5 w-5" />
            </span>

            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white">
                MacBook Advisor
              </h3>
              <p className="text-xs text-[#6e6e73] dark:text-neutral-400">
                Product consultation bot
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#6e6e73] transition hover:bg-black/5 hover:text-[#1d1d1f] dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-80 space-y-4 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "bot" ? (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Bot className="h-4 w-4" />
                </span>
              ) : null}

              <div
                className={cn(
                  "max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6",
                  message.role === "user"
                    ? "bg-[#0071e3] text-white"
                    : "bg-black/5 text-[#1d1d1f] dark:bg-white/10 dark:text-white"
                )}
              >
                {message.content}
              </div>

              {message.role === "user" ? (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white">
                  <User className="h-4 w-4" />
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="border-t border-black/5 p-4 dark:border-white/10">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestedQuestions.slice(0, 3).map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-left text-xs text-[#1d1d1f] transition hover:border-[#0071e3] hover:text-[#0071e3] dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about MacBook Pro..."
              className="h-11 min-w-0 flex-1 rounded-full border border-black/10 bg-white px-4 text-sm text-[#1d1d1f] outline-none transition placeholder:text-neutral-400 focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={resetChat}
            className="mt-3 text-xs font-medium text-[#6e6e73] transition hover:text-[#1d1d1f] dark:text-neutral-500 dark:hover:text-white"
          >
            Reset conversation
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open chatbot"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:scale-105 dark:bg-white dark:text-black"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}