/* baa-dashboard.js — shared sidebar for all dashboard pages */
function buildSidebar(active) {
  const links = [
    { id: 'dashboard',     label: 'Dashboard',      href: 'dashboard.html' },
    { id: 'profiles',      label: 'Profiles',        href: 'profile.html' },
    { id: 'my-athletes',   label: 'My Athletes',     href: 'my-athletes.html' },
    { id: 'registrations', label: 'Registrations',   href: 'registrations.html' },
    { id: 'results',       label: 'Results',         href: 'results.html' },
    { id: 'notifications', label: 'Notifications',   href: 'notifications.html' },
    { id: 'settings',      label: 'Settings',        href: 'settings.html' },
    { id: 'logout',        label: 'Logout',          href: '../index.html' },
  ];
  const items = links.map(l =>
    `<a href="${l.href}" class="${active === l.id ? 'active' : ''}">${l.label}</a>`
  ).join('');
  return `
  <aside class="sidebar">
    <div class="sidebar-welcome">Welcome Back<strong>ZANGO</strong></div>
    <nav class="sidebar-nav">${items}</nav>
  </aside>`;
}
