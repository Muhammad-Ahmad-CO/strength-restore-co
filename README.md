# Movement Reclaimed

PRD: Dr. Ayesha Raees – Physiotherapy Website
1. Project Overview
A clean, modern single-page hero website for Dr. Ayesha Raees, a professional physiotherapist. The site serves as a digital front door—building trust, communicating core value, and driving patient consultations through a minimal, video-led design.

2. Target Audience
Individuals recovering from injuries, surgeries, or chronic pain

Athletes seeking performance rehab

Elderly patients needing mobility support

Caregivers and family members researching treatment options

3. Core Objectives
Objective	Success Metric
Establish credibility & trust	Low bounce rate, high time-on-page
Communicate service clarity in <5 seconds	Clear headline comprehension
Drive consultation bookings	CTA click-through rate
Reflect a premium, empathetic brand	User feedback & brand perception
4. Key Features (MVP – Phase 1)
Fullscreen autoplay background video (muted, looped) showing rehabilitation / movement

Minimal pill-style centered navbar with logo and navigation links

Bottom-left hero content: badge, headline, subtext, CTA

Subtle micro-interactions (hover arrow shifts, CTA fill transition)

Fully responsive across mobile, tablet, and desktop

Accessible semantic HTML with proper contrast ratios

5. Doctor Profile
Field	Detail
Name	Dr. Ayesha Raees
Specialization	Physiotherapy & Rehabilitation
Brand Voice	Warm, professional, empowering
Key Message	Restore strength, reclaim movement
6. Technical Stack
Layer	Technology
Framework	React 18 + TypeScript
Build Tool	Vite
Styling	Tailwind CSS 3
Icons	Lucide React
Hosting	CloudFront (video asset) + any static host
Fonts	System font stack (no external fonts)
7. Design Specifications
Element	Specification
Page Background	#f0f0ee
Pill Background	#ededed
Accent Color	blue-500 / blue-600 / blue-400
Text Colors	gray-900 (headlines), gray-700 (nav), gray-400 (subtext)
Navbar	Centered, two separate pill containers
Hero Content	Bottom-left aligned, max-width constrained
CTA	Rounded-full pill, outline → filled on hover
Transitions	200ms ease on all interactive elements
8. Content (Hero Section)
Badge: "Trusted Physiotherapy by Dr. Ayesha Raees"

Headline: "Expert physiotherapy care designed to restore your strength and mobility."

Subtext: "Reclaim your movement. Start your healing journey with Dr. Ayesha Raees."

CTA: "Book a consultation →"

9. Navigation Links
Story

Products (→ Services)

Help (→ FAQs)

Support (→ Contact)

10. Browser & Device Support
Chrome, Firefox, Safari, Edge (latest 2 versions)

iOS Safari, Android Chrome

Breakpoints: sm (640px), md (768px), lg (1024px)

11. Future Phases (Out of Scope for MVP)
Multi-page routing (About, Services, Contact)

Online booking integration (Calendly / custom)

Blog / resources section

Testimonials carousel

Supabase backend for form submissions

Now, here's the complete Vite + React + TypeScript + Tailwind CSS project:

Project Structure
text
physio-website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── index.css
    └── App.tsx
File-by-File Code
package.json
json
{
  "name": "dr-ayesha-raees-physio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.400.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.3",
    "vite": "^5.3.4"
  }
}
index.html
html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dr. Ayesha Raees – Physiotherapy & Rehabilitation</title>
    <meta name="description" content="Expert physiotherapy care by Dr. Ayesha Raees. Restore your strength and reclaim your movement." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
vite.config.ts
typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
tsconfig.json
json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
tsconfig.app.json
json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
tsconfig.node.json
json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["vite.config.ts"]
}
postcss.config.js
javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
tailwind.config.js
javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
src/index.css
css
@tailwind base;
@tailwind components;
@tailwind utilities;
src/main.tsx
typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    ,
)
src/App.tsx
tsx
function App() {
  return (
    


      {/* Background Video */}
      

      {/* Foreground Content */}
      


        {/* Navbar */}
        
          {/* Logo Pill */}
          


            
          



          {/* Nav Links Pill */}
          


            {['Story', 'Services', 'FAQs', 'Contact'].map((link) => (
              
                {link}
              
            ))}
          


        

        {/* Hero Content – bottom-left aligned */}
        


          


            {/* Badge */}
            
              Trusted Physiotherapy by Dr. Ayesha Raees
              
                →
              
            

            {/* Headline */}
            


              Expert physiotherapy care designed to restore your strength and mobility.
            



            {/* Subtext */}
            


              Reclaim your movement. Start your healing journey with Dr. Ayesha Raees.
            



            {/* CTA */}
            
              Book a consultation
              
                →
              
            
          


        


      


    


  )
}

/** Inline SVG Logo Component */
function Logo() {
  return (
    
      
    
  )
}

export default App
Setup Instructions
bash
# 1. Create the project folder and navigate into it
mkdir physio-website && cd physio-website

# 2. Create all files above in their correct paths

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev

# 5. Open http://localhost:5173 in your browser
Summary of Changes for Dr. Ayesha Raees
Original (Prosthetics)	Adapted (Physiotherapy)
"Seen on Shark Tank in India"	"Trusted Physiotherapy by Dr. Ayesha Raees"
"Simple, smart prosthetics made for people who keep fighting."	"Expert physiotherapy care designed to restore your strength and mobility."
"Reclaim your movement now."	"Reclaim your movement. Start your healing journey with Dr. Ayesha Raees."
"Try a free fitting"	"Book a consultation"
Nav: Story, Products, Help, Support	Nav: Story, Services, FAQs, Contact
The entire design system, video background, layout, animations, and responsive breakpoints remain identical to the provided specifications—only the content has been tailored for a physiotherapy practice led by Dr. Ayesha Raees.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://strength-restore-co.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/29bb2b28-2f09-4a39-98fd-8e5815a55959).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
