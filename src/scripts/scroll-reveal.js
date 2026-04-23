import ScrollReveal from 'scrollreveal'
export default function initScrollReveal() {
    const sr = ScrollReveal({ reset: false });
    sr.reveal('.banner-text', { delay: 500, origin: 'left', distance: '50px' });
    sr.reveal('.banner-cta', { delay: 1000, origin: 'bottom', distance: '50px' });
    sr.reveal('.section-title', { delay: 300, origin: 'bottom', distance: '50px' });
    sr.reveal('.section-content', { delay: 500, origin: 'bottom', distance: '50px' });
}