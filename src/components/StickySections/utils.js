// /src/components/StickySections/utils.js

export const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    // Usa imagesLoaded direttamente dal window
    if (window.imagesLoaded) {
      window.imagesLoaded(document.querySelectorAll(selector), () => {
        resolve();
      });
    } else {
      // Fallback se imagesLoaded non è caricato
      resolve();
    }
  });
};