import { APPEARANCE, APPEARANCES } from '@otmozorok/wc/consts';
import { Headline } from '../../headline';
import { IBannerProps } from '../model';
import { Banner } from './Banner';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = ParentComponent<IBannerProps & { title?: string; text?: string; image?: string }>;

export default {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: {
        defaultValue: {
          summary: APPEARANCE.Themed,
        },
      },
    },
    closable: { control: 'boolean' },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultBanner: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    title: 'Заголовок банера',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    return (
      <Banner {...props}>
        <Headline>{props.title}</Headline>
        <p>{props.text}</p>
      </Banner>
    );
  },
};

export const BannerWithImage: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    image:
      'https://camo.githubusercontent.com/4992218eeafd48c9e44185faf5f92c68eb7acc5de1069f9c9d78075412108d04/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32367842414d7964554c396c41397a4b552f67697068792e676966',
    title: 'Заголовок банера',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    return (
      <Banner {...props}>
        <div style={{ width: '60%' }}>
          <Headline>{props.title}</Headline>
          <p>{props.text}</p>
        </div>
      </Banner>
    );
  },
};
