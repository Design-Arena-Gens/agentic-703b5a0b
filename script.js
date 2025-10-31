const container = document.getElementById('leads');
const template = document.getElementById('lead-row-template');

try {
  const leads = JSON.parse(document.getElementById('leads-data').textContent);

  leads.forEach((lead, index) => {
    const node = template.content.cloneNode(true);
    node.querySelector('.lead-number').textContent = String(index + 1).padStart(2, '0');
    node.querySelector('.lead-name').textContent = lead.name;
    node.querySelector('.lead-category').textContent = lead.category;

    const link = node.querySelector('.lead-link');
    link.href = lead.instagram;
    link.textContent = lead.instagram.replace('https://www.instagram.com/', '@');

    container.appendChild(node);
  });
} catch (error) {
  container.innerHTML = `<p class="error">Unable to load leads right now. Please refresh.</p>`;
  console.error('Failed to render leads', error);
}
