import { Camera, Glasses, Speaker, Waves } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Camera className="w-10 h-10" />
          <Glasses className="w-10 h-10" />
          <Speaker className="w-10 h-10" />
          <Waves className="w-10 h-10" />
        </div>
        <h1 className="text-center mb-4">Aura Rent</h1>
        <p className="text-center text-xl text-blue-100 max-w-3xl mx-auto">
          Аренда премиум-техники и оборудования для туристов
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">500К ₽</div>
            <div className="text-sm text-blue-100">Стартовый капитал</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">4 мес</div>
            <div className="text-sm text-blue-100">Окупаемость</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">2.3М ₽</div>
            <div className="text-sm text-blue-100">Выручка в год</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">1.5М ₽</div>
            <div className="text-sm text-blue-100">Чистая прибыль</div>
          </div>
        </div>
      </div>
    </div>
  );
}
