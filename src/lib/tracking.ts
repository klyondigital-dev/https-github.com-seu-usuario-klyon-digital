"use client";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-5NK3M9NRV1";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1528893535543889";

// Track event in Google Analytics
export const trackGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Track event in Meta Pixel
export const trackPixelEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

// Track event in Google Tag Manager
export const trackGTMEvent = (eventData: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

// Consolidated helper for tracking WhatsApp Lead conversion
export const trackWhatsAppLead = () => {
  // 1. Google Analytics Lead conversion
  trackGAEvent("generate_lead", {
    event_category: "Conversion",
    event_label: "WhatsApp Button Click",
  });

  // 2. Meta Pixel Lead conversion
  trackPixelEvent("Lead");

  // 3. Google Tag Manager custom event
  trackGTMEvent({
    event: "whatsapp_click",
    conversion_type: "lead",
  });

  console.log("📈 Conversion tracked: WhatsApp Lead");
};
