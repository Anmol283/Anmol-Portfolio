"use client";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import SectionBackground from './SectionBackground'
import { Send } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 text-white bg-black/90 relative z-10">
      <SectionBackground/>
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-fade-in text-center flex items-center justify-center gap-3">
          <Send className="h-8 w-8 text-pink-300" />
          Contact Me
        </h2>

        <p className="text-center text-lg text-white/60 mt-4 mb-10">
          Let’s discuss our next project!
        </p>

<form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border-b bg-transparent text-white placeholder:text-white/60 outline-none py-3 animate-type hover:bg-gray-800/50 hover:border-pink-400 transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="w-full border-b bg-transparent text-white placeholder:text-white/60 outline-none py-3 animate-type hover:bg-gray-800/50 hover:border-pink-400 transition-all duration-300"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            className="w-full border-b bg-transparent text-white placeholder:text-white/60 outline-none py-3 animate-type hover:bg-gray-800/50 hover:border-pink-400 transition-all duration-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            className="w-full border-b bg-transparent text-white placeholder:text-white/60 outline-none py-3 resize-none animate-type hover:bg-gray-800/50 hover:border-pink-400 transition-all duration-300"
            required
          />

          <div className="text-right">
            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-black rounded-full hover:opacity-80 transition"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>

          {statusMessage && (
            <p className="text-sm text-center mt-4 text-white/80">{statusMessage}</p>
          )}
        </form>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-type {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .animate-type::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: white;
          animation: typing 2s steps(20, end) infinite, blink-caret 0.75s step-end infinite;
        }

        .animate-type:hover::after {
          animation: none;
          background: transparent;
        }

        .animate-type:hover {
          background-color: rgba(128, 128, 128, 0.2); /* Subtle gray highlight */
          border-bottom-color: #f472b6; /* Pink-400 for highlight */
        }

        /* Ensure placeholder text doesn't animate directly */
        .animate-type::-webkit-input-placeholder {
          opacity: 1;
          animation: none;
        }
        .animate-type:-moz-placeholder {
          opacity: 1;
          animation: none;
        }
        .animate-type::-moz-placeholder {
          opacity: 1;
          animation: none;
        }
        .animate-type:-ms-input-placeholder {
          opacity: 1;
          animation: none;
        }
      `}</style>
    </section>
  );
}
