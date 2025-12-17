import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign } from 'lucide-react';

export function FinancialModel() {
  const monthlyData = [
    { month: 'Фев 26', revenue: 246000, expenses: 120000, profit: 126000, cumulative: 126000 },
    { month: 'Мар 26', revenue: 484500, expenses: 180000, profit: 304500, cumulative: 430500 },
    { month: 'Апр 26', revenue: 484500, expenses: 180000, profit: 304500, cumulative: 735000 },
    { month: 'Май 26', revenue: 484500, expenses: 180000, profit: 304500, cumulative: 1039500 },
    { month: 'Июн 26', revenue: 290000, expenses: 150000, profit: 140000, cumulative: 1179500 },
    { month: 'Июл 26', revenue: 40000, expenses: 25000, profit: 15000, cumulative: 1194500 },
    { month: 'Авг 26', revenue: 40000, expenses: 25000, profit: 15000, cumulative: 1209500 },
    { month: 'Сен 26', revenue: 40000, expenses: 25000, profit: 15000, cumulative: 1224500 }
  ];

  const expenses = [
    { name: 'Налоги УСН 4%', amount: 'с учётом вычетов' },
    { name: 'Фиксированные взносы', amount: '52 798 ₽' },
    { name: 'Доп. 1% свыше 300к', amount: '19 760 ₽' },
    { name: 'Аренда точки (5 мес)', amount: '275 000 ₽' },
    { name: 'Промоутеры', amount: '150 000 ₽' },
    { name: 'Доставка', amount: '50 000 ₽' },
    { name: 'Реклама', amount: '50 000 ₽' },
    { name: 'Страхование', amount: '30 000 ₽' },
    { name: 'Расходники', amount: '40 000 ₽' }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Финансовая модель</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <div className="text-sm opacity-90">Пик выручки/мес</div>
            </div>
            <div className="text-3xl">484 500 ₽</div>
            <div className="text-xs opacity-75 mt-1">Июль–Август</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <div className="text-sm opacity-90">Выручка/год</div>
            </div>
            <div className="text-3xl">2.3М ₽</div>
            <div className="text-xs opacity-75 mt-1">Весь год</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <div className="text-sm opacity-90">Расходы/год</div>
            </div>
            <div className="text-3xl">759К ₽</div>
            <div className="text-xs opacity-75 mt-1">Всего</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <div className="text-sm opacity-90">Чистая прибыль</div>
            </div>
            <div className="text-3xl">1.5М ₽</div>
            <div className="text-xs opacity-75 mt-1">За год</div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl mb-6">Выручка и прибыль по месяцам</h3>
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <div>
                  <div>Выручка</div>
                  <div className="text-xs text-slate-600">Общий доход от аренды</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-slate-400 rounded"></div>
                <div>
                  <div>Расходы</div>
                  <div className="text-xs text-slate-600">Все операционные затраты</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <div>
                  <div>Прибыль</div>
                  <div className="text-xs text-slate-600">Выручка минус расходы</div>
                </div>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => `${Number(value).toLocaleString()} ₽`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Выручка" />
              <Bar dataKey="expenses" fill="#94a3b8" name="Расходы" />
              <Bar dataKey="profit" fill="#10b981" name="Прибыль" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl mb-6">Накопительная прибыль (окупаемость)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => `${Number(value).toLocaleString()} ₽`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cumulative" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Накопительная прибыль"
                dot={{ fill: '#8b5cf6', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-purple-100 rounded-lg p-4 text-center">
            <div className="text-sm text-purple-700 mb-1">Точка безубыточности</div>
            <div className="text-2xl text-purple-900">~4 месяца</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl mb-6">Структура расходов за год</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {expenses.map((expense, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div className="text-slate-700">{expense.name}</div>
                <div>{expense.amount}</div>
              </div>
            ))}
            <div className="md:col-span-2 flex justify-between items-center p-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-lg">
              <div>Итого расходов</div>
              <div className="text-xl">758 598 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}