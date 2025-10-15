import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Container } from './Container';
import { IContainerProps } from '../model';
import { Headline } from '../../headline';
import { Ellipsis } from '../../ellipsis';

type IMeta = IContainerProps & { header?: string };

const meta = {
  title: 'Layouts/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    island: { control: 'boolean' },
    filled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultContainer: Story = {
  args: {
    island: false,
    filled: false,
  },
  render: ({ header, ...props }) => {
    return (
      <Container {...props}>
        {header && (
          <Headline slot="header" caps appearance="neutral" size="small">
            <Ellipsis maxLines={1}>{header}</Ellipsis>
          </Headline>
        )}
        {[1, 2, 3].map((key) => (
          <div key={key} className="skeleton"></div>
        ))}
      </Container>
    );
  },
};

export const ContainerWithHeader: Story = {
  args: {
    island: false,
    filled: false,
    header: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ header, ...props }) => {
    return (
      <Container {...props}>
        {header && (
          <Headline slot="header" caps appearance="neutral" size="small">
            <Ellipsis maxLines={1}>{header}</Ellipsis>
          </Headline>
        )}
        {[1, 2, 3].map((key) => (
          <div key={key} className="skeleton"></div>
        ))}
      </Container>
    );
  },
};

export default meta;
