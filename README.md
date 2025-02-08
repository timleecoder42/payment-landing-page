# Payment Landing Page

A modern and responsive payment landing page with multi-language support. Built with v0.dev, Next.js and Tailwind CSS.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- next-intl (i18n)

## Features

- 🌐 Multi-language support
- 🎨 Modern UI with shadcn components
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎭 Interactive UI elements

## Supported Languages

- 🇺🇸 English (en)
- 🇦🇷 Spanish (Argentina) (es-AR)
- 🇨🇳 Chinese Simplified (zh-CN)
- 🇹🇼 Chinese Traditional (zh-TW)
- 🇯🇵 Japanese (ja)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Project Structure

- `/components` - UI components
- `/lib` - Utilities and helpers
- `/app` - Next.js app router pages
- `/messages` - Translation files for each language

## i18n Routing

The application uses Next.js 14's app router with next-intl for internationalization. URLs are structured as:

- `/en/*` - English
- `/es-AR/*` - Spanish (Argentina)
- `/zh-CN/*` - Simplified Chinese
- `/zh-TW/*` - Traditional Chinese
- `/ja/*` - Japanese

Default locale is set to English (`en`).
