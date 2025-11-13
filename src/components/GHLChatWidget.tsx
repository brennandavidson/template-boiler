'use client';

import { useEffect } from 'react';
import { getSiteConfigIntegrations } from '@/lib/get-site-config';

export function GHLChatWidget() {
  useEffect(() => {
    const integrations = getSiteConfigIntegrations();

    // Extract widget ID from the chat widget embed code
    const embedCode = integrations.ghl?.chatWidgetEmbed || '';
    const widgetIdMatch = embedCode.match(/data-widget-id="([^"]+)"/);
    const widgetId = widgetIdMatch ? widgetIdMatch[1] : null;

    if (!widgetId) {
      console.warn('GHL chat widget ID not found in site.config.json');
      return;
    }

    // Check if script is already loaded
    const existingScript = document.querySelector(`script[data-widget-id="${widgetId}"]`);
    if (existingScript) return;

    // Create and append the GHL chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', widgetId);
    script.async = true;

    // After GHL widget loads, force nav styles
    script.onload = () => {
      setTimeout(() => {
        const navLinks = document.querySelectorAll('header nav a.font-montserrat');
        navLinks.forEach((link: any) => {
          link.style.setProperty('font-family', 'var(--font-montserrat), sans-serif', 'important');
          link.style.setProperty('font-size', '0.875rem', 'important');
          link.style.setProperty('font-weight', '700', 'important');
          link.style.setProperty('letter-spacing', '0.05em', 'important');
          link.style.setProperty('text-transform', 'uppercase', 'important');
        });

      }, 1000);
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(`script[data-widget-id="${widgetId}"]`);
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null;
}
