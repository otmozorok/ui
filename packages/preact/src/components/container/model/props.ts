import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IContainerProps extends ComponentPropsWithoutRef<'section'> {
  island?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
}
