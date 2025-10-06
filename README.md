# 🔮 Oracle Mode - AI Prophecy Generator

[![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](./CHANGELOG.md)
[![PWA](https://img.shields.io/badge/PWA-ready-green.svg)](./manifest.json)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](./LICENSE)
[![Offline](https://img.shields.io/badge/offline-supported-brightgreen.svg)](./sw.js)

A futuristic, client-side PWA that generates mystical prophecies using advanced randomness and immersive 3D backgrounds. Experience animated Three.js visuals, scroll/swipe to reveal prophecies, and install as a Progressive Web App for offline access.

> **Latest Release**: v1.0.3 "Cosmic Nexus" - Sci-Fi Interface Enhancement & Shadow Fix Release  
> **Release Date**: October 6, 2025  
> **[View Changelog](./CHANGELOG.md)** | **[Version History](#version-history)**

---

## ✨ Features

### 🧙 AI Prophecy Generator
- **Dynamic Prophecies**: Scroll or swipe to reveal AI-generated predictions
- **Critical Alerts**: Rare, animated prophecy events for dramatic effect
- **Endless Content**: New prophecies generated as you scroll
- **Responsive UI**: Touch/swipe support for mobile devices

### 🎨 Futuristic UI
- **Three.js Background**: Animated, multi-layered cosmic effects for a mystical feel
- **GSAP Animations**: Smooth transitions and loader animations
- **Tailwind CSS**: Modern, responsive styling

### 📱 Progressive Web App
- **Installable**: Add Oracle Mode to your home screen on mobile or desktop
- **Offline Capable**: Full offline experience via service worker caching
- **Background Sync**: Prepare for offline prophecy generation
- **Push Notifications**: Optional support for prophecy alerts

### 🕵️ Privacy & Security
- **Client-side Processing**: All logic runs in your browser
- **No Data Upload**: No analytics, tracking, or server-side code

---

## 🚀 Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/francismul/futuristic_ai_prophecy_app.git
   cd futuristic_ai_prophecy_app
   ```

2. Start the development server:
   ```bash
   # Enhanced server (recommended)
   python server.py
   
   # Simple server
   python simple_server.py
   
   # Built-in Python server
   python -m http.server 8000
   ```

3. Open your browser and navigate to:
   - **Local**: http://localhost:8000
   - **Network**: http://YOUR_IP:8000 (if using --host 0.0.0.0)

### Installation as PWA
1. Visit the app in a supported browser
2. Look for the "Install" prompt or use browser menu → "Install Oracle Mode"
3. The app will be added to your home screen/applications

---

## 📋 Version History

| Version | Codename | Release Date | Key Features |
|---------|----------|--------------|--------------|
| 1.0.3 | Cosmic Nexus | 2025-10-06 | Sci-Fi Interface, Shadow Fixes |
| 1.0.2 | Snap Nexus | 2025-10-06 | TikTok-style Scrolling, Touch Enhancement |
| 1.0.1 | Card Genesis | 2025-10-06 | Enhanced Card Styling, UX Improvements |
| 1.0.0 | Origin Protocol | 2025-10-06 | Initial Release, Core Features |

**[📄 Full Changelog](./CHANGELOG.md)** | **[🔧 Version Config](./version.json)**

---

## 🔄 Update Management

### Automatic Updates
- **PWA Updates**: Automatic detection and prompting for new versions
- **Cache Management**: Smart cache invalidation with version-based cleanup
- **Background Sync**: Seamless updates without interrupting user experience

### Manual Updates
```bash
# Force refresh to get latest version
Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)

# Check current version in browser console
console.log('Oracle Mode Version:', navigator.serviceWorker.controller?.scriptURL);
```

### Version Checking
The app automatically:
- Detects new service worker versions
- Prompts users for updates
- Cleans old cache entries
- Maintains offline functionality during updates

---

## 🛠️ Development

### Project Structure
```
futuristic_ai_prophecy_app/
├── index.html              # Main application entry
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker with versioning
├── version.json           # Version configuration
├── CHANGELOG.md           # Detailed change history
├── assets/
│   ├── css/
│   │   └── oracle-styles.css
│   ├── js/
│   │   └── oracle-main.js
│   └── images/            # App icons and assets
├── server.py              # Enhanced development server
├── simple_server.py       # Basic development server
└── SERVER_README.md       # Server documentation
```

### Adding New Features
1. Update version in `version.json`
2. Implement feature in relevant files
3. Update `CHANGELOG.md` under `[Unreleased]`
4. Test PWA update mechanism
5. Update service worker cache list if needed

### Release Process
1. **Version Bump**: Update version in `sw.js`, `version.json`, and `manifest.json`
2. **Changelog**: Move unreleased changes to new version section
3. **Testing**: Test offline functionality and update mechanism  
4. **Tagging**: Create git tag with version number
5. **Deploy**: Deploy to production environment

---

## 🔧 Technical Specifications

### Browser Compatibility
- **Chrome**: 60+ (recommended)
- **Firefox**: 55+
- **Safari**: 11+
- **Edge**: 79+

### PWA Features
- ✅ **Service Worker**: Smart caching with auto-cleanup
- ✅ **Web Manifest**: Installable with custom icons
- ✅ **Offline Support**: Full functionality without internet
- ✅ **Background Sync**: Update preparation
- ✅ **Push Notifications**: Optional prophecy alerts

### Performance
- **Load Time**: < 2s on 3G networks
- **Caching**: Aggressive caching with smart invalidation
- **Animations**: Hardware-accelerated via GPU
- **Mobile**: Optimized for touch devices and low-power CPUs

---

## 📱 Usage

### Desktop
- **Scroll**: Use mouse wheel or scrollbar to navigate
- **Keyboard**: Arrow keys or Page Up/Down
- **Install**: Browser menu → "Install Oracle Mode"

### Mobile
- **Swipe**: Swipe up/down to navigate prophecies
- **Touch**: Tap and hold for additional options
- **Install**: "Add to Home Screen" when prompted

### Offline Mode
- All prophecies work without internet connection
- Background animations continue offline
- Updates downloaded when connection restored

---

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and update `CHANGELOG.md`
4. Test the PWA functionality locally
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines
- **Version Management**: Follow semantic versioning (MAJOR.MINOR.PATCH)
- **PWA Standards**: Maintain offline functionality and fast loading
- **Mobile First**: Ensure mobile compatibility for all features
- **Performance**: Optimize for low-power devices and slow networks
- **Privacy**: Keep all processing client-side

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- **Three.js** - 3D graphics and animations
- **GSAP** - Smooth animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Web APIs** - Service Workers, Web Manifest, Push Notifications

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/francismul/futuristic_ai_prophecy_app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/francismul/futuristic_ai_prophecy_app/discussions)
- **Wiki**: [Project Wiki](https://github.com/francismul/futuristic_ai_prophecy_app/wiki)

---

*Built with ❤️ for the future of mystical digital experiences*
