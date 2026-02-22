// Paleta de colores Brandia

export const brandColors = {
  primary: {
    darkBlue: {
      rgb: 'rgb(3, 40, 58)',
      hex: '#03283A',
      rgba: (alpha: number) => `rgba(3, 40, 58, ${alpha})`,
    },
    brightBlue: {
      rgb: 'rgb(0, 189, 255)',
      hex: '#00BDFF',
      rgba: (alpha: number) => `rgba(0, 189, 255, ${alpha})`,
    },
  },
  secondary: {
    cyan: {
      rgb: 'rgb(0, 243, 255)',
      hex: '#00F3FF',
      rgba: (alpha: number) => `rgba(0, 243, 255, ${alpha})`,
    },
    light: {
      rgb: 'rgb(235, 245, 255)',
      hex: '#EBF5FF',
      rgba: (alpha: number) => `rgba(235, 245, 255, ${alpha})`,
    },
    grayLight: {
      rgb: 'rgb(204, 228, 242)',
      hex: '#CCE4F2',
      rgba: (alpha: number) => `rgba(204, 228, 242, ${alpha})`,
    },
  },
} as const;

export const colors = {
  darkBlue: '#03283A',
  brightBlue: '#00BDFF',
  cyan: '#00F3FF',
  light: '#EBF5FF',
  grayLight: '#CCE4F2',
} as const;
