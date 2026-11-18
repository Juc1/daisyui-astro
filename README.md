# daisyui-astro

DaisyUI component library for [Astro](https://astro.build), designed to maintain 1:1 parity with the Drupal 11 [daisyui-sdc](https://github.com/Juc1/daisyui-sdc) module.

## Overview

This package ports Drupal Single Directory Components (SDC) built on DaisyUI into native, type-safe `.astro` components. Props and slots defined in Drupal's `*.component.yml` schemas are mapped directly to TypeScript interfaces.

## Components

The following components are targeted for parity with `daisyui-sdc`:

- `daisy-badge`
- `daisy-button`
- `daisy-card-pricing`
- `daisy-card-teaser`
- `daisy-card-testimonial`
- `daisy-card-with-slots`
- `daisy-divider`
- `daisy-drawer`
- `daisy-hero-centered`
- `daisy-hero-with-figure`
- `daisy-hero-with-figure-slots`
- `daisy-list`
- `theme_controller`
- `theme_controller_circles`
- `theme_controller_toggle`

## Installation

```bash
# In your Astro project
npm install github:Juc1/daisyui-astro
```

Or for local development:

```json
"dependencies": {
  "daisyui-astro": "file:../daisyui-astro"
}
```

## License

MIT
