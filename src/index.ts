/**
 * @file index.ts
 * @description Main entry point and barrel export for daisyui-astro component library.
 *
 * This package provides 1:1 parity with the Drupal 11 Single Directory Components (SDC)
 * from `daisyui_sdc`:
 *
 * 1.  DaisyBadge (daisy-badge)
 * 2.  DaisyButton (daisy-button)
 * 3.  DaisyCardPricing (daisy-card-pricing)
 * 4.  DaisyCardTeaser (daisy-card-teaser)
 * 5.  DaisyCardTestimonial (daisy-card-testimonial)
 * 6.  DaisyCardWithSlots (daisy-card-with-slots)
 * 7.  DaisyDivider (daisy-divider)
 * 8.  DaisyDrawer (daisy-drawer)
 * 9.  DaisyHeroCentered (daisy-hero-centered)
 * 10. DaisyHeroWithFigure (daisy-hero-with-figure)
 * 11. DaisyHeroWithFigureSlots (daisy-hero-with-figure-slots)
 * 12. DaisyList (daisy-list)
 * 13. ThemeController (theme_controller)
 * 14. ThemeControllerCircles (theme_controller_circles)
 * 15. ThemeControllerToggle (theme_controller_toggle)
 */

// 1. Badge
export { default as DaisyBadge } from './components/DaisyBadge.astro';
export type { Props as DaisyBadgeProps } from './components/DaisyBadge.astro';

// 2. Button
export { default as DaisyButton } from './components/DaisyButton.astro';
export type { Props as DaisyButtonProps } from './components/DaisyButton.astro';

// 3. Card Pricing
export { default as DaisyCardPricing } from './components/DaisyCardPricing.astro';
export type { Props as DaisyCardPricingProps } from './components/DaisyCardPricing.astro';

// 4. Card Teaser
export { default as DaisyCardTeaser } from './components/DaisyCardTeaser.astro';
export type { Props as DaisyCardTeaserProps } from './components/DaisyCardTeaser.astro';

// 5. Card Testimonial
export { default as DaisyCardTestimonial } from './components/DaisyCardTestimonial.astro';
export type { Props as DaisyCardTestimonialProps } from './components/DaisyCardTestimonial.astro';

// 6. Card With Slots
export { default as DaisyCardWithSlots } from './components/DaisyCardWithSlots.astro';
export type { Props as DaisyCardWithSlotsProps } from './components/DaisyCardWithSlots.astro';

// 7. Divider
export { default as DaisyDivider } from './components/DaisyDivider.astro';
export type { Props as DaisyDividerProps } from './components/DaisyDivider.astro';

// 8. Drawer
export { default as DaisyDrawer } from './components/DaisyDrawer.astro';
export type { Props as DaisyDrawerProps } from './components/DaisyDrawer.astro';

// 9. Hero Centered
export { default as DaisyHeroCentered } from './components/DaisyHeroCentered.astro';
export type { Props as DaisyHeroCenteredProps } from './components/DaisyHeroCentered.astro';

// 10. Hero With Figure
export { default as DaisyHeroWithFigure } from './components/DaisyHeroWithFigure.astro';
export type { Props as DaisyHeroWithFigureProps } from './components/DaisyHeroWithFigure.astro';

// 11. Hero With Figure Slots
export { default as DaisyHeroWithFigureSlots } from './components/DaisyHeroWithFigureSlots.astro';
export type { Props as DaisyHeroWithFigureSlotsProps } from './components/DaisyHeroWithFigureSlots.astro';

// 12. List
export { default as DaisyList } from './components/DaisyList.astro';
export type { Props as DaisyListProps } from './components/DaisyList.astro';

// 13. Theme Controller
export { default as ThemeController } from './components/ThemeController.astro';
export type { Props as ThemeControllerProps } from './components/ThemeController.astro';

// 14. Theme Controller Circles
export { default as ThemeControllerCircles } from './components/ThemeControllerCircles.astro';
export type { Props as ThemeControllerCirclesProps } from './components/ThemeControllerCircles.astro';

// 15. Theme Controller Toggle
export { default as ThemeControllerToggle } from './components/ThemeControllerToggle.astro';
export type { Props as ThemeControllerToggleProps } from './components/ThemeControllerToggle.astro';

// Package version
export const VERSION = '1.0.0';
