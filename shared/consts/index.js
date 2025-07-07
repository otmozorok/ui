export const SIZE = Object.freeze({
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
});

/**
 * @typedef {"small" | "medium" | "large"} SIZE
 * @type {SIZE[]}
 */
export const SIZES = [SIZE.Small, SIZE.Medium, SIZE.Large];

export const MODE = Object.freeze({
  Link: 'link',
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
});

/**
 * @typedef {"link" | "primary" | "secondary" | "tertiary"} MODE
 * @type {MODE[]}
 */
export const MODES = [MODE.Link, MODE.Primary, MODE.Secondary, MODE.Tertiary];

export const POSITION = Object.freeze({
  Top: 'top',
  Bottom: 'bottom',
  Left: 'left',
  Right: 'right',
});

/**
 * @typedef {"top" | "bottom" | "left" | "right"} POSITION
 * @type {POSITION[]}
 */
export const POSITIONS = [POSITION.Top, POSITION.Bottom, POSITION.Left, POSITION.Right];

export const COLOR = Object.freeze({
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
  Orange: 'orange',
  Purple: 'purple',
});

/**
 * @typedef {"red" | "green" | "blue" | "orange" | "purple"} COLOR
 * @type {COLOR[]}
 */
export const COLORS = [COLOR.Red, COLOR.Green, COLOR.Blue, COLOR.Orange, COLOR.Purple];

export const WCTAG = Object.freeze({
  Accordion: 'wc-accordion',
  Avatar: 'wc-avatar',
  Button: 'wc-button',
  Dropdown: 'wc-dropdown',
  Ellipsis: 'wc-ellipsis',
  Headline: 'wc-headline',
  Icon: 'wc-icon',
  Loader: 'wc-loader',
  Menu: 'wc-menu',
  MenuAction: 'wc-menu-action',
  MenuItem: 'wc-menu-item',
  Tooltip: 'wc-tooltip',
});

export const ICON = Object.freeze({
  ChevronDown: 'chevron-down',
  ChevronLeft: 'chevron-left',
  ChevronRight: 'chevron-right',
  ChevronUp: 'chevron-up',
  CircleHelp: 'circle-help',
});
