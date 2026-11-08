(function(){
  if(document.querySelector('.rb-site-header')) return;
  const body=document.body;
  if(!body) return;
  // Remove legacy page-specific versions of the global site header only.
  body.querySelectorAll(':scope > .topbar,:scope > .brandbar,:scope > .contactbar,:scope > .logo-bar,:scope > .navbar,:scope > nav').forEach(el=>el.remove());
  body.querySelectorAll(':scope > header').forEach(el=>{
    const hasLogo=!!el.querySelector('img[src*="logo"],img[alt*="Royal Bridges"]');
    const isPageHero=el.classList.contains('hero')||el.classList.contains('page-hero');
    if(hasLogo&&!isPageHero) el.remove();
  });
  // Some older pages use a standalone logo header or nested legacy header wrappers.
  body.querySelectorAll(':scope > .header, :scope > .site-header').forEach(el=>el.remove());
  const html=`
    <div class="rb-site-topbar">
      <span>Royal Bridges Real Estate | Abu Dhabi, UAE</span>
      <a href="https://wa.me/971568611311">English WhatsApp: +971 56 861 1311</a>
      <span aria-hidden="true">|</span>
      <a href="https://wa.me/971506082608">Arabic WhatsApp: +971 50 608 2608</a>
      <span aria-hidden="true">|</span>
      <a href="mailto:info@royalbridges.ae">info@royalbridges.ae</a>
    </div>
    <header class="rb-site-header">
      <div class="rb-header-inner">
        <a class="rb-brand" href="index.html" aria-label="Royal Bridges Real Estate home"><img src="logo.png" alt="Royal Bridges Real Estate"></a>
        <nav class="rb-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <div class="rb-dropdown"><button type="button" aria-haspopup="true">Properties ▾</button><div class="rb-dropdown-menu">
            <a href="properties.html">Search All Properties</a>
            <a href="properties-for-sale.html">Properties for Sale</a>
            <a href="properties-for-rent.html">Properties for Rent</a>
            <a href="off-plan.html">Off-Plan Developments</a>
            <a href="commercial.html">Commercial Properties</a>
            <a href="residential-plots.html">Plots &amp; Lands</a>
          </div></div>
          <div class="rb-dropdown"><button type="button" aria-haspopup="true">Communities ▾</button><div class="rb-dropdown-menu">
            <a href="communities.html#abu-dhabi">Communities in Abu Dhabi</a>
            <a href="communities.html#dubai">Communities in Dubai</a>
            <a href="communities.html#rak">Communities in Ras Al Khaimah</a>
          </div></div>
          <a href="short-stay.html">Short Stay</a>
          <a href="relocation.html">Relocation</a>
          <a href="off-plan.html">Off Plan</a>
          <div class="rb-dropdown"><button type="button" aria-haspopup="true">About ▾</button><div class="rb-dropdown-menu">
            <a href="about.html">About Royal Bridges</a>
            <a href="register.html">Register</a>
            <a href="register.html#seminars">Seminars &amp; Online Webinars</a>
            <a href="register.html#newsletter">Monthly Market Newsletter</a>
            <a href="register.html#email-updates">Email Updates</a>
            <a href="careers.html">Careers</a>
            <a href="external-agencies.html">External Agencies</a>
            <a href="partners.html">Our Partners</a>
            <a href="blog.html">Blog &amp; Articles</a>
            <a href="reviews.html">Client Reviews</a>
            <a href="other-services.html">Other Services</a>
          </div></div>
          <a href="contact.html">Contact</a>
          <a class="rb-register" href="contact.html">Register Your Property</a>
        </nav>
      </div>
    </header>`;
  body.insertAdjacentHTML('afterbegin',html);
})();