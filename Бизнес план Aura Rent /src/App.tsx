import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { MarketAnalysis } from './components/MarketAnalysis';
import { ProductRange } from './components/ProductRange';
import { FinancialModel } from './components/FinancialModel';
import { Operations } from './components/Operations';
import { Risks } from './components/Risks';
import { Scaling } from './components/Scaling';
import { Conclusions } from './components/Conclusions';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Декоративные AURA значки по бокам */}
      <div className="fixed left-4 top-1/4 text-slate-200 opacity-30 text-xs tracking-widest rotate-[-90deg] select-none pointer-events-none z-0">
        AURA
      </div>
      <div className="fixed right-4 top-1/3 text-slate-200 opacity-30 text-xs tracking-widest rotate-90 select-none pointer-events-none z-0">
        AURA
      </div>
      <div className="fixed left-4 bottom-1/4 text-slate-200 opacity-30 text-xs tracking-widest rotate-[-90deg] select-none pointer-events-none z-0">
        AURA
      </div>
      <div className="fixed right-4 bottom-1/3 text-slate-200 opacity-30 text-xs tracking-widest rotate-90 select-none pointer-events-none z-0">
        AURA
      </div>
      
      <div className="relative z-10">
        <Hero />
        <ExecutiveSummary />
        <MarketAnalysis />
        <ProductRange />
        <FinancialModel />
        <Operations />
        <Risks />
        <Scaling />
        <Conclusions />
      </div>
    </div>
  );
}