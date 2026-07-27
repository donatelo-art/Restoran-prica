# Restoran Priča - Premium Danube River Seafood Restaurant Website

A stunning, production-ready website for Restoran Priča, a luxury seafood restaurant located on the Danube river in Novi Banovci, Serbia. This website rivals the digital presence of top-tier global seafood restaurants like Le Bernardin, Elkano, and Angler.

## 🌟 Features

### Design Excellence
- **Premium Color Palette**: Deep river blues, warm sand tones, crisp creams - inspired by Danube luxury
- **Sophisticated Typography**: Playfair Display (headlines) + Inter (body) - elegance meets readability
- **Responsive Design**: Flawless experience from mobile to desktop
- **Smooth Animations**: Subtle, purposeful motion via Framer Motion

### Website Sections
- **Hero**: Full-screen impact with animated background elements
- **About (O Nama)**: Compelling story of tradition, river, and culinary passion
- **Menu Preview**: Showcase of signature river fish and seafood dishes
- **Gallery**: Visual storytelling of ambiance and culinary artistry
- **Reservations**: Premium call-to-action with contact information
- **Footer**: Complete information architecture and social links

### Content
- **Fully in Serbian**: Authentic Serbian language (Cyrillic) throughout
- **Premium Copywriting**: Mouth-watering descriptions of river fish, seafood, and local wines
- **Cultural Authenticity**: Highlights Danube location, traditional recipes, local wineries

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
restoran-prica/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── Navigation.tsx      # Fixed header with logo & menu
│   ├── Hero.tsx            # Full-screen hero section
│   ├── About.tsx           # O Nama section with story
│   ├── MenuPreview.tsx     # Menu showcase (6 items)
│   ├── Gallery.tsx         # Image gallery with hover effects
│   ├── Reservations.tsx    # Reservation CTA section
│   └── Footer.tsx          # Complete footer with links
├── tailwind.config.ts      # Tailwind configuration with custom colors
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── DESIGN_SYSTEM.md        # Complete design documentation
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Danube Blue**: #3d8ac9 (primary, trust, premium)
- **Sand Warm**: #d4a574 (luxury, warmth, accents)
- **Cream**: #f5e6d3 (elegance, readability)
- **Dark Background**: #0f2d3c (hero, sophistication)

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design documentation.

### Typography
- **Display**: Playfair Display (elegant, high-end)
- **Body**: Inter (clean, modern, readable)

### Responsive Breakpoints
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.2
- **Styling**: Tailwind CSS 3 with custom theme
- **Animation**: Framer Motion 10
- **Language**: TypeScript
- **Images**: Unsplash (via Next.js Image optimization)

## ✨ Key Components

### Hero Component
```tsx
// Full-screen hero with:
// - Animated background elements
// - Compelling headline & subheadline
// - Dual CTA buttons
// - Scroll indicator
```

### MenuPreview Component
```tsx
// Showcases 6 signature dishes:
// - Category tags
// - High-quality images
// - Descriptions in Serbian
// - Pricing
// - Hover effects
```

### Interactive Features
- Smooth scroll navigation
- Hover animations on cards and buttons
- Scroll-trigger reveals
- Responsive mobile menu
- Image zoom on hover

## 📱 Responsive Features

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly buttons and spacing
- Optimized typography scaling
- Hamburger menu for mobile navigation

## 🌐 SEO & Metadata

- Server-side metadata in layout
- Open Graph tags for social sharing
- Semantic HTML structure
- Optimized images with alt text
- Locale: sr_RS (Serbian)

## 📝 Serbian Copywriting Highlights

### Hero Section
- **Headline**: "Priča Danube"
- **Subheadline**: "Где се река среща са кулинарском страшћу..."
- **Description**: Sensory experience of Danube dining

### About Section
- **Title**: "О нама"
- **Story**: History of tradition, river connection, culinary passion
- **Features**: Fresh fish, premium wines, open kitchen

### Menu Section
- **Signature Dishes**: Šaran, Som, Smuđ, Pastrmka, Lignje
- **Categories**: River fish, Seafood, Meat dishes, Soups
- **Descriptions**: Evocative, sensory language

### Reservations
- **CTA**: "Резервишите вашу вечер"
- **Contact**: Phone + Email
- **Hours & Info**: Location, capacity, reservation policy

## 🎯 Design Principles

1. **Elegance Over Complexity**: Clean, spacious design
2. **Authenticity**: Local language, culture, pride
3. **Premium Feel**: Luxury without being ostentatious
4. **Performance**: Smooth animations, optimized images
5. **Accessibility**: Clear hierarchy, readable text, semantic HTML
6. **Responsiveness**: Works perfectly on all devices

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages + Build Action
- Traditional hosting with Node.js support

## 📊 Performance Optimizations

- Next.js Image optimization
- CSS Grid/Flexbox (no heavy layouts)
- GPU-accelerated animations (transform, opacity)
- Lazy loading of below-fold content
- Minimal JavaScript bundle
- Font loading optimization

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📄 License

Created for Restoran Priča © 2024-2025

## 👨‍💼 Credits

**Design & Development**: World-class UI/UX Designer, Master Copywriter, Expert Full-Stack Developer
- Specializing in Next.js, React, and Tailwind CSS
- Premium, high-end restaurant websites
- Serbian language & culture expertise

---

**Built with ❤️ for Restoran Priča on the Danube River**

*Experience luxury. Feel the breeze. Taste the tradition.*
