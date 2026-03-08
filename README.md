# Developer Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Home Page**: Hero section with featured skills and projects
- **About Page**: Personal bio, expertise, and work experience timeline
- **Projects Page**: Filterable project gallery with category selection
- **Contact Page**: Contact form, contact information, and FAQ section
- **Responsive Design**: Fully mobile-friendly with modern UI/UX
- **Smooth Animations**: Engaging transitions and hover effects
- **Modern Tech Stack**: React 18, TypeScript, Vite, React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Navbar.css
│   └── Footer.css
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── [page].css
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Customization

### Update Personal Information

Edit the content in each page component:
- `src/pages/Home.tsx` - Hero section and featured content
- `src/pages/About.tsx` - Bio, skills, and experience
- `src/pages/Projects.tsx` - Project portfolio
- `src/pages/Contact.tsx` - Contact information

### Styling

The portfolio uses CSS with a custom color scheme defined in `src/index.css`:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Accent: `#fbbf24` (Amber)

### Add Your Projects

Edit the `projects` array in `src/pages/Projects.tsx` to add your own projects.

### Connect Social Media

Update the social links in:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

## Deployment

### Netlify

1. Push your repository to GitHub
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push your repository to GitHub
2. Import project in Vercel
3. Automatic deployment on push

### Traditional Hosting

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router v6** - Routing
- **Vite** - Build tool
- **CSS3** - Styling with gradients and animations
- **ESLint** - Code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, reach out through the contact form on the website.

---

Built with ❤️ using React
