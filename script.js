const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{let isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Закрыть меню':'Открыть меню');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}

const hero=document.querySelector('.hero');
const heroVideo=document.querySelector('.hero-video');
if(hero&&heroVideo){
  const markReady=()=>hero.classList.add('video-ready');
  
  
  heroVideo.addEventListener('playing', markReady, {once:true});
  heroVideo.addEventListener('error', ()=>hero.classList.remove('video-ready'));
  const playPromise=heroVideo.play();
  if(playPromise && typeof playPromise.then==='function'){
    playPromise.catch(()=>{});
  }
}
