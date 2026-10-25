const toast = document.getElementById('toast');
let timer;
function showToast(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(timer); timer = setTimeout(()=>toast.classList.remove('show'), 1800);
}
document.querySelectorAll('.copy').forEach(b=>{
  b.addEventListener('click', async ()=>{
    try{ await navigator.clipboard.writeText(b.dataset.copy); showToast('Havola nusxalandi ✓'); }
    catch(e){ showToast('Nusxalab bo‘lmadi'); }
  });
});
const main = document.getElementById('mainSticker');
const bits = ['🔥','🎯','💎','🏆','⚡','🦍','💥'];
main.addEventListener('click', ()=>{
  main.classList.remove('shake'); void main.offsetWidth; main.classList.add('shake');
  const r = main.getBoundingClientRect();
  for(let i=0;i<18;i++){
    const s = document.createElement('span');
    s.className='confetti'; s.textContent = bits[Math.floor(Math.random()*bits.length)];
    s.style.left = (r.left + r.width/2) + 'px'; s.style.top = (r.top + r.height/2) + 'px';
    s.style.setProperty('--x', (Math.random()*500-250)+'px');
    s.style.setProperty('--y', (Math.random()*400-260)+'px');
    document.body.appendChild(s); setTimeout(()=>s.remove(), 1300);
  }
});
