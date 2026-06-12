import logo from '../../../assets/logo.png';

const items = ['light', 'dark'];

/** @type { import('@storybook/html-vite').Preview } */
export const previewMain = {
  decorators: [
    (story, { globals }) => {
      document.documentElement.classList.remove(...items);
      document.documentElement.classList.add(globals.theme);

      return story();
    },
  ],
  parameters: {
    header: {
      logo: logo,
    },
    backgrounds: false,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  initialGlobals: {
    theme: items[1],
  },
  globalTypes: {
    theme: {
      toolbar: {
        dynamicTitle: true,
        icon: 'sun',
        items,
      },
    },
  },
};
