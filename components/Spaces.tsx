
import React from 'react';
import { ASSETS } from '../constants';
import { Monitor, Wifi, Users, Coffee, Utensils, Home } from 'lucide-react';

const FACILITIES = [
  { icon: <Users className="w-5 h-5" />, label: "2 salones hasta 40 personas" },
  { icon: <Monitor className="w-5 h-5" />, label: "Proyector y equipo audiovisual" },
  { icon: <Wifi className="w-5 h-5" />, label: "Internet en áreas comunes" },
  { icon: <Coffee className="w-5 h-5" />, label: "Estación de café permanente" },
  { icon: <Utensils className="w-5 h-5" />, label: "Catering farm-to-table" },
  { icon: <Home className="w-5 h-5" />, label: "20 cabañas privadas" },
];

const Spaces: React.FC = () => {
  return (
    <section id="spaces" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={ASSETS.CABANA} alt="Cabaña privada La Palma & El Tucán" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] translate-y-6 sm:translate-y-10">
                <img src={ASSETS.COMIDA} alt="Restaurante farm-to-table" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">Infraestructura</h4>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
              Todo lo que necesitas, <br className="hidden sm:block" /><span className="italic text-brand-pink">nada que te sobre</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              Espacios versátiles con luz natural abundante y vistas a los cafetales. Equipados con tecnología para reuniones de alto impacto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {FACILITIES.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-brand-light p-3 sm:p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-brand-dark">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
