import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';
import { calculateLogoMaxHeight, getDefaultLogoMaxHeight } from './logo-utils';

// Cache to store logo dimensions (build-time only)
const dimensionsCache = new Map<string, { width: number; height: number; maxHeight: number }>();

/**
 * Server-side function to get logo dimensions and calculate maxHeight.
 * This runs at build time and caches results.
 */
export function getLogoDimensions(logoPath: string): { width: number; height: number; maxHeight: number } {
  // Check cache first
  if (dimensionsCache.has(logoPath)) {
    return dimensionsCache.get(logoPath)!;
  }

  try {
    // Resolve the logo path relative to the public directory
    const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, logoPath);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Logo file not found: ${fullPath}, using defaults`);
      const defaults = { width: 180, height: 36, maxHeight: getDefaultLogoMaxHeight() };
      dimensionsCache.set(logoPath, defaults);
      return defaults;
    }

    // Get image dimensions
    const imageBuffer = fs.readFileSync(fullPath);
    const dimensions = sizeOf(imageBuffer);

    if (!dimensions.width || !dimensions.height) {
      console.warn(`Could not read dimensions for ${logoPath}, using defaults`);
      const defaults = { width: 180, height: 36, maxHeight: getDefaultLogoMaxHeight() };
      dimensionsCache.set(logoPath, defaults);
      return defaults;
    }

    // Calculate optimal maxHeight based on aspect ratio
    const maxHeight = calculateLogoMaxHeight(dimensions.width, dimensions.height);

    const result = {
      width: dimensions.width,
      height: dimensions.height,
      maxHeight,
    };

    // Cache the result
    dimensionsCache.set(logoPath, result);

    return result;
  } catch (error) {
    console.error(`Error getting logo dimensions for ${logoPath}:`, error);
    const defaults = { width: 180, height: 36, maxHeight: getDefaultLogoMaxHeight() };
    dimensionsCache.set(logoPath, defaults);
    return defaults;
  }
}
