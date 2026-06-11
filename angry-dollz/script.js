
document.documentElement.classList.add('js-anim');
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>10));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
document.querySelector('.burger').addEventListener('click',()=>{
  const n=document.querySelector('.nav-links');const open=n.style.display==='flex';
  n.style.cssText=open?'':'display:flex;position:absolute;top:72px;left:0;right:0;flex-direction:column;background:var(--ink-2);padding:18px 24px;gap:16px;border-bottom:1px solid var(--line)';
});
