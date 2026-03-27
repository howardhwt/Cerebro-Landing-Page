'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { track } from '@vercel/analytics';

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-20 left-0 right-0 z-40 hidden md:block transition-[transform,opacity] duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-background/90 backdrop-blur-md border-b border-white/5 py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            <span className="text-white font-semibold">Salency</span> — Pilot access is open
          </p>
          <a
            href="#pilot"
            onClick={() => track('sticky_cta_click')}
            className="inline-flex items-center bg-accent-warm hover:brightness-110 text-background font-bold px-5 py-2 rounded-lg text-sm shadow-[0_0_15px_rgba(232,146,90,0.2)] transition-[color,background-color,filter,box-shadow] duration-200"
          >
            Get Early Access
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
