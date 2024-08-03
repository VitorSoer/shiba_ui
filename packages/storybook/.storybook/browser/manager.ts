import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';
import { color } from '@shiba_ui/shared/src/constants/color';

addons.setConfig({
  theme: create({
    brandTitle: 'Shiba UI',
    brandImage: require('./assets/logo.webp'),
    brandUrl: 'https://github.com/VitorSoer/shiba_ui',

    base: 'dark',
    appBg: color.obsidian,
    textColor: color.cotton,
    appBorderColor: color.cotton,
    appBorderRadius: 4,

    barBg: color.obsidian,
    barTextColor: color.cotton,
    barSelectedColor: color.steel,
    barHoverColor: color.steel,

    inputBg: color.obsidian,
    inputBorder: color.steel,
    inputTextColor: color.steel,
    inputBorderRadius: 4,
  }),
});
