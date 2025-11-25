# WildSafe Defense - Next.js Application

A high-performance Next.js 15 clone of the original React application, optimized for speed, SEO, and mobile devices.

## 🚀 Features

- **Next.js 15** with App Router
- **Static Site Generation** for all pages (instant loading)
- **Optimized Images** with next/image (automatic AVIF/WebP)
- **Font Optimization** with next/font
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Mobile-First** responsive design
- **Lightweight Bundle** (~126 kB first load)

## 📁 Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── globals.css         # Design system & CSS variables
│   ├── page.tsx            # Home page
│   ├── product/            # Product page
│   ├── get-protected/      # Get Protected page
│   └── faq/                # FAQ page
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer
│   ├── HeroSection.tsx
│   ├── WhyActiveDefense.tsx
│   ├── FeatureGrid.tsx
│   ├── FAQSnapshot.tsx
│   ├── FAQAccordion.tsx
│   ├── CTASection.tsx
│   ├── ProductHero.tsx
│   ├── HalfPageSplit.tsx
│   ├── SpecsGrid.tsx
│   ├── ProductFeatures.tsx
│   ├── HorizontalTimeline.tsx
│   ├── PricingCards.tsx
│   ├── ContactForm.tsx
│   └── VerticalTimeline.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    ├── images/             # Optimized images
    ├── wildsafe-horizontal.png
    ├── wildsafe-vertical.png
    ├── wildsafe-logo-white.svg
    └── wildsafe-tank-logo.png
```

## 🛠️ Commands

```bash
# Development server with Turbopack (faster builds)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking & linting
npm run lint
```

## 📊 Performance Metrics

- **First Load JS**: ~126 kB (very lightweight)
- **Build Time**: ~1.4s (Turbopack optimized)
- **All Pages Static**: Pre-rendered at build time for instant loading
- **Image Optimization**: Automatic AVIF/WebP conversion

## 🎨 Design System

The app uses a custom design system with:
- HSL-based color palette
- Light/dark mode support
- Consistent spacing and typography
- Custom elevation system for interactions
- Mobile-first breakpoints

## 📱 Pages

### Home (`/`)
- Hero section with background image
- "Why Active Defense" section with cards
- Feature grid with 4 key features
- FAQ snapshot with accordion
- CTA section with countdown to July

### Product (`/product`)
- Product hero with tank logo
- "How It Works" section
- Key specifications grid
- Product features (Fast, Off-Grid, Integrated)
- 60-day installation timeline
- Pricing cards (Basic vs Pro)
- Product FAQ
- Final CTA section

### Get Protected (`/get-protected`)
- Hero section
- Contact form for site assessment
- Vertical timeline (5 steps)
- Service area section with map

### FAQ (`/faq`)
- Hero section
- Complete FAQ accordion (13 questions)

## 🔧 Key Optimizations

1. **Server Components by Default**: Most components are Server Components for zero JavaScript overhead
2. **Client Components Only Where Needed**: Navigation (interactivity), ContactForm (form handling)
3. **Static Generation**: All pages pre-rendered at build time
4. **Image Optimization**: next/image with automatic format conversion
5. **Font Optimization**: next/font with display:swap
6. **Bundle Optimization**: optimizePackageImports for lucide-react

## 🆚 Improvements Over Original React App

| Feature | React App | Next.js App |
|---------|-----------|-------------|
| **Rendering** | Client-side only | Static + hydration |
| **Initial Load** | Full React bundle | Minimal JS (126 kB) |
| **Images** | Standard `<img>` | next/image (optimized) |
| **Routing** | wouter (client) | File-based (static) |
| **SEO** | Limited | Built-in metadata |
| **Bundle Size** | ~300+ kB | ~126 kB |
| **Build Time** | Vite (~3s) | Next (~1.4s) |

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- **No Database**: All content is static (no Drizzle/DB needed)
- **No API Routes**: All data is hardcoded in pages
- **Form Handling**: ContactForm logs to console (no backend integration)
- **Mobile Optimized**: All components are mobile-first responsive

## 🚀 Deployment

This app can be deployed to:
- **Vercel** (recommended, zero-config)
- **Netlify**
- **AWS Amplify**
- **Any static host** (build output is in `.next/`)

For Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

Same as original project.
