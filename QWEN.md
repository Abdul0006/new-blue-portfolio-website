# Qwen Code Project Context: TechAI.pk Portfolio

## Project Overview

This is a Next.js 15 portfolio website for Abdul Wahab, an AI Engineer, Developer & Marketer. The project was bootstrapped with `create-next-app` and uses TypeScript, Tailwind CSS, and various modern web technologies. It features a responsive design with dark/light theme support, animations with Framer Motion, and is built with the App Router architecture.

### Key Features:
- Responsive design with mobile navigation
- Dark/Light theme toggle with system preference detection
- SEO optimized with proper metadata and OpenGraph tags
- Form handling with Resend integration
- Supabase integration for backend services
- Animations and transitions with Framer Motion
- TypeScript type safety throughout

### Technologies Used:
- **Framework**: Next.js 15 (with Turbopack in development)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Heroicons and React Icons
- **Animations**: Framer Motion
- **Backend**: Supabase (database/auth)
- **Email**: Resend (for contact forms)
- **Font**: Google Fonts (Geist)
- **Linting**: ESLint
- **Build tool**: TypeScript compiler

## Project Structure

```
tech.ai/
├── public/                 # Static assets
│   ├── profile-pic.png     # Author's profile image
│   └── projects/           # Project-related images
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── api/           # API routes
│   │   ├── blogs/         # Blog section
│   │   ├── components/    # App-specific components
│   │   ├── contact/       # Contact page
│   │   ├── context/       # React context providers
│   │   ├── projects/      # Projects section
│   │   ├── services/      # Services section
│   │   ├── tutorials/     # Tutorials section
│   │   ├── favicon.ico
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   ├── contents/          # Content files
│   └── types/             # TypeScript type definitions
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── ...                    # Configuration files
```

## Building and Running

### Development
To run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
This runs the app in development mode with Turbopack at `http://localhost:3000`.

### Production Build
To build the application for production:
```bash
npm run build
```
This creates an optimized production build in the `.next/` directory.

### Starting Production Server
To start the production server:
```bash
npm run start
```

### Linting
To lint the code:
```bash
npm run lint
```

To automatically fix linting issues:
```bash
npm run lint:fix
```

## Development Conventions

### File Naming
- Components use PascalCase (e.g., `Navbar.tsx`)
- Pages and routes use lowercase with hyphens if needed
- All files use TypeScript (.tsx or .ts)

### Styling
- Tailwind CSS utility classes are used for styling
- CSS variables defined in globals.css for theme consistency
- Dark mode variants use the `dark:` prefix

### TypeScript Usage
- Strong typing is enforced throughout the project
- Custom type definitions are stored in the `src/types/` directory
- React component props are properly typed

### Component Architecture
- App-specific components are in `src/app/components/`
- Reusable components are in `src/components/`
- Context providers are in `src/app/context/`
- Page-level components are colocated with their respective routes

### Theme Management
- Theme state is managed via React Context API
- Theme preference is saved to localStorage
- System preference is respected by default
- Class `dark` is applied to html element to toggle dark styles

### Security Features
- Content Security Policy implemented in next.config.ts
- Referrer Policy: strict-origin-when-cross-origin
- X-Frame-Options: DENY
- HSTS with 2-year max-age
- Permissions-Policy restricting camera, microphone, geolocation

## Environment and Configuration

### Dependencies
Key dependencies include:
- `@heroicons/react` - Icon library
- `@supabase/supabase-js` - Database/auth services
- `framer-motion` - Animations
- `next` - React framework
- `react` and `react-dom` - Core React libraries
- `react-icons` - Additional icon sets
- `react-type-animation` - Animated text
- `resend` - Email service

### API Keys
The README includes Supabase API anonymous and project keys which may need to be moved to environment variables for security.

## Special Features

### Animations
- Framer Motion is used for smooth transitions and animations
- Mobile menu has animated opening/closing
- Theme switching has smooth transitions

### SEO
- Proper metadata in layout.tsx
- OpenGraph and Twitter card support
- Semantic HTML structure

### Accessibility
- Responsive design for all screen sizes
- Proper heading structure
- Semantic HTML elements
- Keyboard navigable components