# AI Agent Instructions for TailAdmin Next.js Dashboard

This guide helps AI agents understand key patterns and workflows in this Next.js admin dashboard template.

## Project Architecture

### Core Structure
- `app/` - Next.js app router-based structure
  - `(admin)/` - Admin dashboard routes/pages with shared layout
  - `(full-width-pages)/` - Authentication and error pages
- `components/` - Reusable UI components organized by feature
- `context/` - React context providers (Sidebar, Theme)

### Key Design Patterns

1. **Layout Structure**
   - Uses Next.js nested layouts (`app/layout.tsx`, `app/(admin)/layout.tsx`)
   - AppHeader + AppSidebar pattern for dashboard pages
   - Full-width layout for auth pages

2. **Component Organization**
   - Feature-based organization (auth/, charts/, ecommerce/, etc.)
   - Common components in `components/common/`
   - UI primitives in `components/ui/`
   - Example implementations in `components/example/`

3. **Theming & Styling**
   - Tailwind CSS for styling
   - Theme toggling via ThemeContext
   - Component-specific style variants defined inline

## Development Workflow

### Setup & Running
```bash
npm install
npm run dev # Development server on http://localhost:3000
npm run build # Production build
```

### Common Patterns

1. **Creating New Pages**
   - Add route folder under `app/(admin)/` for dashboard pages
   - Use `app/(full-width-pages)/` for auth/error pages
   - See `app/(admin)/profile/` for reference

2. **Component Development**
   - Follow existing patterns in `components/`
   - Use composition with UI primitives from `components/ui/`
   - Example: Form components combine primitives from `components/ui/` with form logic

3. **State Management**
   - React Context for global state (theme, sidebar)
   - Component-local state for UI interactions
   - See `context/ThemeContext.tsx` for context pattern

## Integration Points

1. **Data Visualization**
   - Charts: Using ApexCharts via `react-apexcharts`
   - Maps: Using JVectorMap via `@react-jvectormap`
   - Calendar: Using FullCalendar via `@fullcalendar`

2. **Form Handling**
   - Date picking: `flatpickr` integration
   - Multi-select and standard selects
   - See `components/form/` for examples

3. **Modal System**
   - Uses custom hook `useModal` for state management
   - See `components/example/ModalExample/` for implementation patterns

## Project-Specific Conventions

1. **File Organization**
   - TypeScript interfaces/types defined in component files
   - SVG icons centralized in `icons/index.tsx`
   - Page-specific components co-located with pages

2. **Component Props**
   - Consistent props pattern with TypeScript interfaces
   - Common props like className for style overrides
   - Example: `components/ui/button/Button.tsx`

3. **Responsive Design**
   - Mobile-first approach with Tailwind breakpoints
   - Sidebar collapses on mobile
   - See `components/layout/AppSidebar.tsx` for patterns

## Need Help?
Refer to component examples in `components/example/` for implementation patterns or check the official docs at tailadmin.com/docs.