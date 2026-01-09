// waga.js - minimal interactivity: countdown, tabs, simple modal for speaker bio
document.addEventListener('DOMContentLoaded',function(){
  // Menu hamburger responsive
  (function(){
    var toggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('.top-nav');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', function(){
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Fermer le menu au clic sur un lien
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  })();

  // Countdown
  function initCountdown(targetId, targetDateStr){
    var el=document.getElementById(targetId);
    if(!el) return;
    var target=new Date(targetDateStr).getTime();
    function tick(){
      var now=Date.now();
      var diff=target-now;
      if(diff<=0){ el.textContent='Le workshop a commencé.'; clearInterval(timer); return; }
      var days=Math.floor(diff/86400000);
      var hours=Math.floor((diff%86400000)/3600000);
      var minutes=Math.floor((diff%3600000)/60000);
      var seconds=Math.floor((diff%60000)/1000);
      el.textContent=days+'j '+hours+'h '+minutes+'m '+seconds+'s';
    }
    tick();
    var timer=setInterval(tick,1000);
  }
  // Set countdown to workshop start date (example: 2026-01-09T08:00:00)
  initCountdown('countdown','2026-01-09T08:00:00');

  // Tabs
  document.querySelectorAll('.tab-buttons button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var parent=btn.closest('.program-tabs');
      if(!parent) return;
      parent.querySelectorAll('.tab-buttons button').forEach(function(b){b.classList.remove('active')});
      btn.classList.add('active');
      var key=btn.getAttribute('data-tab');
      parent.querySelectorAll('.tab-content .tab-pane').forEach(function(p){p.style.display=(p.getAttribute('data-pane')===key)?'block':'none'});
    });
  });

  // Speaker modal (simple)
  document.querySelectorAll('.speaker-card').forEach(function(card){
    card.addEventListener('click',function(){
      var bio=card.getAttribute('data-bio')||'';
      var name=card.getAttribute('data-name')||'';
      var title=card.getAttribute('data-title')||'';
      showModal(name,title,bio);
    });
  });

  function showModal(name,title,bio){
    var modal=document.getElementById('speaker-modal');
    if(!modal) return;
    modal.querySelector('.modal-title').textContent=name;
    modal.querySelector('.modal-sub').textContent=title;
    modal.querySelector('.modal-body').textContent=bio;
    modal.style.display='block';
  }
  var close=document.querySelectorAll('#speaker-modal .modal-close');
  close.forEach(function(el){el.addEventListener('click',function(){el.closest('#speaker-modal').style.display='none'})});

  // Simple contact form validation
  var contactForm=document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit',function(e){
      e.preventDefault();
      var name=contactForm.querySelector('[name=name]').value.trim();
      var email=contactForm.querySelector('[name=email]').value.trim();
      var message=contactForm.querySelector('[name=message]').value.trim();
      if(!name||!email||!message){alert('Veuillez remplir tous les champs.');return}
      // For now simulate success
      alert('Merci, votre message a été envoyé (simulation).');
      contactForm.reset();
    });
  }

  // Mobile menu toggle: insert a simple button that toggles the .open state on .top-nav
  (function(){
    var topNav = document.querySelector('.top-nav');
    if(!topNav) return;
    var header = document.getElementById('header') || document.body;
    var btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML = 'Menu';
    header.insertBefore(btn, topNav);
    btn.addEventListener('click', function(){
      var isOpen = topNav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen? 'true' : 'false');
    });
  })();

  // Gallery lightbox: click to open, Esc to close, Enter/Space to open when focused
  (function(){
    var lb = document.getElementById('lightbox');
    // If there is no lightbox in DOM (older pages), create one
    if(!lb){
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.setAttribute('aria-hidden','true');
      lb.setAttribute('tabindex','-1');
      lb.innerHTML = '<div class="lb-inner" role="dialog" aria-modal="true"><button class="lb-close" aria-label="Fermer">&times;</button><img class="lb-img" alt=""><figcaption class="lb-caption"></figcaption></div>';
      document.body.appendChild(lb);
    }

    function openLb(src,caption){
      lb.querySelector('.lb-img').src = src;
      lb.querySelector('.lb-img').alt = caption || '';
      lb.querySelector('.lb-caption').textContent = caption || '';
      lb.classList.add('open');
      lb.setAttribute('aria-hidden','false');
      lb.focus();
    }
    function closeLb(){
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden','true');
      lb.querySelector('.lb-img').src = '';
    }

    document.querySelectorAll('.gallery-item').forEach(function(fig){
      // Ensure focusable and keyboard accessible
      if(!fig.hasAttribute('tabindex')) fig.setAttribute('tabindex','0');
      if(!fig.hasAttribute('role')) fig.setAttribute('role','button');
      fig.addEventListener('click', function(){
        var img = this.querySelector('img');
        var cap = this.querySelector('figcaption')? this.querySelector('figcaption').textContent : '';
        openLb(img.getAttribute('src'), cap);
      });
      fig.addEventListener('keypress', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          var img = this.querySelector('img');
          var cap = this.querySelector('figcaption')? this.querySelector('figcaption').textContent : '';
          openLb(img.getAttribute('src'), cap);
        }
      });
    });

    lb.addEventListener('click', function(e){
      if(e.target === lb || e.target.classList.contains('lb-close')) closeLb();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && lb.classList.contains('open')) closeLb();
    });
  })();

  // Live stream embed: set/toggle YouTube live via data-live or the 'Définir l\'URL' prompt
  (function(){
    var wrapper = document.getElementById('live-wrapper');
    if(!wrapper) return;
    var container = document.getElementById('live-container');
    var toggle = document.getElementById('live-toggle');
    var setBtn = document.getElementById('live-set');

    function getEmbedUrl(input){
      if(!input) return '';
      try{
        input = input.trim();
        if(input.indexOf('youtube.com/embed')!==-1) return input;
        var id = '';
        var m = input.match(/[?&]v=([^&]+)/);
        if(m && m[1]) id = m[1];
        if(!id){ m = input.match(/youtu\.be\/([^?&/]+)/); if(m && m[1]) id = m[1]; }
        if(!id){ m = input.match(/\/embed\/([^?&/]+)/); if(m && m[1]) id = m[1]; }
        if(!id) return '';
        return 'https://www.youtube.com/embed/' + id + '?autoplay=1';
      }catch(e){return '';}
    }

    function render(){
      var url = wrapper.getAttribute('data-live') || '';
      var embed = getEmbedUrl(url);
      if(!embed){ container.style.display='none'; container.setAttribute('aria-hidden','true'); return; }
      container.innerHTML = '<div class="video-wrap"><iframe src="'+embed+'" allow="autoplay; encrypted-media" allowfullscreen title="WAGA live stream"></iframe></div>';
      container.style.display='block';
      container.setAttribute('aria-hidden','false');
    }

    setBtn.addEventListener('click', function(){
      var url = prompt('Collez l\'URL YouTube du direct (ex: https://www.youtube.com/watch?v=VIDEOID)', wrapper.getAttribute('data-live') || '');
      if(url){ wrapper.setAttribute('data-live', url.trim()); render(); }
    });

    toggle.addEventListener('click', function(){
      var url = wrapper.getAttribute('data-live') || '';
      if(!url){ alert('Aucun flux défini. Cliquez sur "Définir l\'URL" pour coller le lien YouTube du direct.'); return; }
      if(container.style.display === 'none' || container.getAttribute('aria-hidden')==='true'){ render(); container.scrollIntoView({behavior:'smooth'}); }
      else { container.style.display='none'; container.setAttribute('aria-hidden','true'); }
    });

    if(wrapper.getAttribute('data-live')) render();
  })();

});
