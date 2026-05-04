/* ═══════════════════════════════════════════════════════════════════════════════
   PORTFOLIO JAVASCRIPT
   ═══════════════════════════════════════════════════════════════════════════════ */

/* ── LIGHTBOX FUNCTIONALITY ── */

/**
 * Open lightbox with the clicked gallery image
 * @param {HTMLElement} tile - The gallery item element clicked
 */
function openLightbox(tile) {
  const img = tile.querySelector('img');
  
  // Only open if there's an actual image (not a placeholder)
  if (!img) return;
  
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close the lightbox overlay
 * @param {Event} e - Optional event object (for click detection)
 */
function closeLightbox(e) {
  // If clicking inside the image or on the image itself, don't close
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) {
    return;
  }
  
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Close lightbox on Escape key press
 */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLightbox({ target: document.getElementById('lightbox') });
  }
});
