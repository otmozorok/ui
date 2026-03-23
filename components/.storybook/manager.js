import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import logo from '../../assets/logo.png';

const theme = create({
  brandImage: logo,
  brandTitle: '@otmozorok/ui',
});

addons.setConfig({
  theme,
  panelPosition: 'right',
});
