(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // 1) Ensure images lazy-load
    document.querySelectorAll('img').forEach(function(img){
      if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
    });

    // 2) Insert a Bootstrap modal for image lightbox if not present
    if(!document.getElementById('imageModal')){
      var modalHtml = '\n<div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">\n  <div class="modal-dialog modal-dialog-centered modal-lg">\n    <div class="modal-content bg-transparent border-0">\n      <div class="modal-body p-0 position-relative">\n        <button type="button" class="btn-close position-absolute top-0 end-0 m-3 bg-white rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>\n        <img id="imageModalImg" src="" alt="" class="img-fluid w-100 rounded" style="object-fit:contain;">\n        <div id="imageModalCaption" class="text-white mt-2" style="position:absolute; left:1rem; bottom:1rem; text-shadow:0 1px 3px rgba(0,0,0,.6);"></div>\n      </div>\n    </div>\n  </div>\n</div>\n';
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Initialize bootstrap modal
    var modalEl = document.getElementById('imageModal');
    var bsModal = modalEl ? new bootstrap.Modal(modalEl) : null;
    var modalImg = document.getElementById('imageModalImg');
    var modalCaption = document.getElementById('imageModalCaption');

    // 3) Click handler for gallery images (photo-card images)
    document.querySelectorAll('.photo-card img, .card.photo-card img, img.card-img-top').forEach(function(img){
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(){
        if(!bsModal) return;
        var src = img.getAttribute('src');
        var alt = img.getAttribute('alt') || '';
        modalImg.src = src;
        modalImg.alt = alt;
        modalCaption.textContent = alt;
        bsModal.show();
      });
    });

    // 4) Add minimal reveal-on-scroll CSS and observer
    var revealStyle = document.createElement('style');
    revealStyle.innerHTML = '\n.reveal{opacity:0;transform:translateY(12px);transition:opacity .6s ease, transform .6s ease}\n.reveal.visible{opacity:1;transform:none}\n';
    document.head.appendChild(revealStyle);

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});

    // Observe relevant elements (cards, hero-section, section titles)
    document.querySelectorAll('.card, .hero-section, .section-title').forEach(function(el){
      if(!el.classList.contains('reveal')) el.classList.add('reveal');
      observer.observe(el);
    });

    // 5) Small enhancement: smooth scroll for same-page anchors
    if('scrollBehavior' in document.documentElement.style){
      document.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var target = document.querySelector(a.getAttribute('href'));
          if(target){
            e.preventDefault();
            target.scrollIntoView({behavior:'smooth'});
          }
        });
      });
    }

  });
})();
