import type { Meta, StoryObj } from '@storybook/preact-vite';
import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import type { IBannerProps } from '../model';
import { Banner } from './Banner';
import { Headline } from '../../headline';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
    },
    [WCATTR.Closable]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Src]: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<IBannerProps & { text: string; src: string }>;

type Story = StoryObj<IBannerProps & { text: string; src: string }>;

export const DefaultBanner: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    title: 'Заголовок банера',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, title, ...props }) => {
    return (
      <Banner {...props}>
        <Headline>{title}</Headline>
        <p>{text}</p>
      </Banner>
    );
  },
};

export const BannerWithImage: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Src]:
      'https://camo.githubusercontent.com/5089aade831f565b6414567519fed5e50b3187753e3b95a1c0e521704768ccb5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32367842414d7964554c396c41397a4b552f67697068792e676966',
    title: 'Заголовок банера',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, title, ...props }) => {
    return (
      <Banner {...props}>
        <Headline>{title}</Headline>
        <p>{text}</p>
      </Banner>
    );
  },
};

export default meta;
