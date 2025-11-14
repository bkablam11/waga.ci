// waga.js - minimal interactivity: countdown, tabs, simple modal for speaker bio
document.addEventListener('DOMContentLoaded',function(){
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
  // Set countdown to workshop start date (example: 2025-03-16T10:00:00)
  initCountdown('countdown','2025-03-16T10:00:00');

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
});
