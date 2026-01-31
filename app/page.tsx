
import React from 'react';
import { Ear, Lightbulb, Bell, CheckCircle2, ArrowRight, Menu } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { ProblemCard } from '@/components/ProblemCard';
import { PillarCard } from '@/components/PillarCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30 selection:text-white relative">
      {/* Background Effects */}
      <div className="bg-noise"></div>
      <div className="bg-mesh"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <img src="/logo.png" alt="Cerebro Logo" className="object-contain w-full h-full" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white font-heading">Cerebro</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#pilot" className="hover:text-white transition-colors">Pilot Access</a>
          </nav>

          <a href="#pilot" className="hidden md:block bg-accent/90 hover:bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-accent/20">
            Get Early Access
          </a>

          <button className="md:hidden text-white p-2">
            <Menu />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-accent/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              New: Pilot Access Open
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
              Never Forget What<br className="hidden md:block" /> Your Customers Need
            </h1>

            <p className="text-xl md:text-2xl text-accent mb-8 font-medium max-w-2xl mx-auto">
              Turn every customer need and timeline into a perfectly timed follow-up—so reps never miss their moment to sell.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Your sales reps capture customer problems in calls but forget them by the time they need to re-engage.
              We listen to every call, remember every problem, and alert your team at the exact moment it's time to sell.
            </p>

            <p className="text-base text-gray-300 max-w-3xl mx-auto mb-6 font-medium">
              Cerebro does what your CRM can't: it turns loose call notes into dated follow-up triggers tied to real customer timelines.
            </p>

            <p className="text-sm text-gray-500 mb-12">
              Built for B2B teams with 5–50 reps and long, multi-touch sales cycles.
            </p>

            <a
              href="#pilot"
              className="inline-flex items-center bg-accent hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Hero Visual - Glassmorphism Mockup */}
          <div className="mt-24 relative max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-accent/20 blur-[60px] rounded-full opacity-50"></div>

            {/* Main Window */}
            <div className="glass-panel rounded-xl overflow-hidden relative z-10 aspect-video md:aspect-[16/9] flex flex-col">
              {/* Window Header */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 h-6 w-64 bg-white/5 rounded-md"></div>
              </div>

              {/* Window Content */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Call List */}
                <div className="w-16 md:w-64 border-r border-white/5 bg-black/10 flex flex-col hidden md:flex">
                  <div className="p-4 border-b border-white/5">
                    <div className="h-8 w-full bg-white/5 rounded flex items-center px-3 text-xs text-gray-500 gap-2">
                      <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                      <span>Search calls...</span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto py-2">
                    {/* Active Call Item */}
                    <div className="px-4 py-3 bg-white/5 border-l-2 border-accent flex flex-col gap-1">
                      <div className="text-xs font-bold text-white">Acme Corp Discovery</div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-accent font-medium">● Live Recording</span>
                        <span className="text-[10px] text-gray-400">00:14:23</span>
                      </div>
                    </div>
                    {/* Inactive Items */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="px-4 py-3 border-l-2 border-transparent hover:bg-white/5 flex flex-col gap-1 opacity-50">
                        <div className="h-3 w-2/3 bg-white/10 rounded"></div>
                        <div className="h-2 w-1/3 bg-white/10 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-white/5">
                    <div className="h-12 w-full bg-accent/10 rounded border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                      3 New Alerts
                    </div>
                  </div>
                </div>

                {/* Main View */}
                <div className="flex-1 p-6 md:p-8 bg-black/20 relative">
                  {/* Mock Transcript / Feed */}
                  <div className="space-y-6">
                    {/* Call Segment */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 max-w-2xl relative overflow-hidden group">
                      {/* Live Capture Indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1 border border-white/10 z-20">
                        <div className="flex gap-0.5 h-3 items-center">
                          <div className="w-0.5 h-full bg-red-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
                          <div className="w-0.5 h-2/3 bg-red-500 animate-[pulse_1s_ease-in-out_infinite_0.1s]"></div>
                          <div className="w-0.5 h-full bg-red-500 animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
                          <div className="w-0.5 h-1/2 bg-red-500 animate-[pulse_1s_ease-in-out_infinite_0.3s]"></div>
                        </div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Live Capture</span>
                      </div>

                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                          <Ear size={16} />
                        </div>
                        <span className="text-sm font-semibold text-gray-300">Acme Corp • Discovery Call</span>
                      </div>
                      <p className="text-gray-400 text-sm pl-11 relative">
                        "...honestly right now we are struggling with <span className="text-white bg-accent/20 px-1 rounded border border-accent/30 shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all">SOC2 compliance</span>. We need to solve that before Q3."
                        {/* Cursor simulating capture */}
                        <span className="absolute ml-1 w-0.5 h-4 bg-accent animate-pulse inline-block align-middle"></span>
                      </p>
                    </div>

                    {/* Arrow Connection */}
                    <div className="pl-8 flex justify-start">
                      <div className="h-8 w-0.5 bg-gradient-to-b from-white/10 to-accent/50"></div>
                    </div>

                    {/* Extracted Insight Loop */}
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20 max-w-md ml-8 shadow-[0_0_30px_rgba(6,182,212,0.1)] transform hover:scale-[1.02] transition-transform cursor-default">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <Lightbulb size={16} />
                        </div>
                        <span className="text-sm font-semibold text-accent">Insight Captured</span>
                      </div>
                      <div className="pl-11 text-sm">
                        <div className="text-gray-300">Need: <span className="text-white">SOC2 Compliance</span></div>
                        <div className="text-gray-300">Timeline: <span className="text-white">Before Q3</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Notification */}
                  <div className="absolute bottom-8 right-8 bg-[#1F2937] border border-white/10 p-4 rounded-lg shadow-2xl max-w-xs animate-in slide-in-from-right duration-1000 delay-500">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                        <Bell size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-1">ALERT • JULY 1st (Q3 Start)</div>
                        <p className="text-sm text-white font-medium">Re-engage Acme Inc regarding SOC2 Compliance tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The Silent Revenue Leak</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Your team is leaving money on the table.</h3>
              <p className="text-xl text-gray-400 mb-4">
                70% of sales leaders lose <span className="text-white font-semibold">$50K+ annually</span> to forgotten customer needs.
              </p>
              <p className="text-lg text-gray-500">
                This isn't about bad messaging. It's about lost memory and sloppy timing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProblemCard
                heading="Reps forget needs"
                description="A customer mentions they need compliance automation 'next quarter.' The rep jots it down. But when next quarter arrives, nobody remembers the conversation. By the time the customer is actually ready, your team has moved on—or sends a generic, irrelevant email."
                quote="Most of my day ends up spent following up with people because communication has gotten so bad...Why leave people in the dark?"
                author="Sales Rep, r/sales"
              />
              <ProblemCard
                heading="Poorly timed follow-ups"
                description="Reps send follow-ups at random times with no context. Customers ignore them because they aren't relevant in that moment. Deals die. You're either too early to be relevant or too late to be considered."
                quote="If they say 'call me in 3 months' we say 'what's going to change?' But we forget to ask, and we forget to call back."
                author="VP Sales"
              />
              <ProblemCard
                heading="Missed upsell chances"
                description="In project-based services, customers mention needs during Phase 1 that aren't in scope. When Phase 2 planning arrives, nobody remembers what they said. Expansion revenue dies quietly because no one remembers what the customer signaled months ago."
                quote="We finish Phase 1, move on. Customer has 3 problems they mentioned but weren't in scope. Nobody follows up."
                author="Impl. Manager"
              />
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The 3-Pillar Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">We built a system that solves this.</h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Cerebro isn't another call recorder or note-taker—it's a contextual re-engagement engine that turns conversations into dated, product-specific follow-up plays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={Ear}
              heading="Listen to Every Call"
              description="Our AI listens to your customer calls and identifies every problem, objection, and need mentioned. We extract the pain, the timeline, and the urgency. This creates a persistent memory of every need and timeline across your entire book of business."
            />
            <PillarCard
              icon={Lightbulb}
              heading="Match Needs to Product (Our Moat)"
              description="We ingest your product docs, enablement materials, past won deals, and call transcripts to learn which features solve which pains. When a prospect says 'we need SOC2 before Q3,' Cerebro doesn't just tag 'security'; it suggests your SOC2 automation module and proven talk tracks from past wins. Where call recorders stop at what was said, Cerebro learns what actually solved it and brings that mapping back to reps when it matters."
            />
            <PillarCard
              icon={Bell}
              heading="Alert at Right Time"
              description="If a customer said 'Q3 budget,' Cerebro will ping your rep on July 1 with the exact pain point and suggested angle—no one has to remember anything."
            />
          </div>

          {/* Built to Fit Your Stack */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Package size={18} className="text-accent" />
                Built to Fit Your Stack
              </h4>
              <p className="text-gray-400 mb-6">
                Cerebro connects to the tools you already use, so you don't have to overhaul your workflow on day one. It starts simple—just your call recordings and CRM—and layers in more context over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Works with your existing call recorder (Zoom, Gong, Dialer, etc.)—no change to how reps run meetings.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Reads from, but doesn't rewrite, your CRM; we create tasks and alerts instead of flooding you with new objects.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Start pilots with calls + CRM only, then add product docs and calendars later if and when it makes sense.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 bg-gradient-to-br from-accent/5 to-transparent border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Result</h2>
              <div className="space-y-6">
                {[
                  { title: "Close More Deals", desc: "You close more deals because every follow-up anchors on the exact pains customers mentioned — at the moment they're finally ready to buy." },
                  { title: "Shorter Sales Cycles", desc: "Shorten cycles by re-engaging precisely when customers' budget and priority go live, instead of blasting random follow-ups." },
                  { title: "Faster Rep Ramp", desc: "New reps ramp faster by seeing exactly which pains, timelines, and product combos led to closed deals — so they can copy winning patterns instead of guessing from generic summaries. Because Cerebro shows real 'pain → product → outcome' chains, training is built on reality, not role-play scripts." },
                  { title: "Systematic Upsells", desc: "Turn every 'not in scope yet' comment into a scheduled expansion touch, triggered automatically when timing hits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sales Enablement Callout */}
              <div className="mt-8 bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h4 className="text-sm font-bold text-accent uppercase tracking-wide mb-2">For Sales Enablement</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cerebro gives new reps a library of real examples: which customer pains appeared on calls, what was pitched, and what actually closed — so training is built on reality, not scripts.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full mix-blend-screen"></div>
              <div className="bg-card border border-white/10 rounded-2xl p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                  <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Deal Closed</div>
                    <div className="text-sm text-gray-400">$125,000 ARR • Enterprise Plan</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded w-1/2"></div>
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 italic">"Cerebro alerted us exactly when they got their budget approved. We would have missed it otherwise."</p>
                  <div className="mt-2 text-sm font-semibold text-white">- VP of Sales, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILOT SECTION */}
        <section id="pilot" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Join the Pilot</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're currently running free pilots with 2-3 sales teams. We handle everything. You get the system, we get the feedback.
              </p>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Pilot Includes:</h4>
                <ul className="space-y-3">
                  {['60 days of free access', 'We analyze your calls weekly', 'Weekly coaching alerts sent to reps', 'Weekly feedback calls with our team', 'No obligation to continue'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400">
                  If you continue after the pilot, Cerebro is priced as a simple per-rep SaaS seat, with volume discounts for larger teams — just like your other sales tools.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4">Ideal Pilot Customer:</h4>
                <ul className="space-y-3">
                  {['5-50 sales reps', '$5M-$100M ARR', 'B2B SaaS or project-based services', 'Need re-engagement or expansion'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24">
                <EmailForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 relative">
                <img src="/logo.png" alt="Cerebro Logo" className="object-contain w-full h-full opacity-80" />
              </div>
              <span className="text-xl font-bold text-white">Cerebro</span>
            </div>
            <p className="text-sm text-gray-500">We help sales teams remember what customers need.</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 Cerebro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
