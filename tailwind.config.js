module.exports = {
  content: [
    './index.html',
    './css/custom.css'
  ],
  theme: {
    extend: {
      colors: {
        corp: {
          deep: '#0F172A',     // Navy - Segurança
          primary: '#1E40AF',   // Blue - Confiabilidade
          accent: '#EA580C',    // Orange - Energia/IA
          surface: '#F8FAFC',   // Light Gray/Blue tint
          text: '#1E293B',      // Slate 800
          muted: '#64748B',     // Slate 500
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
