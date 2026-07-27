// Lightweight hero interactions: subtle parallax and particles
(function(){
  const root = document.querySelector('.pf-hero');
  if(!root) return;

  // Parallax on mouse move for devices
  const devices = root.querySelectorAll('.device');
  root.addEventListener('mousemove', (e)=>{
    const rect = root.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    devices.forEach((d, i)=>{
      const depth = (i+1) * 6;
      d.style.transform = `translate3d(${x*depth}px, ${y*depth}px, 0) rotate(${(x*depth)/6}deg)`;
    });
  });
  root.addEventListener('mouseleave', ()=>{
    devices.forEach(d=> d.style.transform='none');
  });

  // Simple particle canvas
  const comp = root.querySelector('.hero-composition') || root.querySelector('.pf-hero-visual');
  if(!comp) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'hp-canvas';
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'none';
  comp.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w=0,h=0, dpr=1;
  const particles = [];
  function resize(){
    dpr = window.devicePixelRatio || 1;
    w = canvas.width = Math.floor(comp.clientWidth * dpr);
    h = canvas.height = Math.floor(comp.clientHeight * dpr);
    canvas.style.width = comp.clientWidth + 'px';
    canvas.style.height = comp.clientHeight + 'px';
    ctx.scale(dpr,dpr);
  }
  function make(){
    particles.length = 0;
    const count = Math.round((comp.clientWidth*comp.clientHeight)/40000);
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*comp.clientWidth,
        y: Math.random()*comp.clientHeight,
        r: Math.random()*2 + 0.6,
        a: Math.random()*0.6 + 0.15,
        v: (Math.random()*0.5) + 0.15
      });
    }
  }
  function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.y -= p.v;
      if(p.y < -10) p.y = comp.clientHeight + 10;
      ctx.beginPath();
      ctx.globalAlpha = p.a;
      ctx.fillStyle = 'rgba(20,180,190,0.9)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  window.addEventListener('resize', ()=>{ resize(); make(); });
  resize(); make(); tick();

  // stats number animation
  const counters = document.querySelectorAll('.pf-stat-num.pf-stat-animate');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target,10)||0;
        const suffix = el.dataset.suffix||'';
        const duration = 1400; const start = performance.now();
        function step(now){
          const t = Math.min((now-start)/duration,1);
          const v = Math.floor(t*target);
          el.textContent = v + suffix;
          if(t<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  },{threshold:0.5});
  counters.forEach(c=>obs.observe(c));
})();
