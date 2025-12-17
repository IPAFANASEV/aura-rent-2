import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Conclusions() {
  const actions = [
    'Старт с домашнего склада — февраль 2026',
    'A/B-тест цен и ассортимента',
    'Открытие точки с июля при подтверждённом спросе',
    'Обязательные залоги и страхование',
    'Подготовка к масштабированию в СПб с августа'
  ];

  const advantages = [
    'Быстрая окупаемость (~4 месяца)',
    'Высокая маржинальность',
    'Уникальный продукт на рынке (Ray-Ban Meta)',
    'Премиум-позиционирование',
    'Потенциал масштабирования'
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Выводы</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl mb-6">Ключевые преимущества</h3>
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-100">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8">
            <h3 className="text-2xl mb-6">План действий</h3>
            <div className="space-y-3">
              {actions.map((action, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                    {index + 1}
                  </div>
                  <span className="text-blue-50">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl mb-4">Бизнес готов к запуску</h3>
          <p className="text-lg text-green-100 mb-6">
            Все компоненты проработаны, риски учтены, финансовая модель просчитана
          </p>
          <div className="flex items-center justify-center gap-2 text-xl">
            <span>Ожидаемая прибыль в первый год:</span>
            <span className="px-4 py-2 bg-white text-green-600 rounded-lg">1 517 402 ₽</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Aura Rent © 2026 • Бизнес-план разработан для запуска в феврале 2026</p>
        </div>
      </div>
    </section>
  );
}