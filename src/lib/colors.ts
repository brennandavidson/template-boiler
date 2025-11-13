// Color utility for accessing branding colors from site config
import { getSiteConfigBranding } from './get-site-config';

/**
 * Get branding colors from site config
 * Returns all color values for use in components
 */
export function getBrandingColors() {
  const branding = getSiteConfigBranding();
  return branding.colors;
}

/**
 * Get specific color by key
 */
export function getBrandColor(colorKey: keyof ReturnType<typeof getBrandingColors>) {
  const colors = getBrandingColors();
  return colors[colorKey];
}

/**
 * Convert hex color to RGB for inline styles
 * Example: hexToRgb('#3b82f6') => 'rgb(59, 130, 246)'
 */
export function hexToRgb(hex: string): string {
  // Remove # if present
  hex = hex.replace('#', '');

  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Get nav colors for sticky header
 */
export function getNavColors() {
  const colors = getBrandingColors();
  return {
    background: hexToRgb(colors.navBackground),
    border: hexToRgb(colors.navBorder),
  };
}

/**
 * Get badge/pill colors for light backgrounds
 */
export function getBadgeColors() {
  const colors = getBrandingColors();
  return {
    background: colors.badgeBg,
    text: colors.badgeText,
  };
}

/**
 * Get inverted badge/pill colors for dark backgrounds
 */
export function getBadgeColorsInverted() {
  const colors = getBrandingColors();
  return {
    background: colors.badgeBgInverted,
    text: colors.badgeTextInverted,
  };
}

/**
 * Get brand-colored overlay for background images
 * Returns inline style object for consistent branded overlays
 */
export function getBrandOverlay(opacity: 'light' | 'medium' | 'heavy' = 'medium') {
  const colors = getBrandingColors();
  const baseColor = colors.backgroundBlue;

  // Convert hex to RGB for rgba
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Opacity levels for different use cases
  const opacityMap = {
    light: 0.4,   // For subtle overlays
    medium: 0.6,  // Standard overlay
    heavy: 0.8,   // Strong overlay for readability
  };

  const alpha = opacityMap[opacity];

  return {
    backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`,
  };
}

/**
 * Get gradient overlay using brand colors
 * For more sophisticated overlay effects
 */
export function getBrandGradientOverlay(direction: 'vertical' | 'horizontal' = 'vertical') {
  const colors = getBrandingColors();
  const baseColor = colors.backgroundBlue;

  // Convert hex to RGB
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (direction === 'vertical') {
    return {
      backgroundImage: `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 0.8), rgba(${r}, ${g}, ${b}, 0.4), transparent)`,
    };
  } else {
    return {
      backgroundImage: `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0.7), rgba(${r}, ${g}, ${b}, 0.6), rgba(${r}, ${g}, ${b}, 0.7))`,
    };
  }
}

/**
 * Get brand section background color
 * Returns hex color for sections with background images
 */
export function getBrandSectionBg() {
  const colors = getBrandingColors();
  return colors.backgroundBlue;
}
