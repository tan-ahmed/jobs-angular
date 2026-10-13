import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/shared/utils/merge-classes';

export const buttonVariants = cva(
  mergeClasses(
    "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-transparent font-bold text-lg leading-7 whitespace-nowrap transition-all select-none",
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
    "disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ),
  {
    variants: {
      zType: {
        default:
          'bg-primary text-primary-foreground shadow-md hover:bg-[color-mix(in_oklch,var(--primary)_80%,black_20%)]',
        destructive: 'bg-negative-action text-white shadow-md hover:bg-negative-action-hover',
        success: 'bg-positive-action text-white shadow-md hover:bg-positive-action-hover',
        outline:
          'border-primary bg-background text-primary shadow-md hover:bg-gray-100 hover:border-[color-mix(in_oklch,var(--primary)_75%,black_25%)] hover:text-[color-mix(in_oklch,var(--primary)_75%,black_25%)]',
        secondary:
          'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80',
        ghost: 'bg-transparent text-foreground shadow-none hover:bg-muted',
        close: 'bg-close-action text-white shadow-md hover:bg-close-action-hover',
        link: 'rounded-none border-0 bg-transparent text-link underline underline-offset-[0.1em] decoration-[0.0625rem] font-light shadow-none hover:text-link-hover hover:decoration-2 focus-visible:outline-0 focus-visible:bg-link/25',
      },
      zSize: {
        default: 'h-[45px] gap-2 px-5 text-lg [&_svg:not([class*="size-"])]:size-5',
        xs: 'h-7 gap-1 px-3.5 text-sm [&_svg:not([class*="size-"])]:size-4',
        sm: 'h-9 gap-1.5 px-5 py-2 text-base [&_svg:not([class*="size-"])]:size-5',
        lg: 'h-[52px] gap-2.5 px-7 text-xl [&_svg:not([class*="size-"])]:size-6',
        icon: 'size-8 [&_svg:not([class*="size-"])]:size-6',
        'icon-xs': 'size-5 [&_svg:not([class*="size-"])]:size-[14px]',
        'icon-sm': 'size-6 [&_svg:not([class*="size-"])]:size-4',
        'icon-lg': 'size-11 [&_svg:not([class*="size-"])]:size-8',
      },
      zShape: {
        default: 'rounded-full',
        circle: 'rounded-full',
        square: 'rounded-none',
      },
      zLoading: {
        true: 'pointer-events-none opacity-50',
      },
      zDisabled: {
        true: 'pointer-events-none opacity-50',
      },
    },
    defaultVariants: {
      zType: 'default',
      zSize: 'default',
      zShape: 'default',
    },
  },
);
export type ZardButtonShapeVariants = NonNullable<VariantProps<typeof buttonVariants>['zShape']>;
export type ZardButtonSizeVariants = NonNullable<VariantProps<typeof buttonVariants>['zSize']>;
export type ZardButtonTypeVariants = NonNullable<VariantProps<typeof buttonVariants>['zType']>;
