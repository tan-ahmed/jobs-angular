import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Inline callout / status message.
 * Matched to shadcn base-vega (the weg-design-system foundation) with WEG surface tokens:
 * rounded-xl, border-border-form, success via positive-action.
 */
export const alertVariants = cva(
  [
    "group/alert relative grid w-full gap-0.5 rounded-xl border-2 border-border-form px-4 py-3 text-start text-sm",
    "has-data-[slot='alert-action']:pr-18",
    "has-data-[slot='alert-icon']:grid-cols-[auto_1fr] has-data-[slot='alert-icon']:gap-x-2.5",
    "**:data-[slot='alert-icon']:row-span-2 **:data-[slot='alert-icon']:translate-y-0.5 **:data-[slot='alert-icon']:text-current",
    "[&_[data-slot='alert-icon']_svg:not([class*='size-'])]:size-4",
  ].join(' '),
  {
    variants: {
      zType: {
        default: 'bg-card text-card-foreground',
        success:
          "bg-card text-positive-action **:data-[slot='alert-description']:text-muted-foreground [&_[data-slot='alert-icon']_svg]:text-positive-action",
        destructive:
          "bg-card text-negative-action **:data-[slot='alert-description']:text-negative-action/90 [&_[data-slot='alert-icon']_svg]:text-current",
      },
    },
    defaultVariants: {
      zType: 'default',
    },
  },
);

export const alertIconVariants = cva('shrink-0 self-start text-base!');

export const alertActionVariants = cva('absolute top-2.5 right-3');

export const alertTitleVariants = cva(
  "font-medium group-has-data-[slot='alert-icon']/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
);

export const alertDescriptionVariants = cva(
  'text-sm text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-2',
  {
    variants: {
      zType: {
        default: 'text-muted-foreground',
        success: 'text-muted-foreground',
        destructive: '',
      },
    },
    defaultVariants: {
      zType: 'default',
    },
  },
);

export type ZardAlertTypeVariants = NonNullable<VariantProps<typeof alertVariants>['zType']>;
