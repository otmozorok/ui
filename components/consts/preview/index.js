const items = ['light', 'dark'];

export const previewMain = {
  decorators: [
    (story, { globals }) => {
      document.documentElement.classList.remove(...items);
      document.documentElement.classList.add(globals.theme);

      globals.backgrounds.value = globals.theme;

      return story();
    },
  ],
  parameters: {
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
    backgrounds: {
      value: items[1],
    },
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
