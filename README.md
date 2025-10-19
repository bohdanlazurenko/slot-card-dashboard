# Slot Card Dashboard

A modern dashboard application built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates a clean and responsive dashboard layout using Radix UI's Slot component for flexible card compositions.

## Features

- 📊 Responsive dashboard grid layout
- 🎨 Modern UI with Tailwind CSS
- 🃏 Flexible card components using Radix UI Slot
- 📱 Mobile-first responsive design
- 🚀 Built with Next.js 14 App Router
- 🔒 TypeScript for type safety
- ✨ Clean and maintainable code structure

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI Slot
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
slot-card-dashboard/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts          # Health check endpoint
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main dashboard page
├── components/
│   ├── dashboard/
│   │   └── dashboard-grid.tsx     # Grid layout component
│   └── ui/
│       └── card.tsx               # Card component using Radix Slot
├── lib/
│   └── utils.ts                   # Utility functions
└── ...config files
```

## Architecture

### Card Component

The card component is built using Radix UI's Slot pattern, providing maximum flexibility in composition. It includes:

- `Card`: Main container with consistent styling
- `CardHeader`: Header section for titles and descriptions
- `CardTitle`: Typography for card titles
- `CardDescription`: Subtitle text
- `CardContent`: Main content area
- `CardFooter`: Footer section for actions

### Dashboard Grid

The `DashboardGrid` component provides a responsive grid layout that automatically adjusts based on screen size:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Large screens: 4 columns

### Main Dashboard

The main dashboard page showcases:
- Statistics cards with icons and trend indicators
- Overview section ready for chart integration
- Recent activity feed
- Responsive layout that works on all devices

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoint

The application includes a health check endpoint at `/api/ping` that returns:

```json
{
  "ok": true,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Customization

### Adding New Cards

To add new cards to the dashboard:

1. Import the Card components:
   ```tsx
   import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
   ```

2. Add your card to the DashboardGrid:
   ```tsx
   <Card>
     <CardHeader>
       <CardTitle>Your Title</CardTitle>
     </CardHeader>
     <CardContent>
       Your content here
     </CardContent>
   </Card>
   ```

### Styling

The project uses CSS custom properties for theming. You can customize colors by modifying the `:root` variables in `app/globals.css`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).