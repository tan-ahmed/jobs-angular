import { cva, type VariantProps } from 'class-variance-authority';

export const dialogVariants = cva([
  'fixed top-1/2 left-1/2 z-50 grid w-full max-h-[calc(100dvh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6',
  'overflow-y-auto overscroll-contain rounded-xl border-2 border-border-form bg-white p-6 text-sm text-popover-foreground shadow-md outline-none',
  'sm:max-h-[calc(100dvh-4rem)] sm:max-w-md',
]);

/** Classes of the mask behind a dialog, shared by the declarative form and the service. */
export const DIALOG_BACKDROP_CLASSES = ['bg-black/10', 'supports-backdrop-filter:backdrop-blur-xs'];

export const dialogHeaderVariants = cva('flex flex-col gap-2');

export const dialogTitleVariants = cva(
  'mb-3 wrap-break-word pr-6 text-lg leading-none font-bold lg:pr-10 lg:text-xl xl:text-2xl xl:leading-8',
);

export const dialogDescriptionVariants = cva(
  'text-base text-muted-foreground lg:text-lg *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
);

export const dialogFooterVariants = cva(
  'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
);

export type ZardDialogVariants = VariantProps<typeof dialogVariants>;
