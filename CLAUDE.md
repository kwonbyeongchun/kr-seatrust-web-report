# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vite + React 19 presentation slide application for SeaTrust MSAL project completion report. A keyboard and mouse-navigable slideshow with 14 slides covering technical implementation, architecture, and results.

**Key Features**:
- 16:9 aspect ratio slides
- Viewport height-based responsive typography
- Common slide component architecture
- Keyboard, button, and thumbnail navigation
- Dark theme with Linear design system

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

- `src/components/Slide.jsx` - **Common slide wrapper component**
  - Provides consistent slide structure and styling
  - Accepts `number` prop for slide numbering
  - Accepts `children` for slide content
  - Accepts optional `className` for additional styling

- `src/components/InfoBox.jsx` - **Reusable info box component**
  - Used for structured information display (e.g., 3-column layouts)
  - Accepts `title` prop for box heading (required)
  - Accepts `items` prop for list content (optional array)
  - If no items provided, displays empty placeholder
  - Usage: `<InfoBox title="Title" items={['item1', 'item2']} />`

- `src/components/SlideNavigation.jsx` - **Navigation controls component**
  - Handles Previous/Next buttons and page indicator
  - Accepts `currentSlide`, `totalSlides`, `onPrevious`, `onNext` props
  - Auto-disables buttons at slide boundaries

- `src/slides/` - Individual slide components
  - Each slide uses the common `Slide` component wrapper
  - Import pattern: `import Slide from '../components/Slide';`
  - Usage: `<Slide number={N}>{content}</Slide>`
  - Fully self-contained presentation components

### Navigation System

Three navigation methods implemented:
1. **Keyboard**: ArrowLeft/ArrowRight/Space keys (event listener in App.jsx:37-48)
2. **Navigation buttons**: Previous/Next buttons with disabled states at boundaries
3. **Thumbnail bar**: Click any thumbnail (1-12) to jump directly to that slide

### Adding New Slides

1. Create slide component in `src/slides/SlideN.jsx`:
```jsx
import Slide from '../components/Slide';

const SlideN = () => {
  return (
    <Slide number={N}>
      <h1>Your Content</h1>
      {/* Add your slide content here */}
    </Slide>
  );
};
export default SlideN;
```

2. Register in `src/App.jsx`:
   - Import: `import SlideN from './slides/SlideN';`
   - Add to slides array: `const slides = [..., SlideN];`

### Styling & Responsive Design

**Slide Aspect Ratio**: Fixed 16:9 ratio maintained across all viewport sizes

**Responsive Font System**: All font sizes scale proportionally with viewport height using `clamp()` function
- Ensures consistent readability across different screen sizes
- Prevents text from being too small or too large
- Typography scales automatically based on slide height

Font size formula: `clamp(min, preferred-vh, max)`
- `h1`: `clamp(1.5rem, 4.5vh, 3.5rem)` - Main titles
- `h2`: `clamp(1.25rem, 3.5vh, 2.5rem)` - Subtitles
- `h3`: `clamp(0.875rem, 2vh, 1.5rem)` - Section headings
- `p`: `clamp(0.75rem, 1.6vh, 1.125rem)` - Body text
- `li`: `clamp(0.7rem, 1.5vh, 1.05rem)` - List items
- `.slide-number`: `clamp(0.625rem, 1.2vh, 0.875rem)` - Slide indicators
- Navigation elements: `clamp(0.75rem, 1.4vh, 1rem)` - Buttons and controls
- **InfoBox component**: Uses default slide text sizes
  - `.info-box h3`: `clamp(0.875rem, 2vh, 1.5rem)` - Same as h3
  - `.info-box li`: `clamp(0.7rem, 1.5vh, 1.05rem)` - Same as li

**Layout Components**:
- `.three-column-layout` - Flex container for 3-column info box layouts
  - Used with InfoBox components for structured information display
  - Gap and spacing scale responsively with viewport height
  - Example: Slide 3 uses this for System Architecture, Deployment, and Project Management

**Styling Files**:
- `src/App.css` - Slide container, navigation controls, thumbnails, responsive typography, layout components
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
