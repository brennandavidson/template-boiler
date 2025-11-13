/**
 * Client-safe logo utilities
 *
 * Logo size calculation strategy based on aspect ratio:
 * - Square/Circle (ratio ~1:1): 60px maxHeight - needs vertical space
 * - Medium Rectangle (ratio 1.5:1 to 3:1): 50px maxHeight - balanced
 * - Wide Rectangle (ratio >3:1): 40px maxHeight - horizontal logos
 */

/**
 * Calculates the optimal maxHeight for a logo based on its aspect ratio.
 * This is a client-safe version that accepts pre-calculated dimensions.
 */
export function calculateLogoMaxHeight(width: number, height: number): number {
  // Calculate aspect ratio (width / height)
  const aspectRatio = width / height;

  // Determine maxHeight based on aspect ratio
  if (aspectRatio <= 1.5) {
    // Square or tall logos (1:1 to 1.5:1)
    return 60;
  } else if (aspectRatio <= 3) {
    // Medium rectangle logos (1.5:1 to 3:1)
    return 50;
  } else {
    // Wide rectangle logos (>3:1)
    return 40;
  }
}

/**
 * Gets the maxWidth constraint for logos.
 * This is a reasonable maximum to prevent logos from taking over the header.
 */
export function getLogoMaxWidth(): number {
  return 300;
}

/**
 * Default logo max height when dimensions aren't available
 */
export function getDefaultLogoMaxHeight(): number {
  return 50;
}
