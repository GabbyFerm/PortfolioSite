import type { Logo } from '../types';

const logoImages = import.meta.glob<{ default: string }>('../assets/images/logos/*.svg', {
  eager: true,
});

const getLogoImage = (filename: string) => {
  const path = `../assets/images/logos/${filename}`;
  return logoImages[path]?.default || '';
};

export const logos: Logo[] = [
  {
    id: '4224',
    name: '4224',
    image: getLogoImage('4224.svg'),
    alt: '4224 logo',
  },
  {
    id: 'solartech',
    name: 'Solartech',
    image: getLogoImage('solartech.svg'),
    alt: 'Solartech logo',
  },
  {
    id: 'andres-mur',
    name: 'Andres Mur & Kakel',
    image: getLogoImage('andres-mur.svg'),
    alt: 'Andres Mur & Kakel logo',
  },
  {
    id: 'tradgardsstjans',
    name: 'Trädgårdstjänst',
    image: getLogoImage('tradgardsstjans.svg'),
    alt: 'Trädgårdstjänst logo',
  },
  {
    id: 'bueras',
    name: 'Bueras',
    image: getLogoImage('bueras.svg'),
    alt: 'Bueras logo',
  },
  {
    id: 'billdals-el',
    name: 'Billdals El',
    image: getLogoImage('billdals-el.svg'),
    alt: 'Billdals El logo',
  },
  {
    id: 'boda-skog',
    name: 'Boda Skog',
    image: getLogoImage('boda-skog.svg'),
    alt: 'Boda Skog logo',
  },
  {
    id: 'brixton-bygg',
    name: 'Brixton Bygg',
    image: getLogoImage('brixton-bygg.svg'),
    alt: 'Brixton bygg logo',
  },
  {
    id: 'wallbrix',
    name: 'Wallbrix',
    image: getLogoImage('wallbrix.svg'),
    alt: 'Wallbrix logo',
  },
  {
    id: 'erik-klavefors',
    name: 'Erik Klavefors',
    image: getLogoImage('erik-klavefors.svg'),
    alt: 'Erik Klavefors logo',
  },
];
