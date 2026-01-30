import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface PillarCardProps {
    icon: LucideIcon;
    heading: string;
    description: string;
    example?: string;
}

export function PillarCard({ icon: Icon, heading, description, example }: PillarCardProps) {
    return (
        <SpotlightCard className="bg-card p-8 rounded-2xl border border-white/10 flex flex-col h-full hover:bg-white/5 transition-all">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
                <Icon size={24} />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">{heading}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{description}</p>

            {example && (
                <div className="bg-black/20 p-4 rounded-lg text-sm text-gray-400 border border-white/5 font-mono">
                    <span className="text-accent/70 block mb-1 text-xs uppercase tracking-wide">Example</span>
                    {example}
                </div>
            )}
        </SpotlightCard>
    );
}
