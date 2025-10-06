# 🔄 Oracle Mode - Version Management System

## Overview

This document describes the comprehensive versioning and update management system implemented for the Oracle Mode - AI Prophecy Generator PWA.

## Version Information

- **Current Version**: 1.0.3
- **Codename**: Cosmic Nexus
- **Release Date**: October 6, 2025
- **Build Environment**: Production

## 📁 Version-Related Files

### Core Version Files
- `version.json` - Central version configuration and metadata
- `CHANGELOG.md` - Detailed change history following Keep a Changelog format
- `package.json` - NPM compatibility and version tracking
- `manifest.json` - PWA manifest with version information

### Service Worker
- `sw.js` - Enhanced service worker with intelligent cache management
- Automatic old cache cleanup
- Version-based cache invalidation
- Smart update detection and notification

### Main Application
- `assets/js/oracle-main.js` - Contains VersionManager class
- Automatic update notifications
- Service worker message handling
- Periodic version checking

## 🚀 Features

### Automatic Cache Management
- **Version-based caching**: Each version gets its own cache namespace
- **Automatic cleanup**: Old caches are automatically deleted when new versions are detected
- **Smart invalidation**: Cache expires after 7 days and is refreshed automatically
- **Critical resource prioritization**: Core app files are cached first for reliability

### Update Detection
- **Automatic checking**: Periodic version checks every 30 minutes
- **Service worker updates**: Automatic detection of new service worker versions
- **Background sync**: Updates can be detected and prepared in the background
- **User notifications**: Non-intrusive update notifications with user control

### Version Tracking
- **Semantic versioning**: Follows MAJOR.MINOR.PATCH format
- **Build timestamps**: Each version includes build timestamp for cache busting
- **Codenames**: Each version has a memorable codename for easy reference
- **Environment detection**: Automatic detection of development vs production

## 🔧 How It Works

### Service Worker Cache Strategy

1. **Installation Phase**:
   - New service worker creates version-specific cache
   - Critical resources cached first (HTML, CSS, JS, manifest)
   - External dependencies cached with error handling
   - Version metadata stored for future reference

2. **Activation Phase**:
   - Old caches automatically deleted
   - Clients immediately claimed for instant activation
   - Version check performed to detect newer updates
   - Clients notified of successful activation

3. **Fetch Strategy**:
   - Cache-first for most resources
   - Network-first for version.json to detect updates
   - Background updates for critical resources
   - Offline fallback to index.html for navigation

### Update Process

1. **Detection**:
   - Version check compares current version with server version
   - Service worker detects new versions during fetch operations
   - Background sync can trigger update checks

2. **Notification**:
   - Non-intrusive notification appears in top-right corner
   - Shows version information and update options
   - Auto-dismisses after 10 seconds if no action taken

3. **Installation**:
   - User can choose to update immediately or dismiss
   - Update process skips waiting and activates new service worker
   - Page reloads automatically to load new version
   - Old caches cleaned up automatically

## 📋 File Structure

```
oracle-mode-versioning/
├── version.json              # Central version config
├── CHANGELOG.md             # Change history
├── package.json             # NPM compatibility
├── manifest.json            # PWA manifest with version
├── sw.js                    # Enhanced service worker
├── assets/js/oracle-main.js # VersionManager class
└── README.md                # Updated with version info
```

## 🔄 Release Process

### 1. Version Preparation
```bash
# Update version in all files
- sw.js: APP_VERSION = "1.0.x"
- version.json: "version": "1.0.x"
- package.json: "version": "1.0.x"
- manifest.json: "version": "1.0.x"
- oracle-main.js: currentVersion = "1.0.x"
```

### 2. Changelog Update
```markdown
# Move unreleased changes to new version section
## [1.0.x] - YYYY-MM-DD
### Added
- New features...
### Changed
- Modified features...
### Fixed
- Bug fixes...
```

### 3. Testing
- Test PWA installation and update mechanism
- Verify offline functionality
- Test cache invalidation
- Confirm version detection works

### 4. Deployment
```bash
# Create git tag
git tag -a v1.0.x -m "Release v1.0.x - Codename"

# Push changes
git push origin main --tags

# Deploy to hosting service
```

## 🛠️ Development Commands

### Version Management
```bash
# Check current version
npm run version-check

# Start development server
npm start
# or
python server.py

# Bump version (patch)
npm version patch

# Manual version update
# Edit version.json, package.json, sw.js, manifest.json, oracle-main.js
```

### Testing Updates
```bash
# Start local server
python server.py --port 3000

# Test PWA installation
# Open browser → Install Oracle Mode

# Test update mechanism
# Change version in files → Reload page
```

## 🔍 Debugging

### Console Commands
```javascript
// Check current version
window.OracleVersion.getVersionInfo()

// Force version check
window.OracleVersion.checkVersion()

// View service worker status
navigator.serviceWorker.getRegistration()

// Clear cache manually (for testing)
caches.keys().then(names => names.forEach(name => caches.delete(name)))
```

### Version Verification
- Browser console shows version information on load
- Service worker logs cache operations and version changes
- Network tab shows cache hits/misses
- Application tab in DevTools shows stored caches

## 📱 User Experience

### Seamless Updates
- Users get notified of updates without interruption
- Updates download in background
- No loss of current prophecy or state
- Instant activation after user confirmation

### Offline Resilience
- Full functionality maintained offline
- Updates prepared when connection restored
- Gradual cache refresh doesn't break offline mode
- Fallback strategies for failed resource loads

## 🔐 Security & Privacy

### Cache Security
- Version-based cache isolation prevents conflicts
- Automatic cleanup prevents storage bloat
- Secure cache invalidation prevents stale content
- No sensitive data stored in cache

### Update Security
- Version integrity checks
- Secure service worker update mechanism
- No automatic code execution without user consent
- Clear version audit trail

## 📊 Monitoring

### Version Analytics
- Console logging of version operations
- Service worker performance metrics
- Cache hit/miss ratios
- Update success/failure rates

### User Feedback
- Update notification interaction tracking
- Version adoption rates
- Error reporting for failed updates
- Performance impact measurement

---

## 🎯 Benefits

1. **Automatic Updates**: Users always get the latest features without manual intervention
2. **Reliable Caching**: Smart cache management prevents storage issues and stale content
3. **Offline Resilience**: Updates don't break offline functionality
4. **Developer Friendly**: Clear versioning system makes development and debugging easier
5. **User Control**: Users can choose when to update, maintaining control over their experience

This comprehensive versioning system ensures Oracle Mode remains up-to-date, performant, and reliable across all devices and network conditions while providing a smooth user experience and maintainable codebase.