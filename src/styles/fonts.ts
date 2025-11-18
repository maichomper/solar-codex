import localFont from 'next/font/local';

// Custom handwriting font
export const michoHandwriting = localFont({
  src: [
    {
      path: '../../public/fonts/Michohandwriting-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-micho-handwriting',
  display: 'swap',
});
