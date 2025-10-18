# TechAI.pk - Personal Portfolio

This is the personal portfolio website for Abdul Wahab - AI Engineer, Developer & Marketer. Built with Next.js, TypeScript, Tailwind CSS, and deployed on Vercel.

## Features

- Responsive design with mobile-first approach
- Dark/Light theme toggle with system preference detection
- SEO optimized with proper metadata and OpenGraph tags
- Form handling with Resend integration
- Supabase integration for backend services
- Animations and transitions with Framer Motion
- TypeScript type safety throughout

## Tech Stack

- **Framework**: Next.js 15 (with Turbopack in development)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Heroicons and React Icons
- **Animations**: Framer Motion
- **Backend**: Supabase (database/auth)
- **Email**: Resend (for contact forms)
- **Font**: Google Fonts (Geist)

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

## Deployment

This application is designed to be deployed on Vercel. The `next.config.ts` file includes security headers appropriate for Vercel deployment.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - rapidly build modern websites
- [Supabase](https://supabase.com/docs) - open source Firebase alternative
- [Framer Motion](https://www.framer.com/motion/) - production-ready motion library for React

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
