/**
 * @file index.ts
 * @description Main entry point and barrel export for daisyui-astro component library.
 *
 * This package mirrors the Drupal 11 Single Directory Components (SDC) from daisyui-sdc:
 * - daisy-badge
 * - daisy-button (ported)
 * - daisy-card-pricing
 * - daisy-card-teaser
 * - daisy-card-testimonial
 * - daisy-card-with-slots
 * - daisy-divider
 * - daisy-drawer
 * - daisy-hero-centered
 * - daisy-hero-with-figure
 * - daisy-hero-with-figure-slots
 * - daisy-list
 * - theme_controller
 * - theme_controller_circles
 * - theme_controller_toggle
 */

// Export DaisyButton component and its TypeScript prop types
export { default as DaisyButton } from './components/DaisyButton.astro';
export type { Props as DaisyButtonProps } from './components/DaisyButton.astro';

// Package version
export const VERSION = '0.1.0';
