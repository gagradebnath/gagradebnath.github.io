tailwind.config = {
    theme: {
      extend: {
        colors: {
          bg:       '#1a1714',
          surface:  '#252220',
          surface2: '#2e2b28',
          surface3: '#3a3733',
          border:   '#3a3733',
          accent:   '#e8850a',
          accent2:  '#f0a832',
          muted:    '#8a8480',
          dim:      '#5a5753',
        },
        fontFamily: {
          display: ['"Special Elite"', 'cursive'],
          body:    ['Nunito', 'sans-serif'],
          mono:    ['"Space Mono"', 'monospace'],
        },
        animation: {
          'fade-up':   'fadeUp 0.6s ease both',
          'fade-up-1': 'fadeUp 0.6s 0.1s ease both',
          'fade-up-2': 'fadeUp 0.6s 0.2s ease both',
          'fade-up-3': 'fadeUp 0.6s 0.3s ease both',
          'fade-up-4': 'fadeUp 0.6s 0.4s ease both',
        },
        keyframes: {
          fadeUp: {
            from: { opacity: '0', transform: 'translateY(20px)' },
            to:   { opacity: '1', transform: 'translateY(0)' },
          }
        }
      }
    }
  }