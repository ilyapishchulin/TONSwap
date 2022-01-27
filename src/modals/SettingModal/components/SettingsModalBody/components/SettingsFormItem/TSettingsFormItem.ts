import { InputHTMLAttributes } from 'react';

export type TSettingsFormItem = InputHTMLAttributes<HTMLInputElement> & {
  top: string;
  bottom: string;
  after: string;
}