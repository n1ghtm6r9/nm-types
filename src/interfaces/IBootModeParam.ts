export interface IBootModeParam {
  bootMode: string;
  key: string;
  type: typeof String | typeof Number;
  default?: string;
  min?: number;
  max?: number;
  allow?: string[];
  array?: boolean;
}
