import { cva, type VariantProps } from 'class-variance-authority';

export const alertDialogVariants = cva(
  [
    'group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full max-h-[calc(100dvh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6',
    'overflow-y-auto overscroll-contain rounded-xl border-2 border-border-form bg-white p-6 text-sm text-popover-foreground shadow-md outline-none',
    'sm:max-h-[calc(100dvh-4rem)]',
    'data-[size=default]:sm:max-w-md data-[size=sm]:max-w-xs data-[size=sm]:sm:max-w-sm',
  ],
  {
    variants: {
      zSize: {
        default: '',
        sm: '',
      },
    },
    defaultVariants: {
      zSize: 'default',
    },
  },
);

/** Classes of the mask behind an alert dialog, shared by the declarative form and the service. */
export const ALERT_DIALOG_BACKDROP_CLASSES = ['bg-black/10', 'supports-backdrop-filter:backdrop-blur-xs'];

export const alertDialogHeaderVariants = cva([
  'grid grid-rows-[auto_1fr] place-items-center gap-2 text-center',
  'has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4',
  'sm:group-data-[size=default]/alert-dialog-content:place-items-start',
  'sm:group-data-[size=default]/alert-dialog-content:text-start',
  'sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
]);

export const alertDialogTitleVariants = cva([
  'wrap-break-word text-lg leading-none font-bold lg:text-xl xl:text-2xl xl:leading-8',
  'sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
]);

export const alertDialogDescriptionVariants = cva([
  'text-base text-balance text-muted-foreground lg:text-lg md:text-pretty',
  '[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground',
]);

export const alertDialogFooterVariants = cva([
  'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-6',
]);

export const alertDialogMediaVariants = cva([
  'mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted',
  'sm:group-data-[size=default]/alert-dialog-content:row-span-2',
  "*:[svg:not([class*='size-'])]:size-6",
]);

export type ZardAlertDialogVariants = VariantProps<typeof alertDialogVariants>;
export type ZardAlertDialogSizeVariants = NonNullable<VariantProps<typeof alertDialogVariants>['zSize']>;
