// @ts-ignore - Recharts type incompatibility with React 18
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
// @ts-ignore - Recharts type incompatibility with React 18
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { marketIndices, performanceData } from '../data/content';

export default function MarketPulse() {
  return (
    <section id="market-pulse" className="bg-obsidian border-y border-white/5">
      {/* Ticker Tape */}
      <div className="overflow-hidden bg-deep-navy/50 border-b border-white/5">
        <div className="flex animate-ticker py-3">
          {[...marketIndices, ...marketIndices].map((index, i) => (
            <div key={i} className="ticker-item flex items-center gap-4">
              <span className="text-sm font-semibold text-white">{index.symbol}</span>
              <span className="text-sm font-mono text-slate-300">{index.value}</span>
              <span className={`text-sm font-mono flex items-center ${index.positive ? 'text-financial-green' : 'text-negative-red'}`}>
                {index.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {index.change}
              </span>
              <span className="w-px h-4 bg-white/10" />
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}
