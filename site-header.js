(function(){
 const body=document.body;
 if(!body) return;
 body.querySelectorAll('.rb-site-topbar,.rb-site-brandbar,.rb-navbar,.topbar,.brandbar,.contactbar,.logo-bar,.navbar,.rb-old-header').forEach(el=>el.remove());
 body.querySelectorAll('nav').forEach(el=>el.remove());
 body.querySelectorAll('header').forEach(el=>{if(!el.classList.contains('hero')&&!el.classList.contains('page-hero')&&el.querySelector('img[src*="logo"],img[alt*="Royal Bridges"]')) el.remove();});
 const header = '<div class="rb-site-topbar"><span>Royal Bridges Real Estate | Abu Dhabi, UAE</span><a href="https://wa.me/971568611311">English WhatsApp: +971 56 861 1311</a><span aria-hidden="true">|</span><a href="https://wa.me/971506082608">Arabic WhatsApp: +971 50 608 2608</a><span aria-hidden="true">|</span><a href="mailto:siobhan@royalbridges.ae">siobhan@royalbridges.ae</a></div>' +
 '<div class="rb-site-brandbar"><div class="rb-brand-inner"><a class="rb-brand" href="index.html" aria-label="Royal Bridges Real Estate home"><img src="logo.png" alt="Royal Bridges Real Estate logo"></a>' +
 '<nav class="rb-navbar" aria-label="Main navigation"><button class="rb-mobile-toggle" type="button" aria-expanded="false">☰ MENU</button><ul class="rb-nav-links">' +
 '<li><a href="index.html">Home</a></li>' +
 '<li class="rb-nav-dropdown"><button type="button" aria-expanded="false">Properties ▾</button><div class="rb-nav-dropdown-menu"><a href="properties.html">Search All Properties</a><a href="properties-for-sale.html">Properties for Sale</a><a href="properties-for-rent.html">Properties for Rent</a><a href="commercial.html">Commercial Properties</a><a href="residential-plots.html">Plots &amp; Lands</a></div></li>' +
 '<li><a href="off-plan.html">Off Plan</a></li>' +
 '<li class="rb-nav-dropdown"><button type="button" aria-expanded="false">Communities ▾</button><div class="rb-nav-dropdown-menu"><a href="communities.html#abu-dhabi">Abu Dhabi</a><a href="communities.html#dubai">Dubai</a><a href="communities.html#rak">Ras Al Khaimah</a></div></li>' +
 '<li><a href="short-stay.html">Short Stay</a></li><li><a href="relocation.html">Relocation</a></li><li><a href="other-services.html">Other Services</a></li>' +
 '<li class="rb-nav-dropdown"><button type="button" aria-expanded="false">About Us ▾</button><div class="rb-nav-dropdown-menu"><a href="about.html">About Royal Bridges</a><div class="rb-nav-nested"><a href="register.html">Register with Us</a><div class="rb-nav-nested-menu"><a href="register.html#seminars">Seminars</a><a href="register.html#newsletter">Monthly Market Newsletter</a><a href="register.html#email-updates">Email Updates</a></div></div><a href="careers.html">Careers</a><a href="external-agencies.html">External Agencies</a><a href="partners.html">Our Partners</a><a href="blog.html">Blog &amp; Articles</a><a href="reviews.html">Client Reviews</a></div></li>' +
 '<li><a href="contact.html">Contact</a></li><li><a class="rb-register-link" href="register.html">Register Your Property</a></li></ul></nav></div></div>';
 body.insertAdjacentHTML('afterbegin',header);
 const toggle=body.querySelector('.rb-mobile-toggle'), links=body.querySelector('.rb-nav-links');
 if(toggle&&links) toggle.addEventListener('click',function(){const open=links.classList.toggle('rb-open');toggle.setAttribute('aria-expanded',String(open));});
 body.querySelectorAll('.rb-nav-dropdown > button').forEach(button=>button.addEventListener('click',function(){
  const item=button.parentElement, open=item.classList.toggle('rb-dropdown-open');
  button.setAttribute('aria-expanded',String(open));
 }));
 document.addEventListener('click',function(event){
  if(!event.target.closest('.rb-navbar')) body.querySelectorAll('.rb-nav-dropdown.rb-dropdown-open').forEach(item=>{item.classList.remove('rb-dropdown-open');const b=item.querySelector(':scope > button');if(b)b.setAttribute('aria-expanded','false');});
 });
})();