const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size').default;

/**
 * Script to calculate logo dimensions and update site.config.json
 * This runs during the build process
 */

function calculateLogoMaxHeight(width, height) {
  const aspectRatio = width / height;

  if (aspectRatio <= 1.5) {
    return 60; // Square or tall logos
  } else if (aspectRatio <= 3) {
    return 50; // Medium rectangle logos
  } else {
    return 40; // Wide rectangle logos
  }
}

function main() {
  const configPath = path.join(process.cwd(), 'site.config.json');

  // Read config
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // Process each logo
  const logos = config.branding.logo;

  Object.keys(logos).forEach(logoKey => {
    const logoPath = logos[logoKey];
    const fullPath = path.join(process.cwd(), 'public', logoPath);

    try {
      if (fs.existsSync(fullPath)) {
        const buffer = fs.readFileSync(fullPath);
        const dimensions = sizeOf(buffer);

        if (dimensions.width && dimensions.height) {
          const maxHeight = calculateLogoMaxHeight(dimensions.width, dimensions.height);

          console.log(`Logo ${logoKey}: ${dimensions.width}x${dimensions.height} -> maxHeight: ${maxHeight}px`);

          // Store dimensions in config
          if (!config.branding.logoDimensions) {
            config.branding.logoDimensions = {};
          }

          config.branding.logoDimensions[logoKey] = {
            width: dimensions.width,
            height: dimensions.height,
            maxHeight: maxHeight
          };
        }
      } else {
        console.warn(`Logo file not found: ${fullPath}`);
      }
    } catch (error) {
      console.error(`Error processing logo ${logoKey}:`, error.message);
    }
  });

  // Write updated config
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('Logo dimensions calculated and saved to site.config.json');
}

main();
