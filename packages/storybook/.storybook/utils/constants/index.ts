import { color } from '@shiba_ui/shared/src/constants/color';

export const sampleText =
  'Shiba Inus have “brush-like” fur and a perpetually judgmental look.';

export const backgrounds = [
  {
    name: 'cotton',
    value: color.cotton,
  },
  {
    name: 'obsidian',
    value: color.obsidian,
  },
];

export const viewports = {
  iphoneSE2: {
    name: 'iPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iphone5: {
    name: 'iPhone 5/5S/5C',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iphone11: {
    name: 'iPhone 11',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  samsungGalaxyS20: {
    name: 'Samsung Galaxy S20/S21/S22',
    styles: {
      width: '360px',
      height: '800px',
    },
  },
  ipadAir2: {
    name: 'iPad Air 2',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  galaxyTabS4: {
    name: 'Galaxy Tab S4',
    styles: {
      width: '800px',
      height: '1340px',
    },
  },
  macbookAir: {
    name: 'MacBook Air',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  macbookPro: {
    name: 'MacBook Pro',
    styles: {
      width: '1680px',
      height: '1050px',
    },
  },
  desktopHD: {
    name: 'Desktop HD',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};
