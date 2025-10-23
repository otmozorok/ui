import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface IEllipsisProps extends ComponentPropsWithoutRef<'div'> {
  maxLines?: number;
}
