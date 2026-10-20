(function () {
  // [selector, [EN text per matched element, in DOM order], optional attribute]
  var EN = [
    ['.nav a', ['About', 'Services', 'Fleet', 'Why us', 'Get a quote']],
    ['.hero .eyebrow', ['Transport &amp; Services · Pemba, Cabo Delgado']],
    ['.hero h1', ['We move people, goods and <em>opportunities.</em>']],
    ['.hero .lead', ['For over 10 years we have connected Pemba to the rest of Mozambique with safety and punctuality, and one simple promise: your cargo and your people arrive safely.']],
    ['.cta a', ['Get a quote', 'Call now']],
    ['.stats span', ['years of experience', 'customer focus', 'nationwide coverage']],
    ['.sobre .eyebrow', ['Who we are']],
    ['.sobre h2', ['A Mozambican company, built in Pemba.']],
    ['.prose p', [
      '<strong>Munguas T&amp;A — Transport and Services</strong> is a Mozambican company based in the city of Pemba, Cabo Delgado province, dedicated to the transport and services sector.',
      'With over a decade of activity, we offer quality transport solutions focused on <strong>safety, efficiency, punctuality</strong> and customer satisfaction.',
      'We seek solid, lasting partnerships with companies and public and private institutions, contributing to economic development and to the growth of the transport and logistics sector in Mozambique.']],
    ['.servicos .eyebrow', ['What we do']],
    ['.servicos h2', ['Services for companies, institutions and individuals.']],
    ['.card h3', ['Cargo transport', 'Passenger transport', 'Logistics &amp; distribution', 'Service provision']],
    ['.card p', [
      'Trucks for goods, building materials and equipment, with safe delivery at destination.',
      'Sturdy, reliable vehicles for teams, technicians and visitors in Pemba and surrounding areas.',
      'Route planning and regular distribution between Pemba, the districts of Cabo Delgado and other provinces.',
      'Tailored operational support: regular contracts or one-off services, adapted to the client’s needs.']],
    ['.frota .eyebrow', ['Our fleet']],
    ['.frota h2', ['The right vehicle for every job.']],
    ['.frota .lead', ['<strong>Trucks</strong> for heavy cargo and <strong>pick-ups</strong> for agile trips on road and rough terrain — carefully maintained for reliability on every journey.']],
    ['.ticks li', ['Cargo trucks', 'Pick-ups', 'Regular maintenance and experienced drivers']],
    ['.porque .eyebrow', ['Why Munguas']],
    ['.porque h2', ['Four commitments in every service.']],
    ['.values b', ['Safety', 'Efficiency', 'Punctuality', 'Trust']],
    ['.values p', ['Cargo and passengers protected from start to finish.', 'Well-planned routes that save time and cost.', 'Your deadline is our deadline. We deliver what we promise.', 'Over 10 years of lasting relationships with our clients.']],
    ['.contactos .eyebrow', ['Contact']],
    ['.contactos h2', ['Let’s talk about your next trip.']],
    ['.contact-list dt', ['Phone', 'WhatsApp', 'Email', 'Address']],
    ['.contact-list dd:nth-of-type(1) a[href*="wa.me"]', ['Send a message']],
    ['.contact-list div:last-child dd', ['Wimbe Expansão, Pemba<br>Cabo Delgado, Mozambique']],
    ['.quote h3', ['Quote request']],
    ['.quote label > span', ['Name', 'Service', 'Origin → Destination', 'Details']],
    ['.quote option', ['Cargo transport', 'Passenger transport', 'Logistics &amp; distribution', 'Other']],
    ['.quote [name=rota]', ['E.g.: Pemba → Montepuez'], 'placeholder'],
    ['.quote [name=msg]', ['Type of cargo, date, number of people…'], 'placeholder'],
    ['.quote .btn', ['Send via WhatsApp']],
    ['.note', ['Opens WhatsApp with your message ready.']],
    ['#f1', ['Transport and Services, E.I. · Pemba, Cabo Delgado']],
    ['#f2', ['All rights reserved.']],
    ['.hero-art img', ['Truck and pick-up from the Munguas T&A fleet'], 'alt'],
    ['.frota-img img', ['Truck and pick-up from the fleet'], 'alt']
  ];
  var META = {
    en: { title: 'Munguas T&A — Transport and Services in Pemba, Cabo Delgado',
          desc: 'Munguas T&A Transport and Services: over 10 years moving people, goods and opportunities in Pemba, Cabo Delgado and across Mozambique. Request your quote.' }
  };
  var pt = [], items = [];
  EN.forEach(function (row) {
    var els = document.querySelectorAll(row[0]), attr = row[2];
    els.forEach(function (el, i) {
      if (row[1][i] == null) return;
      items.push({ el: el, attr: attr, en: row[1][i], pt: attr ? el.getAttribute(attr) : el.innerHTML });
    });
  });
  var descEl = document.querySelector('meta[name=description]');
  var PT = { title: document.title, desc: descEl.content };
  var btns = document.querySelectorAll('.lang button');

  function set(lang) {
    items.forEach(function (it) {
      var v = lang === 'en' ? it.en : it.pt;
      if (it.attr) it.el.setAttribute(it.attr, v); else it.el.innerHTML = v;
    });
    var m = lang === 'en' ? META.en : PT;
    document.title = m.title; descEl.content = m.desc;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-MZ';
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang); });
    window.MUNGUAS_LANG = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  var stored; try { stored = localStorage.getItem('lang'); } catch (e) {}
  var start = stored || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en');
  if (start === 'en') set('en');
  btns.forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.lang); }); });
})();
