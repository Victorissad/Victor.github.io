# Victor Issad - 3D Portfolio

A modern, interactive 3D portfolio website showcasing my work as a Software Developer specializing in Java, Android, and Full-Stack Development.

![Portfolio Preview](.github/README_ASSETS/3d-portfolio.png)

## About Me

I'm Victor Issad, a 21-year-old software developer currently working at MTB111 by Creative while studying BTS SIO SLAM at 3IFA. I specialize in:

- Backend Development (Java, Spring Boot)
- Android Mobile Development
- Full-Stack Web Development (PHP/Laravel, React)
- Legacy System Modernization

## Live Demo

Visit my portfolio: [https://victorissad.github.io](https://victorissad.github.io)

## Technologies Used

This portfolio is built with modern web technologies:

- **TypeScript** - Type-safe JavaScript
- **React.js** - UI component library
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation build tool

## Features

- Interactive 3D models and animations
- Smooth scrolling and parallax effects
- Responsive design for all devices
- Contact form integration
- Dynamic project showcase
- Professional experience timeline

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Victorissad/Victor.github.io.git
cd Victor.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=your_access_token
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | Run TypeScript type checking |

## Project Structure

```
src/
├── assets/          # Images, icons, and 3D models
├── components/      # React components
│   ├── atoms/       # Small reusable components
│   ├── canvas/      # 3D canvas components
│   ├── layout/      # Layout components
│   └── sections/    # Page sections
├── constants/       # Configuration and data
├── hoc/            # Higher-order components
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages. Any push to the main branch will trigger a deployment.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID for contact form |
| `VITE_EMAIL_JS_ACCESS_TOKEN` | EmailJS access token for authentication |

Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

## Contact

- **Email**: victor.issad@example.com
- **GitHub**: [@Victorissad](https://github.com/Victorissad)
- **Portfolio**: [https://victorissad.github.io](https://victorissad.github.io)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

Built with inspiration from the Three.js and React communities. Special thanks to:

- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
