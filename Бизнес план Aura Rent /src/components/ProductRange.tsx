import { ShoppingCart } from 'lucide-react';

export function ProductRange() {
  const products = [
    { name: 'GoPro Hero 12', price: 24290, quantity: 10, total: 242900 },
    { name: 'Ray-Ban Meta', price: 26500, quantity: 5, total: 132500 },
    { name: 'JBL колонки', price: 8000, quantity: 5, total: 40000 },
    { name: 'SUP-борд (комплект)', price: 9000, quantity: 5, total: 45000 }
  ];

  const totalPurchase = products.reduce((sum, p) => sum + p.total, 0);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12">Ассортимент и закупка</h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl">Закупочный план</h3>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4">Позиция</th>
                  <th className="text-right py-3 px-4">Цена, ₽</th>
                  <th className="text-center py-3 px-4">Количество</th>
                  <th className="text-right py-3 px-4">Итого, ₽</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4 px-4">{product.name}</td>
                    <td className="py-4 px-4 text-right">{product.price.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center">{product.quantity}</td>
                    <td className="py-4 px-4 text-right">{product.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-slate-300">
                  <td className="py-4 px-4 font-semibold" colSpan={3}>Итого закупка</td>
                  <td className="py-4 px-4 text-right font-semibold text-lg">
                    {totalPurchase.toLocaleString()} ₽
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mt-6">
            <h4 className="mb-4">Дополнительные стартовые расходы</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Реклама</div>
                <div className="text-xl">30 000 ₽</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-1">Аксессуары</div>
                <div className="text-xl">10 000 ₽</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-1">Итого инвестиции</div>
                <div className="text-2xl">500 400 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
