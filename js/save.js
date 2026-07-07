// Save / favorite buttons — toggle gold fill and persist in localStorage.
// Wrapped in an IIFE so it can load alongside any page's inline script.
(() => {
  const KEY = 'trb-saved';
  const getSaved = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const setSaved = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };

  document.querySelectorAll('.bookmark, .heart, .topbar-btn[aria-label^="Save"]').forEach(btn => {
    let name = (btn.getAttribute('aria-label') || '').replace(/^(Save|Favorite)\s+/i, '');
    if (!name) {
      const card = btn.closest('.stud-card');
      const n = card && card.querySelector('.stud-name, .pup-name');
      name = n ? n.textContent.trim() : document.title;
    }
    if (getSaved().includes(name)) btn.classList.add('saved');
    btn.addEventListener('click', () => {
      let s = getSaved();
      if (s.includes(name)) { s = s.filter(x => x !== name); btn.classList.remove('saved'); }
      else { s.push(name); btn.classList.add('saved'); }
      setSaved(s);
    });
  });
})();
