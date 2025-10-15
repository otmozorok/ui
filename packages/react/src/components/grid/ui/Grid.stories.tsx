import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLS, ROWS, WCATTR } from '@otmozorok/wc/consts';
import type { IGridProps } from '../model';
import { Grid } from './Grid';

type IMeta = IGridProps;

const meta = {
  title: 'Layouts/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Rows]: {
      control: { type: 'select' },
      options: ROWS,
    },
    [WCATTR.Cols]: {
      control: { type: 'select' },
      options: COLS,
    },
    [WCATTR.Gap]: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultGrid: Story = {
  args: {
    [WCATTR.Cols]: 2,
  },
  render: ({ ...props }) => {
    return (
      <Grid {...props}>
        {[1, 2, 3, 4].map((key) => (
          <div key={key} className="skeleton"></div>
        ))}
      </Grid>
    );
  },
};

export default meta;
