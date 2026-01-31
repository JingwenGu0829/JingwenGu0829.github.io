// small progressive enhancement: highlight active nav + smooth fade-in
(function(){
  const path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.chip').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();
