import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';
import { color } from '@shiba_ui/shared/src/constants/color';

addons.setConfig({
  theme: create({
    brandTitle: 'Shiba UI',
    brandImage: require('../utils/assets/logo.webp'),
    brandUrl: 'https://github.com/VitorSoer/shiba_ui',

    base: 'dark',
    appBg: color.obsidian,
    textColor: color.cotton,
    appBorderColor: color.graphite,
    appBorderRadius: 4,

    barBg: color.obsidian,
    barTextColor: color.cotton,
    barSelectedColor: color.cotton,
    barHoverColor: color.graphite,

    inputBg: color.obsidian,
    inputBorder: color.graphite,
    inputTextColor: color.cotton,
    inputBorderRadius: 4,
  }),
});
