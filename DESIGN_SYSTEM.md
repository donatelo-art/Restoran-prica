# Restoran Priča - Design System & Architecture

## 🎨 Color Palette

### Primary Colors
The color palette is inspired by the Danube River and premium dining aesthetics.

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Danube Deep Blue** | #3d8ac9 | 61, 138, 201 | Primary CTA, Navigation, Accents |
| **Danube Dark** | #0f2d3c | 15, 45, 60 | Hero Background, Text |
| **Sand Warm** | #d4a574 | 212, 165, 116 | Secondary CTA, Dividers, Premium Accents |
| **Cream Light** | #f5e6d3 | 245, 230, 211 | Text on Dark, Soft Backgrounds |
| **White** | #ffffff | 255, 255, 255 | Primary Background, Cards |

### Color Usage Guidelines
- **Danube Blue**: Primary actions, trust, premium feel, river connection
- **Sand Warm**: Luxury, warmth, wood tones, secondary actions
- **Cream**: Elegance, readability on dark backgrounds, soft luxury
- **White**: Clean, spacious, premium quality feel

## 🔤 Typography

### Font Stack
- **Display Font**: Playfair Display (Serif)
  - Headlines (H1-H3)
  - Premium, elegant, high-end restaurant feel
  - Weights: 400, 500, 600, 700

- **Body Font**: Inter (Sans-serif)
  - Body text, navigation, UI elements
  - Clean, modern, highly readable
  - Weights: 300, 400, 500, 600, 700

### Type Scale
- **H1**: 80px (lg) / 56px (md) / 40px (sm)
- **H2**: 64px (lg) / 48px (md) / 36px (sm)
- **H3**: 48px (lg) / 32px (md) / 28px (sm)
- **Body Large**: 18px / 20px
- **Body**: 16px / 18px
- **Small**: 14px / 16px

### Line Height
- Headlines: 1.2 (tight, elegant)
- Body: 1.6-1.8 (readable, spacious)

## 🏗️ Website Architecture

### Sitemap
```
Home (/)
├── Hero Section
├── About Section (O Nama)
├── Menu Preview (Meni)
├── Gallery (Galerija)
├── Reservations (Rezervacije)
└── Footer
```

### Component Structure
```
App
├── Layout
├── Navigation (Fixed Header)
├── Hero
├── About
├── MenuPreview
├── Gallery
├── Reservations
├── Footer
└── Global Styles
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 0-640px (default)
- **Tablet**: 641-1024px
- **Desktop**: 1025px+

### Grid System
- Mobile: 1 column
- Tablet: 2 columns (menu), 3 columns (gallery)
- Desktop: 3 columns (menu), 4 columns (gallery)

## ✨ Animation & Motion

### Animation Principles
- **Subtle Elegance**: Animations enhance, not distract
- **Performance**: GPU-accelerated transforms only
- **Purposeful Motion**: Every animation has UX intent

### Key Animations
- **Fade In**: 0.8s ease-out (content entry)
- **Slide Up**: 0.8s ease-out (element entry)
- **Float**: 6s ease-in-out (ambient movement)
- **Scale**: 0.3s ease-out (interaction feedback)
- **Hover Effects**: 0.3s smooth transitions

### Framer Motion Usage
- Container animations with staggered children
- Scroll-trigger animations (whileInView)
- Hover states for interactive elements
- Page transitions and scroll reveals

## 🎯 Key Sections Details

### Hero Section
- Full viewport height (100vh)
- Gradient background: Danube dark to medium
- Animated background elements (floating shapes)
- Centered content with scroll indicator
- Calls-to-action: Reservation button + Menu explore

**Serbian Copy:**
- Headline: "Priča Danube"
- Subheadline: "Где се река среща са кулинарском страшћу..."
- CTA: "Резервишите сто" / "Истраживајте мени"

### About Section
- Two-column layout (text + gallery grid)
- Premium imagery showcasing ambiance
- Feature cards highlighting USPs
- Emotional storytelling in Serbian
- Call-to-learn-more button

### Menu Preview
- 6-item showcase (2 categories highlighted)
- Card layout with hover effects
- Image, category tag, description, price
- "View Full Menu" CTA

### Gallery Section
- Masonry-style grid layout
- Mix of large focal images and smaller accents
- Category labels on hover
- "Follow on Instagram" CTA

### Reservations Section
- Dark background with decorative elements
- Contact information prominently displayed
- Dual CTA: Online booking + Phone
- Business hours and capacity info

## 🎨 Design Tokens

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Border Radius
- Small: 8px
- Medium: 12px
- Large: 16px
- Extra Large: 24px

### Shadows
- Small: 0 2px 4px rgba(0,0,0,0.1)
- Medium: 0 10px 25px rgba(0,0,0,0.15)
- Large: 0 20px 40px rgba(0,0,0,0.2)

### Transitions
- Fast: 0.2s
- Standard: 0.3s
- Slow: 0.5s
- Very Slow: 0.8s

## 🌍 Localization

### Language
- Primary: Serbian (Cyrillic)
- All UI text in Serbian
- Authentic local terminology

### Cultural Considerations
- River and Danube references
- Traditional Serbian dishes and wines
- Local pride and authenticity
- Warmth and hospitality values

## 📊 SEO & Metadata

### Meta Tags
- Title: "Restoran Priča - Luxury Danube River Seafood Restaurant"
- Description: Premium dining experience on the Danube
- OG Image: Hero section screenshot
- Locale: sr_RS

### SEO Keywords
- Seafood restaurant Danube
- Fine dining Serbia
- Novi Banovci restaurant
- Premium river dining

## 🔧 Technical Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Language**: TypeScript

### Performance
- Image optimization with srcset
- CSS Grid/Flexbox for layout
- Lazy loading of below-fold content
- Smooth scroll behavior
- Hardware-accelerated animations

### Browser Support
- Chrome/Edge (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

### Voice & Tone
- **Exclusive**: Premium, not stuffy
- **Warm**: Welcoming, authentic
- **Authentic**: Local, genuine, unpretentious
- **Mouth-watering**: Descriptive, sensory, evocative

### Writing Style
- Short, impactful sentences
- Sensory language (taste, smell, see, feel)
- Personal, story-driven
- Local terminology and pride
- English-minimal (fully Serbian)

---

**Design Lead**: World-class UI/UX Designer + Master Copywriter
**Built with**: Next.js, React, Tailwind CSS, Framer Motion
**Year**: 2024-2025
