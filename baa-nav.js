/* baa-nav.js — shared nav + footer for pages inside /pages/ */
function buildNav(active) {
  return `
  <nav class="navbar navbar-baa navbar-expand-lg">
    <div class="container-fluid px-4">
      <a class="navbar-brand" href="../index.html">BAA<span>.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item"><a class="nav-link ${active==='home'?'active':''}" href="../index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link ${active==='events'?'active':''}" href="events.html">Events</a></li>
          <li class="nav-item"><a class="nav-link ${active==='news'?'active':''}" href="news.html">News</a></li>
          <li class="nav-item"><a class="nav-link ${active==='feedback'?'active':''}" href="feedback.html">Feedback</a></li>
          <li class="nav-item ms-lg-2"><a class="nav-link btn-sign-up" href="signup.html">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

function buildFooter() {
  return `
  <footer class="site-footer">
    <div class="container-fluid px-4">
      <a href="#">Links</a><a href="#">Partner Links</a><a href="#">Copyright</a><a href="#">Privacy Policy</a>
    </div>
  </footer>`;
}

function initPage(active) {
  document.getElementById('nav-placeholder').innerHTML  = buildNav(active);
  document.getElementById('foot-placeholder').innerHTML = buildFooter();
}
