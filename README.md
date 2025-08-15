# Modern Aurora Theme for SillyTavern

A modern, visually appealing theme extension for SillyTavern featuring aurora-inspired gradients, smooth animations, and responsive design.

## Features

### Visual Design
- **Aurora-inspired color scheme** with dynamic gradients
- **Modern UI elements** with rounded corners and smooth transitions
- **Backdrop blur effects** for enhanced depth
- **Responsive design** that works on desktop and mobile
- **Custom avatar styling** with glow effects
- **Enhanced message bubbles** with hover animations

### Customization Options
- **Animation toggle** - Enable/disable smooth animations
- **Gradient control** - Toggle gradient backgrounds
- **Blur effects** - Control backdrop blur intensity
- **Message styles** - Choose between Modern, Minimal, and Bubble styles
- **Accessibility support** - Respects system preferences for reduced motion and high contrast

### Interactive Features
- **Theme settings panel** accessible via the palette button in the extensions menu
- **Hover effects** on messages and UI elements
- **Dynamic message enhancement** for new messages
- **Typing indicator animations**
- **Loading shimmer effects**

## Installation

### Method 1: Extension Manager (Recommended)
1. Open SillyTavern
2. Go to **Extensions** → **Download Extensions & Assets**
3. Click **"Install from URL"**
4. Paste the repository URL
5. Click **Install**
6. Restart SillyTavern if needed

### Method 2: Manual Installation
1. Download or clone this repository
2. Place the folder in `[SillyTavern]/scripts/extensions/third-party/`
3. Restart SillyTavern
4. Enable the extension in the Extensions panel

## Usage

1. After installation, you'll see a palette icon (🎨) in the extensions menu
2. Click the palette icon to open theme settings
3. Customize the theme to your preferences:
   - Toggle animations on/off
   - Enable/disable gradients
   - Control blur effects
   - Choose your preferred message style

## Customization

The theme includes CSS custom properties that can be modified:

```css
:root {
    --aurora-primary: #667eea;      /* Primary accent color */
    --aurora-secondary: #764ba2;    /* Secondary accent color */
    --aurora-accent: #f093fb;       /* Highlight color */
    --aurora-success: #4ecdc4;      /* Success color */
    --aurora-warning: #ffe066;      /* Warning color */
    --aurora-error: #ff6b6b;        /* Error color */
}