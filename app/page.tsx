
import React from 'react';
import { Ear, Lightbulb, Bell, CheckCircle2, ArrowRight, Menu, Clock, Calendar, Package, Radar, Target } from 'lucide-react';
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

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
              Your sales reps capture customer problems in calls but forget them by the time they need to re-engage.
              We listen to every call, remember every problem, and alert your team at the exact moment it's time to sell.
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

          {/* Hero Visual - Product Interface */}
          <div className="mt-16 md:mt-20 relative">
            <div className="relative max-w-7xl mx-auto">
              {/* Dramatic Background Glows */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full"></div>
              <div className="absolute top-1/2 -left-20 w-[300px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full"></div>
              <div className="absolute top-1/2 -right-20 w-[300px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

              {/* Main Product Interface */}
              <div className="relative z-10 mx-4">
                {/* Browser Chrome */}
                <div className="bg-[#0a0a0f] rounded-t-2xl border border-white/10 border-b-0 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 rounded-lg px-4 py-1.5 flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      app.cerebro.ai/dashboard
                    </div>
                  </div>
                  <div className="w-20"></div>
                </div>

                {/* App Interface */}
                <div className="bg-gradient-to-b from-[#0d0d14] to-[#080810] rounded-b-2xl border border-white/10 border-t-0 overflow-hidden">
                  <div className="flex min-h-[500px] md:min-h-[580px]">

                    {/* Left Sidebar - 3 Icons Only */}
                    <div className="hidden md:flex w-16 bg-black/40 border-r border-white/5 flex-col items-center py-6 gap-4">
                      <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                        <Calendar size={18} />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                        <Package size={18} />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                        <Radar size={18} />
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col md:flex-row">

                      {/* Left Panel - Past Calls */}
                      <div className="md:w-[340px] border-b md:border-b-0 md:border-r border-white/5 p-4 md:p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Ear size={14} className="text-accent" />
                            Past Calls
                          </h3>
                          <span className="text-xs text-gray-500">This week</span>
                        </div>

                        {/* Recent Call - Highlighted */}
                        <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-xl p-4 border border-accent/30 mb-3 relative overflow-hidden group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="flex items-start gap-3 relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AC</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-white truncate">Acme Corp</span>
                                <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded font-medium">Discovery</span>
                              </div>
                              <p className="text-xs text-gray-400 mb-2 line-clamp-2">"...our <span className="text-accent">reporting takes 3 hours</span> every week, it's killing productivity..."</p>
                              <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                <span className="flex items-center gap-1"><Clock size={10} /> 45 min</span>
                                <span className="text-emerald-400">✓ 3 insights captured</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Other Calls */}
                        {[
                          { initials: 'NX', name: 'Nexus Systems', type: 'Follow-up', duration: '32 min', insights: 2, color: 'from-blue-500 to-indigo-600' },
                          { initials: 'SB', name: 'ScaleBox', type: 'Demo', duration: '58 min', insights: 4, color: 'from-emerald-500 to-teal-600' },
                          { initials: 'DF', name: 'DataFlow Inc', type: 'Discovery', duration: '41 min', insights: 2, color: 'from-purple-500 to-pink-600' },
                        ].map((call, i) => (
                          <div key={i} className="bg-white/[0.02] hover:bg-white/[0.05] rounded-xl p-4 border border-white/5 mb-2 cursor-pointer transition-all">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${call.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 opacity-60`}>{call.initials}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-gray-300 truncate">{call.name}</span>
                                  <span className="text-[10px] bg-white/10 text-gray-400 px-1.5 py-0.5 rounded">{call.type}</span>
                                </div>
                                <div className="flex items-center gap-3 text-[10px] text-gray-600">
                                  <span><Clock size={10} className="inline mr-1" />{call.duration}</span>
                                  <span className="text-gray-500">{call.insights} insights</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Center Panel - Radar (Upcoming Alerts) */}
                      <div className="flex-1 p-4 md:p-5 bg-gradient-to-b from-transparent to-accent/[0.02]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Radar size={14} className="text-accent" />
                            Radar
                          </h3>
                          <span className="text-xs text-gray-500">12 upcoming alerts</span>
                        </div>

                        {/* Priority Alert - Ready Now */}
                        <div className="bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent rounded-2xl p-5 border-2 border-emerald-500/50 mb-4 relative overflow-hidden ready-pulse breathe">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/30 blur-[80px] rounded-full"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 blur-[40px] rounded-full"></div>
                          <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                                </span>
                                Ready to Act
                              </span>
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">Today</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Company</div>
                                <div className="text-sm font-semibold text-white">Nexus Systems</div>
                              </div>
                              <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Contact</div>
                                <div className="text-sm font-semibold text-white">Mike Chen</div>
                              </div>
                            </div>

                            <div className="bg-black/30 rounded-xl p-4 mb-4">
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Pain Point</div>
                              <div className="text-white font-semibold text-lg mb-2">Manual Data Entry Bottleneck</div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-lg font-medium">Timeline Hit: Q2</span>
                                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-lg font-medium">Budget Confirmed</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <Target size={14} className="text-accent" />
                                <span className="text-xs text-accent font-medium">Match: Workflow Automation Suite</span>
                              </div>
                            </div>
                            <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5">
                              View Context & Reach Out →
                            </button>
                          </div>
                        </div>

                        {/* Upcoming Alerts Grid */}
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Coming Up This Month</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { company: 'Acme Corp', pain: 'Slow Reporting Workflow', timeline: 'Jul 15', priority: 'high', days: 12 },
                            { company: 'ScaleBox', pain: 'Team Collaboration Gaps', timeline: 'Jul 22', priority: 'medium', days: 19 },
                            { company: 'DataFlow Inc', pain: 'Customer Onboarding Friction', timeline: 'Aug 1', priority: 'high', days: 29 },
                            { company: 'CloudFirst', pain: 'Integration Complexity', timeline: 'Aug 8', priority: 'medium', days: 36 },
                          ].map((alert, i) => (
                            <div key={i} className="bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-4 border border-white/5 cursor-pointer transition-all group">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-gray-300">{alert.company}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${alert.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                  {alert.priority}
                                </span>
                              </div>
                              <div className="text-sm font-medium text-white mb-2">{alert.pain}</div>
                              <div className="flex items-center justify-between text-[10px] text-gray-500">
                                <span>{alert.timeline}</span>
                                <span className="text-accent group-hover:text-accent/80">{alert.days}d</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Panel - Upcoming Meetings */}
                      <div className="md:w-[280px] border-t md:border-t-0 md:border-l border-white/5 p-4 md:p-5 bg-gradient-to-b from-transparent to-purple-500/[0.02] relative">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Calendar size={14} className="text-purple-400" />
                            Upcoming Meetings
                          </h3>
                        </div>

                        {/* Today's Meeting - Featured */}
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4 border border-purple-500/40 mb-3 relative overflow-hidden group hover:border-purple-500/60 transition-colors cursor-pointer">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 blur-[40px] rounded-full"></div>
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Today 2:00 PM</span>
                              <span className="text-[10px] bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full font-medium animate-pulse">In 2 hours</span>
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">Acme Corp — Follow-up</div>
                            <div className="text-xs text-gray-400 mb-3">Sarah Chen, VP of Ops</div>

                            {/* Insights from Cerebro */}
                            <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20">
                              <div className="flex items-center gap-1.5 mb-2">
                                <Lightbulb size={10} className="text-accent" />
                                <span className="text-[9px] text-accent font-bold uppercase tracking-wider">Cerebro Insights</span>
                              </div>
                              <ul className="space-y-1.5 text-[10px]">
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-accent mt-0.5">•</span>
                                  <span>Pain: <span className="text-white">Reporting takes 3hrs/week</span></span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-purple-400 mt-0.5">•</span>
                                  <span>Timeline: <span className="text-white">Q3 automation budget</span></span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                  <span className="text-emerald-400 mt-0.5">•</span>
                                  <span>Match: <span className="text-white">Analytics Dashboard Pro</span></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Other Meetings */}
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 mt-4">This Week</div>
                        {[
                          { company: 'ScaleBox', contact: 'Demo Call', when: 'Tomorrow 10am', context: 'Team scaling challenges' },
                          { company: 'DataFlow Inc', contact: 'Discovery', when: 'Wed 3pm', context: 'Onboarding bottlenecks' },
                          { company: 'CloudFirst', contact: 'Check-in', when: 'Thu 11am', context: 'Integration questions' },
                        ].map((meeting, i) => (
                          <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 cursor-pointer hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition-all">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 flex-shrink-0">
                              <Calendar size={14} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-gray-300 truncate">{meeting.company}</div>
                              <div className="text-[10px] text-gray-500">{meeting.contact}</div>
                              <div className="text-[10px] text-purple-400/70 mt-1 truncate">{meeting.context}</div>
                            </div>
                            <div className="text-[10px] text-gray-600 whitespace-nowrap">{meeting.when}</div>
                          </div>
                        ))}
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
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">We built a system that solves this.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={Ear}
              heading="Listen to Every Call"
              description="Our AI listens to your customer calls and identifies every problem, objection, and need mentioned. We extract the pain, the timeline, and the urgency. This creates a persistent memory of every need and timeline across your entire book of business."
            />
            <PillarCard
              icon={Lightbulb}
              heading="Match to Product"
              description="We understand your product. We know which features solve which problems. We automatically match customer needs to the exact capabilities you have. So reps don't just remember what hurt; they know exactly how your product solves it. Today, reps see these mappings in their alerts and reviews; next, we'll surface them live in-call, so even new reps always know what to say."
            />
            <PillarCard
              icon={Bell}
              heading="Alert at Right Time"
              description="If a customer said 'Q3 budget,' Cerebro will ping your rep on July 1 with the exact pain point and suggested angle—no one has to remember anything."
            />
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 bg-gradient-to-br from-accent/5 to-transparent border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trust That Scales Revenue</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                <span className="text-accent font-semibold">High-Trust Partnerships:</span> Listening is your most profitable tactic. 
                When reps recall specific needs months later, they prove they aren't just selling—they’re solving. 
                This shifts the dynamic from "vendor" to "trusted partner," eliminating friction and fast-tracking closed deals.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Close More Deals", desc: "You close more deals because every follow-up anchors on the exact pains customers mentioned — at the moment they're finally ready to buy." },
                  { title: "Shorter Sales Cycles", desc: "Shorten cycles by re-engaging precisely when customers' budget and priority go live, instead of blasting random follow-ups." },
                  { title: "Faster Rep Ramp", desc: "New reps ramp faster by seeing exactly which pains, timelines, and product combos led to closed deals — so they can copy winning patterns instead of guessing from generic summaries." },
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
