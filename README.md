# 🏥 Strength Restore Co – Dr. Ayesha Raees Physiotherapy

> **Expert physiotherapy care designed to restore your strength and mobility.**  
> Reclaim your movement. Start your healing journey with Dr. Ayesha Raees.

![TypeScript](https://img.shields.io/badge/TypeScript-96.3%25-3178c6?style=flat-square)
![React](https://img.shields.io/badge/React%2018-Modern%20Web-61dafb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38b2ac?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📋 Project Overview

**Strength Restore Co** is a modern, responsive physiotherapy practice website built for **Dr. Ayesha Raees**, a specialized physiotherapist dedicated to helping patients recover from injuries, surgeries, and chronic conditions.

This is a **premium, single-page hero website** that serves as a digital front door—building trust, communicating specialized services, and converting visitors into consultation bookings.

### 🎯 Key Objectives

| Objective | Success Metric |
|-----------|---|
| **Establish Credibility & Trust** | Low bounce rate, high time-on-page engagement |
| **Communicate Services in <5 Seconds** | Clear headline comprehension & value proposition |
| **Drive Consultation Bookings** | CTA click-through rate & conversion tracking |
| **Reflect Premium Brand** | Professional design, empathetic messaging, accessibility |

---

## 👥 Target Audience

- 🏃 **Athletes** seeking performance rehabilitation
- 🤕 **Injury Patients** recovering from accidents or surgeries
- 👵 **Elderly Patients** needing mobility support & pain management
- 💪 **Chronic Pain Sufferers** looking for evidence-based treatment
- 👨‍👩‍👧 **Caregivers & Family Members** researching treatment options

---

## ✨ Core Features

### 🎬 Immersive Design
- **Fullscreen autoplay background video** (muted, looped) showing rehabilitation & movement
- Subtle micro-interactions and smooth hover transitions
- Premium pill-style navigation with minimal design language

### 📱 Fully Responsive
- Mobile-first approach with seamless tablet and desktop experiences
- Optimized breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-friendly navigation and CTAs

### ♿ Accessibility First
- Semantic HTML with proper ARIA labels
- WCAG 2.1 AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader optimized

### ⚡ Performance Optimized
- Lightweight footprint with minimal dependencies
- System font stack (no external font loading delays)
- Optimized video assets via CloudFront CDN
- Fast initial load times with Vite

---

## 🏢 Professional Profile

| Field | Details |
|-------|---------|
| **Name** | Dr. Ayesha Raees |
| **Specialization** | Physiotherapy & Rehabilitation Medicine |
| **Brand Voice** | Warm, professional, empowering, evidence-based |
| **Core Message** | "Restore Strength. Reclaim Movement. Reclaim Life." |
| **Approach** | Patient-centered, holistic rehabilitation |

---

## 🛠 Technical Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.2.0 |
| **Language** | TypeScript | 5.8.3 |
| **Build Tool** | Vite | 7.3.1 |
| **Styling** | Tailwind CSS | 4.2.1 |
| **UI Components** | Radix UI | Latest |
| **Icons** | Lucide React | 0.575.0 |
| **Routing** | TanStack Router | 1.168+ |
| **Forms** | React Hook Form + Zod | Latest |
| **Charts** | Recharts | 2.15.4 |
| **Hosting** | CloudFront + Static | AWS CDN |

---

## 🎨 Design System

### Color Palette
```
Primary:      #3b82f6 (Blue-500)
Secondary:    #1e40af (Blue-600)
Accent:       #60a5fa (Blue-400)
Background:   #f0f0ee (Warm Gray)
Pill/Surface: #ededed (Light Gray)
Text Primary: #111827 (Gray-900)
Text Nav:     #374151 (Gray-700)
Text Muted:   #9ca3af (Gray-400)
```

### Typography
- **Headlines:** Gray-900, Bold, System Font
- **Body Text:** Gray-700, Regular, System Font
- **Subtext:** Gray-400, Regular, System Font

### Interactive Elements
- **Pill-style buttons** with rounded-full padding
- **Outline → Filled transition** on hover (200ms ease)
- **Smooth micro-interactions** on all interactive elements
- **Arrow icons** that shift on hover for engagement

---

## 🗂 Project Structure

```
strength-restore-co/
├── index.html                 # Entry point with SEO meta tags
├── package.json              # Dependencies & scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript root config
├── tsconfig.app.json         # Application TypeScript settings
├── tsconfig.node.json        # Node TypeScript settings
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS & autoprefixer config
└── src/
    ├── main.tsx              # React application entry
    ├── index.css             # Global Tailwind styles
    ├── App.tsx               # Main application component
    └── components/           # Reusable UI components
        ├── Navbar.tsx        # Navigation bar
        ├── Hero.tsx          # Hero section
        ├── CTA.tsx           # Call-to-action buttons
        └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Muhammad-Ahmad-CO/strength-restore-co.git
cd strength-restore-co

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm build

# Build for development
npm run build:dev

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint

# Format code with Prettier
npm run format
```

---

## 📝 Navigation & Content

### Navbar Links
- **Story** → About Dr. Ayesha & her journey
- **Services** → Detailed physiotherapy services
- **FAQs** → Common questions & answers
- **Contact** → Booking & support channels

### Hero Section Content

**Badge:** "Trusted Physiotherapy by Dr. Ayesha Raees"

**Headline:** "Expert physiotherapy care designed to restore your strength and mobility."

**Subtext:** "Reclaim your movement. Start your healing journey with Dr. Ayesha Raees."

**CTA:** "Book a consultation →"

---

## 🌐 Browser & Device Support

✅ **Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)  
✅ **Mobile:** iOS Safari, Android Chrome  
✅ **Tablets:** Full responsive optimization  
✅ **Accessibility:** WCAG 2.1 AA compliant

---

## 📊 SEO & Meta Tags

```html
<title>Dr. Ayesha Raees – Physiotherapy & Rehabilitation</title>
<meta name="description" 
      content="Expert physiotherapy care by Dr. Ayesha Raees. Restore your strength and reclaim your movement." />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🔄 CI/CD & Deployment

### Automated Workflow
- Push to `main` branch triggers build
- Automatic deployment to CloudFront CDN
- Code stays in sync with Lovable editor
- Full version control & rollback capability

### Build Process
```bash
# TypeScript compilation + Vite bundling
npm run build

# Outputs optimized static files to /dist
```

---

## 🗺 Roadmap (Future Phases)

### Phase 2: Multi-Page Experience
- [ ] Full About page with Dr. Raees' credentials
- [ ] Detailed Services catalog with pricing
- [ ] Success stories & patient testimonials
- [ ] Blog/Resources section

### Phase 3: Booking & Backend
- [ ] Integration with Calendly or custom booking system
- [ ] Online consultation scheduling
- [ ] Supabase backend for form submissions
- [ ] Email notifications for inquiries

### Phase 4: Advanced Features
- [ ] Patient portal for tracking progress
- [ ] Video tutorials for home exercises
- [ ] Testimonials carousel
- [ ] Insurance & payment integration

---

## 🔒 Privacy & Compliance

- ✅ GDPR compliant (if EU visitors)
- ✅ CCPA compliant (if California visitors)
- ✅ Medical information handled securely
- ✅ Privacy policy & Terms of Service (coming soon)

---

## 📦 Built With Lovable

This project was created and is maintained with [Lovable](https://lovable.dev), an AI-powered development platform.

**Live Application:** [strength-restore-co.lovable.app](https://strength-restore-co.lovable.app)

### Development Workflow
- **Local Development:** Clone, modify, commit to GitHub
- **Cloud Development:** Use [Lovable Editor](https://lovable.dev/projects/29bb2b28-2f09-4a39-98fd-8e5815a55959)
- **Sync:** All changes automatically sync to both local and cloud
- **Deploy:** Push to GitHub, auto-deploy to production

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- 📧 **Email:** contact@strength-restore-co.com
- 🌐 **Website:** [strength-restore-co.lovable.app](https://strength-restore-co.lovable.app)
- 💬 **Issues:** [GitHub Issues](https://github.com/Muhammad-Ahmad-CO/strength-restore-co/issues)

---

## 🙏 Acknowledgments

- **Dr. Ayesha Raees** for her vision and expertise
- **Lovable** platform for AI-assisted development
- **React & TypeScript** community for excellent tooling
- **Tailwind CSS** for modern styling approach
- **Radix UI** for accessible component primitives

---

<div align="center">

**Built with ❤️ for better physiotherapy care**

*Restore strength. Reclaim movement. Reclaim life.*

</div>
