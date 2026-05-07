/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Music, Check, ArrowRight, ShieldCheck, Volume2, Disc, Play } from 'lucide-react';

// Floating Particles Component
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};

// Credit Item Component
const CreditItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
      {label}
    </span>
    <span className="text-sm font-medium text-white/90">
      {value}
    </span>
  </div>
);

export default function App() {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate preparation time
    setTimeout(() => {
      const downloadUrl = 'https://drive.google.com/uc?export=download&id=1tRS_x_5B7qfc5eV5rCvxuDpsVWXibXdt';
      
      // Create hidden link to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setDownloadComplete(true);
      
      // Reset complete status after a while
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2500);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow -top-48 -left-48" />
      <div className="ambient-glow -bottom-48 -right-48" />
      
      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold tracking-[0.4em] text-orange-500 uppercase">SMC Indie</span>
          <span className="text-[10px] text-zinc-500 tracking-widest mt-1 uppercase italic font-display">Premium Portal</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass px-6 py-3 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-300">
            24-bit WAV / Studio Master Quality
          </span>
        </motion.div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden artwork-shadow border border-zinc-800/50 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1lvpxzj_2YM2I-JFQoWy7iITF82f_ZjLE" 
              alt="Mannar Khaja Artwork"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] tracking-[0.3em] text-zinc-400 uppercase font-mono">Single Release 2026</p>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-6 h-6 fill-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title & Info */}
        <div className="lg:col-span-7 lg:pl-12 space-y-12">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-thin tracking-tighter text-white"
            >
              Mannar Khaja
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl font-light text-zinc-400 tracking-wide"
            >
              From SMC Indie • Official Studio WAV Download
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-10 max-w-xl flex flex-col gap-8"
          >
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed italic font-display">
              "Mannar Khaja is a cinematic independent music release crafted with immersive sound design, emotional depth, and modern production aesthetics by SMC Indie."
            </p>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="glow-btn w-full py-5 rounded-xl text-xs font-bold tracking-[0.3em] text-white uppercase flex items-center justify-center gap-3 disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {downloading ? (
                  <motion.div 
                    key="preparing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Disc className="w-4 h-4" />
                    </motion.div>
                    <span>PREPARING...</span>
                  </motion.div>
                ) : downloadComplete ? (
                  <motion.div 
                    key="started"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>DOWNLOAD STARTED</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="initial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span>DOWNLOAD WAV</span>
                    <Download className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full pt-10 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <CreditItem label="Lyrics" value="Paat Masthan" />
          <CreditItem label="Singer" value="Salman Kizhisseri" />
          <CreditItem label="Music Production" value="Sufiyan Kizhisseri" />
          <CreditItem label="Mix & Master" value="Azim Roshan" />
          <CreditItem label="Artwork" value="Muhammed Sahl" />
        </div>
        <div className="flex flex-col justify-end items-center md:items-end text-center md:text-right">
          <p className="text-[10px] text-zinc-600 tracking-[0.3em] font-medium">
            © 2026 SMC INDIE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
