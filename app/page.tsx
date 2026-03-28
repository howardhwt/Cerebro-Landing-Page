
import { Header } from '@/components/Header';
import { PageClient } from '@/components/PageClient';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-warm/30 selection:text-white relative">
      <div className="bg-noise"></div>
      <div className="bg-mesh"></div>

      <Header />
      <PageClient />

      <footer className="border-t border-white/10 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 relative">
                <img src="/logo.svg" alt="Salency Logo" className="object-contain w-full h-full opacity-80" />
              </div>
              <span className="text-xl font-bold text-white">Salency</span>
            </div>
            <p className="text-sm text-gray-500">Toronto, Canada</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="mailto:founders@salency.ai" className="hover:text-white transition-colors py-3">founders@salency.ai</a>
            <a href="/privacy" className="hover:text-white transition-colors py-3">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors py-3">Terms</a>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 Salency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
