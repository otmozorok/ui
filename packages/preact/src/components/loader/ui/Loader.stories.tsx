import type { Meta, StoryObj } from '@storybook/preact-vite';
import { SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';
import { ILoaderProps } from '../model';
import { Loader } from './Loader';
import { Flex } from '../../flex';

type IMeta = ILoaderProps & { text?: string };

const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Size]: { control: 'inline-radio', options: SIZES },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultLoader: Story = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
  },
  render: ({ text, ...props }) => {
    return <Loader {...props}>{text}</Loader>;
  },
};

export const AllLoaders: Story = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
  },
  render: () => {
    return (
      <Flex gap={0.5} alignItems="center">
        <Loader size="small"></Loader>
        <Loader size="medium"></Loader>
        <Loader size="large"></Loader>
      </Flex>
    );
  },
};

export default meta;
