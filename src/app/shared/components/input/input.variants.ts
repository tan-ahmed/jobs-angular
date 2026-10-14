import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'box-border h-11 w-full min-w-0 rounded-xl border-2 border-border-form bg-input-field px-3 py-2',
    'text-base leading-6 shadow-xs transition-[color,box-shadow] outline-none',
    'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#E9ECEF] disabled:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'md:h-12 md:text-lg md:leading-7',
  ].join(' '),
);

export const inputGroupInputVariants = cva(
  'h-full min-h-0 flex-1 rounded-none border-0 bg-transparent px-0 py-0 shadow-none ring-0 outline-none focus-visible:border-transparent focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0',
);
