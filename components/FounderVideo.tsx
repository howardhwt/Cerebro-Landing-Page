'use client';

import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { track } from '@vercel/analytics';

const LOOM_URL = ''; // Replace with actual Loom embed URL when recorded

export function FounderVideo() {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hasVideo = LOOM_URL.length > 0;

  return (
    <div ref={containerRef} className="py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-bold tracking-widest text-accent-warm uppercase mb-3">From Our Founder</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            &ldquo;I built Salency because I lived this problem.&rdquo;
          </h3>
        </div>

        {hasVideo && isVisible ? (
          playing ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src={`${LOOM_URL}?autoplay=1`}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
              />
            </div>
          ) : (
            <button
              onClick={() => { setPlaying(true); track('video_play'); }}
              className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent-warm/20 border border-accent-warm/40 flex items-center justify-center group-hover:bg-accent-warm/30 transition-colors">
                  <Play className="w-7 h-7 text-accent-warm ml-1" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Watch the 60-second story
                </span>
              </div>
            </button>
          )
        ) : (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent-warm/10 border border-accent-warm/20 flex items-center justify-center">
                <Play className="w-7 h-7 text-accent-warm/50 ml-1" />
              </div>
              <p className="text-sm text-gray-500">Video coming soon</p>
              <p className="text-xs text-gray-600 max-w-md text-center px-4">
                Howard was a founding AE at Viggle (a16z-backed). He built Salency because every discovery call, he&apos;d capture maybe 40% of what was said.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
