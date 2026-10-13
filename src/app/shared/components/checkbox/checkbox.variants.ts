import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'cursor-[unset] peer size-6 shrink-0 appearance-none rounded-[4px] border border-border-form bg-input-field shadow-xs',
    'transition-shadow outline-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'checked:border-background checked:bg-primary checked:text-primary-foreground',
  ].join(' '),
);

export const checkboxLabelVariants = cva(
  'cursor-[unset] text-base leading-snug text-current empty:hidden select-none md:text-lg',
);
