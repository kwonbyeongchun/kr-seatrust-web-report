# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vite + React 19 presentation slide application for SeaTrust MSAL project completion report. A keyboard and mouse-navigable slideshow with 12 slides covering project overview, technical implementation, architecture, and results.

## Development Commands

### Local Development
```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build to dist/
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Architecture

### Application Structure

**Core Pattern**: Simple state-driven slide deck with component-based slides.

- `src/App.jsx` - Main application controller
  - Manages `currentSlide` state (0-indexed)
  - Handles keyboard navigation (ArrowLeft/ArrowRight/Space)
  - Renders active slide component + navigation UI
  - Contains slides array registry

- `src/slides/` - Individual slide components
  - Each slide is a functional component (e.g., `Slide1.jsx`)
  - Standard structure: `<div className="slide">` wrapper with `slide-number` and content
  - No props passed; fully self-contained presentation components

### Navigation System

Three navigation methods implemented:
1. **Keyboard**: ArrowLeft/ArrowRight/Space keys (event listener in App.jsx:37-48)
2. **Navigation buttons**: Previous/Next buttons with disabled states at boundaries
3. **Thumbnail bar**: Click any thumbnail (1-12) to jump directly to that slide

### Adding New Slides

1. Create slide component in `src/slides/SlideN.jsx`:
```jsx
const SlideN = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide N</div>
      <h1>Your Content</h1>
    </div>
  );
};
export default SlideN;
```

2. Register in `src/App.jsx`:
   - Import: `import SlideN from './slides/SlideN';`
   - Add to slides array: `const slides = [..., SlideN];`

### Styling

- `src/App.css` - Slide container, navigation controls, thumbnails
- `src/index.css` - Global styles using Linear design theme
- `linear.json` - **Design theme source** (Linear.app design system)

## Design System (Linear Theme)

This project uses the Linear.app design system extracted to `linear.json`. Key design tokens:

### Colors
- **Background**: `#08090a` (primary), `#1c1c1f` (secondary), `#232326` (tertiary)
- **Text**: `#f7f8f8` (primary), `#d0d6e0` (secondary), `#8a8f98` (tertiary)
- **Brand**: `#5e6ad2` (primary indigo), `#7170ff` (accent)
- **Borders**: `#23252a` (primary), subtle low-contrast style
- **Status colors**: red `#eb5757`, orange `#fc7840`, yellow `#f2c94c`, green `#4cb782`, blue `#4ea7fc`

### Typography
- **Font family**: "Inter Variable" with fallbacks
- **Font weights**: Light (300), Normal (400), Medium (510), Semibold (590), Bold (680)
- **Title scales**: title1 (1.0625rem) → title9 (4.5rem)
- **Letter spacing**: Negative values (-.011em to -.022em) for better readability
- **Font features**: `"cv01", "ss03"` with optical sizing

### Layout & Spacing
- **Page padding**: 24px inline, 64px block
- **Border radius**: 4px, 6px, 8px, 12px, 16px, 24px, 32px
- **Shadows**: Layered, soft shadows with low opacity
- **Max widths**: Page (1024px), Prose (624px)

### Animations
- **Quick transition**: 0.1s (interactions)
- **Regular transition**: 0.25s (state changes)
- **Easing**: Cubic-bezier based (outQuad, outCubic, etc.)

### Design Principles
- Dark theme with subtle gradients
- Low-contrast borders for elegance
- Smooth animations with cubic-bezier easing
- Consistent spacing system
- Accessibility: 2px focus rings, 44px min tap size

## ESLint Configuration

Flat config format with React-specific rules:
- React Hooks rules enforced
- React Refresh for HMR
- Unused vars allowed if uppercase (pattern: `^[A-Z_]`)
