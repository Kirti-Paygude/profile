// Injects a common footer and sets last-updated date for pages
(function(){

  function ensureFooter(root){
    if (!root) return;
    if (root.querySelector('.site-common-footer')) return; // already added

    var footer = document.createElement('footer');
    footer.className = 'site-common-footer';
    footer.style.fontSize = '0.9em';
    footer.style.marginTop = '20px';
    footer.innerHTML = '<p style="text-align:center;margin:0;">Classified Private</p>' +
                       '<p style="text-align:right;margin:0;margin-top:4px;"><span class="last-updated">Last updated on</span></p>';

    root.appendChild(footer);

    // set last-updated text
    var els = footer.querySelectorAll('.last-updated');
    var d = new Date(document.lastModified);
    if (isNaN(d.getTime())) d = new Date();
    var opts = { year:'numeric', month:'long', day:'numeric' };
    var s = 'Last updated on ' + d.toLocaleDateString(undefined, opts);
    els.forEach(function(e){ e.textContent = s; });
  }

  // Run on DOMContentLoaded to ensure #vue-smart-pages-preview exists
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      var main = document.getElementById('vue-smart-pages-preview');
      ensureFooter(main);
    });
  } else {
    var main = document.getElementById('vue-smart-pages-preview');
    ensureFooter(main);
  }
})();
