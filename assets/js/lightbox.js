(function(){
  // Minimal lightbox for gallery images (adds keyboard and arrows)
  function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
  function qsa(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }

  var modal, modalImg, caption, closeBtn, navPrev, navNext;
  function buildModal(){
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = `
      <button class="lightbox-close" aria-label="Fermer">✕</button>
      <div class="lightbox-nav">
        <button class="lightbox-prev" aria-label="Image précédente">◀</button>
        <button class="lightbox-next" aria-label="Image suivante">▶</button>
      </div>
      <figure class="lightbox-figure">
        <img src="" alt="" />
        <figcaption class="lightbox-caption"></figcaption>
      </figure>`;
    document.body.appendChild(modal);
    modalImg = modal.querySelector('img');
    caption = modal.querySelector('.lightbox-caption');
    closeBtn = modal.querySelector('.lightbox-close');
    navPrev = modal.querySelector('.lightbox-prev');
    navNext = modal.querySelector('.lightbox-next');

    // events
    modal.addEventListener('click', function(e){ if(e.target === modal) close(); });
    closeBtn.addEventListener('click', close);
    navPrev.addEventListener('click', showPrev);
    navNext.addEventListener('click', showNext);
    document.addEventListener('keydown', function(e){ if(!modal.classList.contains('open')) return; if(e.key==='Escape') close(); if(e.key==='ArrowLeft') showPrev(); if(e.key==='ArrowRight') showNext(); });
  }

  var galleryItems = [];
  var currentIndex = -1;

  function refreshGallery(){
    var imgs = qsa('.gallery-grid .gallery-item img');
    galleryItems = imgs.map(function(img){ return {src: img.getAttribute('src'), alt: img.getAttribute('alt')||'', el: img}; });
    // attach click handlers
    imgs.forEach(function(img, i){
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(e){ openAt(i); });
      // allow keyboard open on parent figure
      var fig = img.closest('.gallery-item');
      if(fig){ fig.addEventListener('keydown', function(ev){ if(ev.key==='Enter' || ev.key===' ') { ev.preventDefault(); openAt(i); } }); }
    });
  }

  function openAt(i){
    if(!modal) buildModal();
    currentIndex = i;
    var item = galleryItems[i];
    modalImg.src = item.src;
    modalImg.alt = item.alt || '';
    caption.textContent = item.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function close(){ if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImg.src=''; caption.textContent=''; document.body.style.overflow = ''; }
  function showPrev(){ if(galleryItems.length===0) return; currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; openAt(currentIndex); }
  function showNext(){ if(galleryItems.length===0) return; currentIndex = (currentIndex + 1) % galleryItems.length; openAt(currentIndex); }

  // initialize on DOM ready
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', refreshGallery); else refreshGallery();
})();
