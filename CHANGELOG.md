# Changelog

All notable changes to the Oracle Mode - AI Prophecy Generator project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Version tracking system with automatic cache invalidation
- Enhanced service worker with smart cache management
- Comprehensive changelog documentation

### Changed
- Improved service worker cache strategy for better performance
- Enhanced PWA update mechanism

### Fixed
- Service worker now properly cleans old cache versions

## [1.0.3] - 2025-10-06

### Added
- Advanced sci-fi interface elements to prophecy cards
- System status indicators (SYSTEM ONLINE, ALERT ACTIVE)
- Authentication codes and security classifications
- Animated scanning lines and corner indicators
- Enhanced metadata display (prophecy IDs, timestamps)
- Neural link and quantum sync status indicators
- Multi-level status indicators for system health

### Changed
- Increased card size from 60vh to 80vh for better visibility
- Improved text sizing with responsive scaling (3xl to 5xl)
- Enhanced padding and content centering
- Updated card layout to flex-column structure

### Fixed
- Shadow bleeding issues between cards
- Critical pulse animation containment
- CSS isolation and z-index management
- Mobile performance optimizations for animations

## [1.0.2] - 2025-10-06

### Added
- TikTok-style scroll snap functionality
- CSS scroll-snap with mandatory y-axis snapping
- Individual card snap-to-start behavior
- Enhanced touch/swipe handling with bidirectional support
- Improved wheel event handling for desktop
- Cross-browser scroll optimization

### Changed
- Scroll detection logic improved for snap behavior
- More precise prophecy index calculation using Math.round()
- Conservative mobile scroll logic to prevent skipping
- Enhanced preloading for smoother transitions

### Fixed
- Items being skipped during swipe gestures
- Scroll behavior inconsistencies across devices
- Touch event handling on mobile devices

## [1.0.1] - 2025-10-06

### Added
- Enhanced card styling with bigger dimensions
- Improved content centering and typography
- Better visual hierarchy and spacing

### Changed
- Card height increased for better readability
- Text sizing improvements for mobile devices

### Fixed
- Content alignment issues
- Mobile responsiveness improvements

## [1.0.0] - 2025-10-06

### Added
- Initial release of Oracle Mode - AI Prophecy Generator
- Three.js animated cosmic background with multiple layers
- GSAP-powered smooth animations and transitions
- Progressive Web App (PWA) capabilities
- Service worker for offline functionality
- Dynamic prophecy generation system
- Critical prophecy alerts with special animations
- Touch and swipe gesture support
- Responsive design for all devices
- Client-side processing for privacy
- Installable as standalone app
- Background sync capabilities
- Push notification support (optional)

### Features
- **Prophecy Engine**: Advanced randomness-based AI prophecy generation
- **Visual Effects**: Cosmic tunnel, oracle core, and particle systems
- **Animations**: Critical pulse effects and smooth transitions
- **PWA Support**: Full offline experience and app installation
- **Privacy First**: No data collection or external dependencies
- **Cross-Platform**: Works on desktop, mobile, and tablet devices

---

## Version History

- **1.0.3**: Sci-Fi Interface Enhancement & Shadow Fix Release
- **1.0.2**: Scroll Snap & Touch Enhancement Release  
- **1.0.1**: Card Styling & UX Improvement Release
- **1.0.0**: Initial Release

---

## How to Update

When a new version is released:

1. **Automatic Updates**: The PWA will automatically detect and prompt for updates
2. **Manual Refresh**: Force refresh (Ctrl+F5 or Cmd+Shift+R) to get latest version
3. **Service Worker**: Old caches are automatically cleaned up
4. **Version Check**: Current version is displayed in browser console

## Contributing

When contributing changes:

1. Update the version in relevant files (`sw.js`, `manifest.json`, `package.json` if added)
2. Add entry to `[Unreleased]` section with your changes
3. Follow the changelog format: Added/Changed/Deprecated/Removed/Fixed/Security
4. Before release, move unreleased changes to new version section

## Release Process

1. Update version numbers in all relevant files
2. Move unreleased changes to new version section in changelog
3. Create git tag with version number
4. Test PWA update mechanism
5. Deploy to production