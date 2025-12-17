import { Rocket, MapPin, TrendingUp, Package } from 'lucide-react';

export function Scaling() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Масштабирование в Санкт-Петербург</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8">
            <Rocket className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-4">План экспансии</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <div>Сентябрь 2026</div>
                  <div className="text-sm opacity-90">Переезд в Санкт-Петербург</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <div>Точка в туристическом районе</div>
                  <div className="text-sm opacity-90">Невский проспект / Васильевский остров</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <div>Расширение ассортимента</div>
                  <div className="text-sm opacity-90">Новые категории продуктов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Package className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl mb-4">Новый ассортимент</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">🎮 Дроны</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">📱 Стабилизаторы</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">⛺ Палатки</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">🚴 Велосипеды</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">🎧 Аудио-гиды</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm">📷 Объективы</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-2xl">Прогноз по Санкт-Петербургу</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm opacity-75 mb-1">Выручка/мес</div>
              <div className="text-2xl">400-500К ₽</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm opacity-75 mb-1">Выручка/год</div>
              <div className="text-2xl">5-6М ₽</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm opacity-75 mb-1">Прибыль/год</div>
              <div className="text-2xl">2-3М ₽</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm opacity-75 mb-1">Сезонность</div>
              <div className="text-2xl">Круглый год</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <h4 className="mb-3">Преимущества СПб</h4>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Круглогодичный туристический поток</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Больший средний чек</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Развитая инфраструктура</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}