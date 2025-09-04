# Wojciech Świątek - Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, showcasing professional experience, skills, and interactive projects including a chess game and wordle clone.

## 🚀 Live Demo

Visit the live website: [bondzioyo.github.io](https://bondzioyo.github.io)

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Elegant dark color scheme with accent colors
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Glassmorphism Effects**: Modern UI elements with backdrop blur effects

### 🌍 Internationalization
- **Multi-language Support**: English and Polish translations
- **Dynamic Language Switching**: Seamless language switching with Vue I18n
- **Persistent Language Preference**: User's language choice saved in cookies

### 🎮 Interactive Projects
- **Chess Game**: Full-featured chess game with Stockfish AI engine
- **Wordle Clone**: Word guessing game with multiple languages support
- **Country Informator**: Interactive widget for country information

### 📱 Responsive Sections
- **Hero Section**: Animated introduction with floating elements
- **Work Experience**: Timeline-style experience showcase with alternating layout
- **Education**: Academic background with visual enhancements
- **Technologies**: Tech stack display with hover effects
- **Interests**: Interactive interest cards with Phosphor icons
- **Courses**: Professional development and training information

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Vue Router** - Client-side routing
- **Vue I18n** - Internationalization
- **Tailwind CSS** - Utility-first CSS framework
- **Phosphor Icons** - Beautiful icon library

### Interactive Features
- **Stockfish.js** - Chess engine for AI opponent
- **Vue3-Chessboard** - Chess board component
- **Flowbite Vue** - UI component library

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Vitest** - Unit testing framework
- **ESLint** - Code linting (if configured)

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
│   ├── fonts/             # Custom fonts (Raleway)
│   ├── tech/              # Technology icons
│   ├── socials/           # Social media icons
│   └── ...
├── components/            # Reusable Vue components
│   ├── HelloWorld.vue
│   └── SectionTitle.vue
├── locales/               # Internationalization files
│   ├── en.json           # English translations
│   ├── pl.json           # Polish translations
│   └── workExperience.js # Work experience data
├── plugins/               # Vue plugins configuration
│   ├── i18n-config.js    # Internationalization setup
│   ├── router.js         # Vue Router configuration
│   └── global-components.js
├── views/                 # Page components
│   ├── Home/             # Home page sections
│   │   ├── HeroSection.vue
│   │   ├── WorkExperience.vue
│   │   ├── Education.vue
│   │   ├── Technologies.vue
│   │   ├── Interest.vue
│   │   └── Courses.vue
│   ├── Chess/            # Chess game components
│   ├── Games/            # Game components (Wordle)
│   ├── Layout/           # Layout components
│   └── Widgets/          # Interactive widgets
├── App.vue               # Root component
├── main.js               # Application entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bondzioyo/bondzioyo.github.io.git
   cd bondzioyo.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

## 🎮 Interactive Features

### Chess Game
- **AI Opponent**: Powered by Stockfish chess engine
- **Move Validation**: Proper chess move validation
- **Game States**: Win/lose detection and game reset
- **Responsive Board**: Adapts to different screen sizes

### Wordle Clone
- **Multi-language**: English and Polish word lists
- **Game Logic**: Complete word guessing mechanics
- **Visual Feedback**: Color-coded letter feedback
- **Responsive Design**: Works on all devices

### Country Informator
- **Interactive Widget**: Country information display
- **Data Integration**: Comprehensive country data
- **User-friendly Interface**: Easy-to-use design

## 🌍 Internationalization

The website supports multiple languages with Vue I18n:

- **English** (default)
- **Polish**

Language switching is available in the header, and the user's preference is saved in cookies for future visits.

### Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `de.json` for German)
2. Add translations for all keys
3. Update the language switcher component
4. Configure the new locale in `src/plugins/i18n-config.js`

## 🎨 Customization

### Colors and Theme
The color scheme is defined in `tailwind.config.js` and can be customized:

```javascript
theme: {
  extend: {
    colors: {
      'my-white': '#FCFCFC',
      'accent': '#FFCD40',
      // Add your custom colors
    }
  }
}
```

### Fonts
Custom fonts are loaded in `src/index.css`. The project uses Raleway font family.

### Animations
CSS animations are defined in component `<style>` sections and can be customized for different effects.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images and assets

## 🧪 Testing

Run tests with:

```bash
npm run test
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Wojciech Świątek**
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [bondzioyo](https://github.com/bondzioyo)
- **Portfolio**: [bondzioyo.github.io](https://bondzioyo.github.io)

## 🙏 Acknowledgments

- **Vue.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Phosphor Icons** - For the beautiful icon set
- **Stockfish** - For the chess engine
- **Vite** - For the fast build tool

---

⭐ **Star this repository if you found it helpful!**