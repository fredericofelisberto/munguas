(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });

  document.getElementById('ano').textContent = new Date().getFullYear();

  var form = document.getElementById('quote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    if (!f.nome.value.trim()) { f.nome.classList.add('invalid'); f.nome.focus(); return; }
    f.nome.classList.remove('invalid');
    var en = window.MUNGUAS_LANG === 'en';
    var text = (en ? 'Hello, I am ' : 'Olá, sou ') + f.nome.value.trim() + '.\n' +
      (en ? 'Service: ' : 'Serviço: ') + f.servico.value + '\n' +
      (f.rota.value.trim() ? (en ? 'Route: ' : 'Rota: ') + f.rota.value.trim() + '\n' : '') +
      (f.msg.value.trim() ? (en ? 'Details: ' : 'Detalhes: ') + f.msg.value.trim() : '');
    window.open('https://wa.me/258823135260?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
