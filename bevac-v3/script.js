document.documentElement.classList.add('js-anim');
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

// header bg on scroll
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>20));

// hero h1 word-by-word rise
document.querySelectorAll('.hero h1').forEach(h=>{
  const html=h.innerHTML;
  // wrap plain text nodes word by word, keep the .hl span intact
  const tmp=document.createElement('div');tmp.innerHTML=html;
  let i=0;const out=[];
  tmp.childNodes.forEach(node=>{
    if(node.nodeType===3){ // text
      node.textContent.split(/(\s+)/).forEach(w=>{
        if(w.trim()===''){out.push(w);return;}
        out.push(`<span class="word" style="animation-delay:${i*0.08}s">${w}</span>`);i++;
      });
    }else{
      out.push(`<span class="word" style="animation-delay:${i*0.08}s">${node.outerHTML}</span>`);i++;
    }
  });
  h.innerHTML=out.join('');
});

// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

// count-up
function countUp(el){
  const end=+el.dataset.count, suf=el.dataset.suffix||'', dur=1300, t0=performance.now();
  function tick(t){
    const p=Math.min((t-t0)/dur,1), e=1-Math.pow(1-p,3);
    el.textContent=Math.round(end*e)+suf;
    if(p<1)requestAnimationFrame(tick);
  }requestAnimationFrame(tick);
}
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(reduce){e.target.textContent=e.target.dataset.count+(e.target.dataset.suffix||'')}else{countUp(e.target)}cio.unobserve(e.target)}}),{threshold:.6});
document.querySelectorAll('.count').forEach(el=>cio.observe(el));

// spotlight + subtle tilt on service tiles
document.querySelectorAll('.tile').forEach(tile=>{
  const spot=document.createElement('span');spot.className='spot';tile.prepend(spot);
  if(reduce)return;
  tile.addEventListener('mousemove',e=>{
    const r=tile.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    tile.style.setProperty('--mx',x+'px');tile.style.setProperty('--my',y+'px');
    const rx=((y/r.height)-.5)*-5, ry=((x/r.width)-.5)*5;
    tile.style.transform=`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  });
  tile.addEventListener('mouseleave',()=>tile.style.transform='');
});

// mobile menu
document.querySelector('.burger').addEventListener('click',()=>{
  const n=document.querySelector('.nav-links');const open=n.style.display==='flex';
  n.style.cssText=open?'':'display:flex;position:absolute;top:96px;left:0;right:0;flex-direction:column;background:var(--bg-2);padding:18px 24px;gap:14px;border-bottom:1px solid var(--line)';
});
