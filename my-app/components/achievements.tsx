"use client";
import { motion } from "framer-motion";
import SectionBackground from './SectionBackground'
import { Award } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: "🎓",
      title: "Dean's List Recognition",
      description:
       "Earned a spot on the Dean's List and received the prestigious Star Programmer title for outstanding performance and contributions.",
      image: "/achievements/DeansList.png",
    },
    {
      icon: "🧩",
      title: "Consistent Coding Journey",
      description:
       "Proved consistency with 50 days of daily LeetCode in 2024 & 2025. Gearing up for the 100-day streak!",
      image: [
        "/achievements/leetcode.png",
        "/achievements/leetcode_2025.png"
      ],
    },
    {
      icon: "🤖",
      title: "IoT-Based Health Tracker",
      description:
        "Collaborated on a real-time IoT project focused on health monitoring and GPS tracking.",
      image: "/achievements/IOT.png",
    },
    {
      icon: "🏅",
      title: "Other Recognitions",
      description:
        "Scored 100/100 in Data Structures, received Chancellor’s Carva recognition, participated in my first hackathon, and completed a hands-on iOS Specialization Bootcamp under Apple Innovation.",
      image: "/achievements/misc.png",
    },
  ];

  return (
    <section id="achievements" className="relative bg-black/90 text-white py-20 px-4 overflow-hidden">
  <SectionBackground />
  <div className="relative z-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center mb-6"
      >
        <Award className="h-8 w-8 text-pink-300 mr-3" />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
           Achievements
         </h2>
      </motion.div>

        <p className="text-center text-gray-400 text-lg mt-4 mb-16">
              Highlights of dedication and growth.
        </p>


        <div className="space-y-28">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Left: Text */}
              <motion.div
                className="space-y-4 md:pr-8 text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-3xl font-bold flex items-center gap-2">
                  <span>{ach.icon}</span> {ach.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>

              {/* Right: Images (Single or Multiple) */}
              <motion.div
                className="flex gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {Array.isArray(ach.image) ? (
                  ach.image.map((img, i) => (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      key={i}
                      src={img}
                      alt={`${ach.title} - ${i + 1}`}
                      className="w-full md:w-[48%] h-auto rounded-2xl object-cover shadow-lg transition-transform duration-300"
                    />
                  ))
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={ach.image}
                    alt={ach.title}
                    className="w-full md:w-[90%] h-auto rounded-2xl object-cover shadow-lg transition-transform duration-300"
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
