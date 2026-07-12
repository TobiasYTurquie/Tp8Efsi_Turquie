/**
 * Paleta de colores global
 * Basada en la identidad visual oficial de Instagram
 */

export const COLORS = {
  // Primarios
  primary: '#000000',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  borderGray: '#DBDBDB',
  textGray: '#8A8A8A',
  darkGray: '#262626',

  // Estados
  liked: '#ED4956',
  links: '#0095F6',
  success: '#31A24C',

  // Gradientes
  storyGradient: ['#FEDA75', '#FA7E1E', '#D92E7F', '#9B36B7', '#515BD4'],
};

export const FONTS = {
  small: 12,
  medium: 14,
  large: 16,
  title: 20,
  heading: 24,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const SHADOW = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
};
