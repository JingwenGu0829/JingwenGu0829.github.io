document.getElementById('year').textContent = new Date().getFullYear();

const compactStars = (value) => {
  if (value < 1000) return String(value);
  const rounded = Math.round(value / 100) / 10;
  return `${rounded.toFixed(rounded % 1 === 0 ? 0 : 1)}k`;
};

document.querySelectorAll('[data-repo]').forEach(async (badge) => {
  const repository = badge.dataset.repo;

  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: { Accept: 'application/vnd.github+json' }
    });

    if (!response.ok) return;

    const data = await response.json();
    const stars = data.stargazers_count;
    badge.querySelector('[data-star-value]').textContent = compactStars(stars);
    badge.setAttribute('aria-label', `${stars.toLocaleString('en-US')} GitHub stars`);
  } catch {
    // Keep the server-rendered fallback when GitHub is unavailable.
  }
});
