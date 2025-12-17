import { MapPin, Users, TrendingUp } from 'lucide-react';

export function ExecutiveSummary() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Краткое резюме</h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Aura Rent</strong> — сервис аренды техники и оборудования для туристов: 
            GoPro, Ray-Ban Meta, JBL, SUP-борды. Старт в Крыму (Ялта/Севастополь) на 1 год, 
            затем масштабирование в Санкт-Петербург.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Локация</div>
                <div>Крым (Ялта/Севастополь)</div>
                <div className="text-sm text-slate-500">→ Санкт-Петербург</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Целевая аудитория</div>
                <div>Туристы</div>
                <div className="text-sm text-slate-500">Пик: май–сентябрь</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Команда</div>
                <div>Основатель</div>
                <div className="text-sm text-slate-500">Зам. директора, промоутеры</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}