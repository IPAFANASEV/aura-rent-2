import { AlertTriangle, Shield } from 'lucide-react';

export function Risks() {
  const risks = [
    {
      name: 'Поломка/кража оборудования',
      level: 'high',
      mitigation: 'Залог ≈ полной стоимости + страхование оборудования'
    },
    {
      name: 'Сезонность спроса',
      level: 'high',
      mitigation: 'Перенос в СПб на следующий сезон, частичная распродажа'
    },
    {
      name: 'Конкуренция GoPro',
      level: 'medium',
      mitigation: 'Акцент на Ray-Ban Meta (уникальность) + премиум-сервис'
    },
    {
      name: 'Логистические проблемы',
      level: 'medium',
      mitigation: 'Договор с курьерской службой, резервный автомобиль'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high':
        return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
      case 'medium':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' };
      default:
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'high': return 'Высокий';
      case 'medium': return 'Средний';
      default: return 'Низкий';
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Риски и митигация</h2>
        
        <div className="grid gap-6">
          {risks.map((risk, index) => {
            const colors = getLevelColor(risk.level);
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg mb-1">{risk.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${colors.bg} ${colors.text} ${colors.border} border`}>
                        Уровень: {getLevelText(risk.level)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-1 bg-green-50 rounded-lg p-4 border border-green-200">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-green-900 mb-1">Митигация:</div>
                      <div className="text-sm text-slate-700">{risk.mitigation}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start gap-3">
            <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg mb-2">Ключевые меры безопасности</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Обязательный залог при аренде, равный стоимости оборудования</li>
                <li>• Страхование всего оборудования от повреждений и кражи</li>
                <li>• Договоры с клиентами с чёткими условиями ответственности</li>
                <li>• Диверсификация рисков через разные категории товаров</li>
                <li>• Резервный фонд на непредвиденные расходы</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
