// Loads the Iconify runtime from CDN and marks it with data-iconify
(function(){
  if (document.querySelector('script[data-iconify]')) return;
  var s = document.createElement('script');
  s.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
  s.setAttribute('data-iconify','true');
  s.defer = true;
  document.head.appendChild(s);
})();
