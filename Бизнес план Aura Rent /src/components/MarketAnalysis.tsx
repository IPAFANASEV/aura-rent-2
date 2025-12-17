import { TrendingUp, Award } from 'lucide-react';

export function MarketAnalysis() {
  const products = [
    {
      name: 'GoPro Hero 12',
      competitors: '1500–2500 ₽/день',
      average: '2000 ₽',
      ourPrice: '1700 ₽',
      deposit: '5–15к',
      status: 'premium',
      note: 'Доступнее на 15%'
    },
    {
      name: 'Ray-Ban Meta',
      competitors: 'Нет конкурентов',
      average: '—',
      ourPrice: '800 ₽',
      deposit: '—',
      status: 'unique',
      note: 'Уникальный продукт'
    },
    {
      name: 'JBL колонки',
      competitors: '500–1000 ₽/день',
      average: '700 ₽',
      ourPrice: '600 ₽',
      deposit: '—',
      status: 'premium',
      note: 'Доступнее на 14%'
    },
    {
      name: 'SUP-борды',
      competitors: '1000–1500 ₽/день',
      average: '1200 ₽',
      ourPrice: '1000 ₽',
      deposit: '3–5к',
      status: 'premium',
      note: 'Доступнее на 17%'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Анализ рынка и конкурентов</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl">Преимущества</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Уникальный продукт (Ray-Ban Meta)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Комплексное предложение</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Курьерская доставка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Онлайн-бронирование</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Страхование</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Партнёрства с отелями и пляжами</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl">Позиционирование</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-slate-600 mb-1">Сегмент</div>
                <div className="text-xl">Доступный премиум</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Ценовая политика</div>
                <div className="text-xl">На 10-20% ниже рынка</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">УТП</div>
                <div>Доставка + уникальный продукт + доступная цена</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4">Продукт</th>
                <th className="text-left py-3 px-4">Конкуренты</th>
                <th className="text-left py-3 px-4">Средняя цена</th>
                <th className="text-left py-3 px-4">Наша цена</th>
                <th className="text-left py-3 px-4">Преимущество</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-slate-100">
                  <td className="py-4 px-4">
                    <div>{product.name}</div>
                    {product.status === 'unique' && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
                        Уникально
                      </span>
                    )}
                    {product.status === 'premium' && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                        Премиум
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-slate-600">{product.competitors}</td>
                  <td className="py-4 px-4">{product.average}</td>
                  <td className="py-4 px-4">{product.ourPrice}</td>
                  <td className="py-4 px-4 text-sm text-slate-600">{product.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}