import { ComponentPropsWithoutRef } from 'preact/compat';

export interface ICounterProps extends ComponentPropsWithoutRef<'div'> {
  count: number;
  rounded?: boolean;
  inverse?: boolean;
  destructive?: boolean;
}
