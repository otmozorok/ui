import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  island?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
}
