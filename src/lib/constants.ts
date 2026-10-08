export const BRAND = {
  name: 'Ultragaz 24 Horas',
  tagline: 'Seu gás, 24 horas, na porta de casa.',
  phone: '0800 70 10 123',
  whatsapp: '5511999999999', // TODO: trocar pelo número real da revenda
  colors: {
    blue: '#0054A6',      // azul oficial Ultragaz
    blueDark: '#003d7a',  // azul escuro (header/gradiente)
    orange: '#F37021',    // laranja oficial (CTA, chama)
    orangeLight: '#FFB347',
    cyan: '#00B4A8',       // detalhe/promo
  },
} as const;

export type CylinderType = 'P05' | 'P13' | 'P20' | 'P45';

export interface Cylinder {
  type: CylinderType;
  label: string;
  kg: number;
  price: number;        // preço base da revenda (ajuste no painel)
  desc: string;
}

export const CYLINDERS: Cylinder[] = [
  { type: 'P05', label: 'P05', kg: 5,  price: 85,  desc: 'Uso eventual / viagem' },
  { type: 'P13', label: 'P13', kg: 13, price: 135, desc: 'O clássico azul — cozinha do dia a dia' },
  { type: 'P20', label: 'P20', kg: 20, price: 210, desc: 'Empilhadeira / uso pesado' },
  { type: 'P45', label: 'P45', kg: 45, price: 430, desc: 'Industrial / restaurante / padaria' },
];

export type PaymentMethod = 'pix' | 'credit' | 'debit' | 'delivery' | 'vale-gas';

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  pix: 'PIX (instantâneo)',
  credit: 'Cartão de crédito (até 3x sem juros)',
  debit: 'Cartão de débito',
  delivery: 'Na entrega (dinheiro/cartão)',
  'vale-gas': 'Vale-Gás (governo)',
};

export interface Order {
  id: string;
  createdAt: string; // ISO
  customer: { name: string; phone: string; address: string };
  cylinder: CylinderType;
  payment: PaymentMethod;
  total: number;
  status: 'pending' | 'confirmed' | 'out_for_delivery' | 'delivered' | 'cancelled';
  driverNote?: string;
}

export const ORDER_STATUS_LABEL: Record<Order['status'], string> = {
  pending: 'Aguardando confirmação',
  confirmed: 'Confirmado — preparando entrega',
  out_for_delivery: 'Saiu para entrega 🔥',
  delivered: 'Entregue ✅',
  cancelled: 'Cancelado ❌',
};

export function formatBRL(v: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
}

export function generateOrderId() {
  return 'UG' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();
}
