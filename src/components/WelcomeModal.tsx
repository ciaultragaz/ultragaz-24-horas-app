import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X, Clock, MapPin, Phone } from 'lucide-react';
import { BRAND } from '../lib/constants';

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('ug24_welcome_seen')) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    localStorage.setItem('ug24_welcome_seen', '1');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-ug-blue-dark via-ug-blue to-ug-blue-dark px-6 pt-8 pb-6 text-center">
                <motion.div
                  className="mx-auto mb-4 w-20 h-20 rounded-full bg-ug-orange flex items-center justify-center shadow-lg shadow-ug-orange/40"
                  animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                  <Flame size={40} className="text-white" />
                </motion.div>
                <h1 className="font-display text-3xl font-black text-white tracking-tight">{BRAND.name}</h1>
                <p className="mt-2 text-sm text-blue-100">{BRAND.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-ug-orange px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                  <Clock size={13} /> Aberto 24 horas
                </div>
              </div>
              <div className="bg-white px-6 py-5 space-y-3">
                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <MapPin size={16} className="text-ug-orange mt-0.5 shrink-0" />
                  <span>Entrega na <b>Zona Leste de SP</b> e região — a revenda mais perto de você.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <Phone size={16} className="text-ug-blue mt-0.5 shrink-0" />
                  <span>Dúvidas? <b>{BRAND.phone}</b></span>
                </div>
                <button
                  onClick={close}
                  className="mt-2 w-full rounded-2xl bg-ug-orange py-3.5 text-base font-bold text-white shadow-lg shadow-ug-orange/30 active:scale-[0.98] transition-transform">
                  Bora pedir gás 🔥
                </button>
              </div>
              <button onClick={close} className="absolute top-3 right-3 text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
