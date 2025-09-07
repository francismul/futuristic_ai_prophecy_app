# 🔮 Oracle Mode - Image Converter & Icon Generator

A futuristic AI-powered image processing application with Progressive Web App (PWA) capabilities. Convert images between multiple formats, generate PWA icons, and process animated GIFs with advanced frame-by-frame processing.

## ✨ Features

### 🖼️ Image Converter
- **Multiple Format Support**: Convert between PNG, JPEG, WEBP, and GIF
- **Advanced GIF Processing**: Full frame-by-frame processing with animation preservation
- **Size Options**: Choose from preset sizes or maintain original dimensions
- **Quality Control**: Adjustable JPEG compression quality
- **Live Preview**: Real-time preview during conversion
- **Batch Processing**: Convert multiple images simultaneously

### 🎨 Icon Generator
- **PWA Icons**: Generate all required icon sizes for Progressive Web Apps
- **Custom Icons**: Upload your own image to create custom icon sets
- **Maskable Icons**: Includes maskable versions for better Android support
- **Multiple Sizes**: Creates icons from 16px to 512px

### 📱 Progressive Web App
- **Installable**: Add to home screen on mobile devices
- **Offline Capable**: Works without internet connection
- **Background Sync**: Handles offline operations
- **Push Notifications**: Ready for notification support
- **App-like Experience**: Native app feel with standalone mode

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Open `generate-icons.html` in your browser
3. Start converting images!

### Online Access
Visit the live application at: [GitHub Pages URL]

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**:
  - GIF.js for GIF encoding/decoding
  - GifuctJS for GIF frame processing
  - Three.js for 3D background effects
  - GSAP for animations
  - Tailwind CSS for styling
- **PWA Features**: Service Worker, Web App Manifest, Background Sync
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
futuristic_ai_prophecy_app/
├── index.html                 # Main prophecy app
├── generate-icons.html        # Image converter application
├── manifest.json             # PWA manifest
├── sw.js                     # Service worker
├── package.json              # Node.js configuration
├── .nojekyll                 # GitHub Pages configuration
├── assets/
│   ├── css/
│   │   └── oracle-image-processing.css
│   ├── js/
│   │   └── oracle-image-processing.js
│   └── styles.css
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
└── README.md
```

## 🔧 Development

### Prerequisites
- Modern web browser with ES6+ support
- Node.js 16+ (for development tools)

### Installation
```bash
# Clone the repository
git clone https://github.com/francismul/futuristic_ai_prophecy_app.git
cd futuristic_ai_prophecy_app

# Install dependencies (optional)
npm install

# Start local server
npm start
```

### Building
```bash
npm run build
```

## 🚀 Deployment

### Tag-Based Deployment (GitHub Pages)
The application deploys to GitHub Pages when you create and push version tags:

#### Create and Deploy a New Version
```bash
# Create a version tag
git tag v1.0.0
git push origin v1.0.0

# Or create an annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

#### Tag Format
- Use semantic versioning: `v1.0.0`, `v1.1.0`, `v2.0.0`
- The workflow triggers on any tag starting with `v`
- Each tag creates a separate deployment

#### View Deployment Status
1. Go to your repository on GitHub
2. Click the "Actions" tab
3. See deployment status for each tag
4. Check the "Deployments" section for live URLs

### Benefits of Tag-Based Deployment
- **Version Control**: Each deployment is tied to a specific version
- **Rollback Support**: Can redeploy any previous version by pushing the tag again
- **Clean Releases**: Only deploy when you're ready to release
- **Multiple Environments**: Can have different tags for staging/production
- **Release Notes**: Tags can include release notes and changelogs

### Development Workflow
```bash
# Regular development on main branch
git checkout main
# Make your changes...
git add .
git commit -m "Add new features"
git push origin main

# When ready to release
git tag v1.1.0
git push origin v1.1.0
```

## 📱 PWA Installation

### On Mobile Devices
1. Open the application in your mobile browser
2. Tap the "Add to Home Screen" option
3. Follow the installation prompts
4. Launch from your home screen like a native app

### On Desktop
1. Open Chrome/Edge browser
2. Click the install icon in the address bar
3. Or use the install prompt that appears

## 🎯 Usage

### Image Conversion
1. **Upload**: Drag & drop or click to select images
2. **Choose Format**: Select PNG, JPEG, WEBP, or GIF
3. **Set Size**: Pick from presets or keep original
4. **Convert**: Click the convert button
5. **Download**: Save your converted images

### Icon Generation
1. **Upload Image**: Select an image for icon generation
2. **Generate**: Choose default Oracle Mode icons or custom
3. **Download**: Get all icon sizes in one go

### Batch Processing
1. **Select Multiple**: Choose multiple images
2. **Configure**: Set output format and size
3. **Process**: Convert all images at once
4. **Download**: Get all results as individual files

## 🔒 Privacy & Security

- **Client-side Processing**: All image processing happens in your browser
- **No Data Upload**: Images never leave your device
- **No Tracking**: No analytics or tracking scripts
- **Open Source**: Fully transparent codebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GIF processing powered by [GIF.js](https://github.com/jnordberg/gif.js) and [GifuctJS](https://github.com/matt-way/gifuct-js)
- 3D effects using [Three.js](https://threejs.org/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Oracle Mode**