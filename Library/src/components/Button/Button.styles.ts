import { ButtonVariant, ButtonSize } from './Button.types';
import '../../styles/Button.css';

export const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth = false
) => {
  return [
    'sg-button',
    `sg-button-${variant}`,
    `sg-button-${size}`,
    fullWidth ? 'sg-button-full' : '',
  ].filter(Boolean).join(' ');
};