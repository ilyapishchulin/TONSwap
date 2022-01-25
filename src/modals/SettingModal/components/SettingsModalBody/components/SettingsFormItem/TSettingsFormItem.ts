import { HTMLAttributes } from 'react';

export type TSettingsFormItem = HTMLAttributes<HTMLInputElement> & {
  top: string;
  bottom: string;
  after: string;
}