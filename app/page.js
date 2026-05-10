"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function HarshMishraPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Bat-Signal Cursor Effect
  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skills = [
    { name: 'Python', level: '90%' },
    { name: 'C++', level: '85%' },
    { name: 'AI/LLMs', level: '75%' },
    { name: 'Web Dev', level: '80%' },
    { name: 'System Design', level: '70%' },
    { name: 'Leadership', level: '95%' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans relative selection:bg-blue-500/30">
      {/* Bat-Signal Mouse Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
        }}
      />

      {/* Background Audio */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      <button 
        onClick={toggleAudio}
        className="fixed bottom-10 right-10 z-50 p-4 rounded-full bg-zinc-900/80 border border-blue-500/50 backdrop-blur-xl hover:scale-110 transition-all active:scale-95"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-[0.4em] uppercase text-blue-500"
          >
            MISHRA
          </motion.h1>
          <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-zinc-400">
            {['about', 'vision', 'skills', 'contact'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-blue-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <p className="text-blue-500 uppercase tracking-[0.5em] text-xs mb-6 font-bold">
              Technical Founder • Aspirant • Elite
            </p>
            <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 uppercase tracking-tighter">
              HARSH<br /><span className="text-zinc-800 outline-text">MISHRA</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 italic">
              "Building a future where code, intelligence, luxury, and discipline merge into one identity."
            </p>
            <div className="flex gap-6">
              <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-bold uppercase tracking-widest text-sm">
                The Network
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative flex justify-center"
          >
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="relative border border-white/10 bg-zinc-900/50 backdrop-blur-3xl rounded-[2rem] p-4 group">
              <div className="w-[320px] h-[450px] md:w-[400px] md:h-[550px] bg-zinc-800 rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center justify-center h-full text-zinc-600 uppercase tracking-widest font-black text-4xl p-10 text-center">
                   Photo Here
                 </div>
              </div>
              <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section (Animated Bars) */}
      <section id="skills" className="py-40 px-6 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-20 text-center">Evolution <span className="text-blue-500">Mode</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between text-sm uppercase tracking-widest font-bold">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-800 overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full bg-blue-600"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Placeholder */}
      <section className="py-40 text-center border-t border-white/5">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="fixed left-0 w-full text-[15vw] font-black pointer-events-none uppercase"
        >
          Built Not Given
        </motion.h2>
        <div className="relative z-10">
            <h2 className="text-5xl font-black uppercase mb-4">The Vision</h2>
            <p className="text-zinc-500 tracking-widest uppercase">2026 and Beyond</p>
        </div>
      </section>

      <footer className="py-10 text-center text-zinc-700 text-xs tracking-widest uppercase">
        © 2026 Harsh Mishra • Built for the Elite
      </footer>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #27272a;
          color: transparent;
        }
      `}</style>
    </div>
  );
}


"Initial portfolio build"
