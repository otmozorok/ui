export interface ICounterProps {
  count: number;
  rounded?: boolean;
  inverse?: boolean;
  destructive?: boolean;

  [key: string]: any;
}
