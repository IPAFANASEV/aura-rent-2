import { Building2, Truck, Target, CheckCircle2 } from 'lucide-react';

export function Operations() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Операционная модель</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl">Юридическая структура</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div>ИП</div>
                  <div className="text-sm text-slate-600">Индивидуальный предприниматель</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div>УСН «Доходы» 4%</div>
                  <div className="text-sm text-slate-600">Упрощённая система налогообложения</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Расчётный счёт в банке</div>
                  <div className="text-sm text-slate-600">Для безналичных расчётов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl">Логистика</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="mb-2">Вариант А: Февраль–Июнь</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Домашний склад</li>
                  <li>• Курьер / самовывоз</li>
                  <li>• Минимальные затраты</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="mb-2">Вариант Б: С июля</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Точка на набережной</li>
                  <li>• Аренда ~55 000 ₽/мес</li>
                  <li>• При подтверждённом спросе</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 mb-8">
          <h3 className="text-xl mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Процесс аренды
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">1</div>
              <div className="text-sm">Онлайн-бронь</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">2</div>
              <div className="text-sm">Предоплата 50% + залог</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">3</div>
              <div className="text-sm">Доставка / самовывоз</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">4</div>
              <div className="text-sm">Использование</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">5</div>
              <div className="text-sm">Проверка + возврат залога</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl mb-6">Маркетинг и продвижение</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="mb-3">Онлайн-каналы</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Авито</li>
                <li>• Таргет VK</li>
                <li>• Таргет Telegram</li>
                <li>• SEO-оптимизация</li>
              </ul>
            </div>
            <div>
              <div className="mb-3">Оффлайн</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Промоутеры на набережной</li>
                <li>• Флаеры и листовки</li>
                <li>• Точка на пляже</li>
              </ul>
            </div>
            <div>
              <div className="mb-3">Партнёрства</div>
              <ul className="space-y-2 text-slate-700">
                <li className="text-sm">• Отели (комиссия 10%)</li>
                <li className="text-sm">• Пляжи</li>
                <li className="text-sm">• Турагентства</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}