/* ==========================================================================
   AMOR EM CONSTELAÇÃO — SCRIPT JS
   ========================================================================== */

   const appData = {
    relationshipStartDate: "2025-11-28T00:00:00",
    loveLetter: `Há exatamente um ano, minha vida ganhou uma cor e um significado que eu nunca antes havia conhecido. Cada dia ao seu lado tem sido uma descoberta inebriante, um abrigo sereno para a minha alma e a celebração mais bonita que o destino poderia me conceder.
  
  Não comemoramos apenas o passar dos dias, mas sim a intensidade mágica de tudo o que construímos juntos: as mãos dadas quando o mundo parecia incerto, os olhares que conversam sem precisar de palavras e os risos soltos que iluminam os nossos dias mais simples.
  
  Você é o meu lugar favorito no universo inteiro, o meu presente mais precioso e a razão de todos os meus mais doces amanhãs. Obrigado por me escolher a cada novo amanhecer com tanta ternura e cumplicidade.
  
  Te amo ontem, hoje e por toda a eternidade.`,
    signature: "Com todo o meu coração, Vitor ❦",
  
    photos: [
    { nome: "Foto 1",  url: "imagens/19.jpg", caption: "O Beijo que Para o Tempo",          date: "Nosso Futuro",           likes: 402 },
    { nome: "Foto 2",  url: "imagens/1.png",  caption: "Sob a Nossa Própria Galáxia",       date: "28 de Novembro de 2025", likes: 184 },
    { nome: "Foto 3",  url: "imagens/2.jpg",  caption: "Nossos Sorrisos Dourados",          date: "Tarde Inesquecível",     likes: 216 },
    { nome: "Foto 4",  url: "imagens/3.jpg",  caption: "O Carinho que Acalma",              date: "Momentos a Dois",        likes: 242 },
    { nome: "Foto 5",  url: "imagens/4.jpg",  caption: "Paz ao Seu Lado",                   date: "Crepúsculo a Dois",      likes: 198 },
    { nome: "Foto 6",  url: "imagens/5.jpg",  caption: "Nosso Abraço Favorito",             date: "Céu Estrelado",          likes: 275 },
    { nome: "Foto 7",  url: "imagens/6.jpg",  caption: "Silhueta do Nosso Amor",            date: "Noite Inesquecível",     likes: 312 },
    { nome: "Foto 8",  url: "imagens/7.jpg",  caption: "Mãos que se Procuram",              date: "Para Sempre Nós",        likes: 267 },
    { nome: "Foto 9",  url: "imagens/8.jpg",  caption: "Sinal de Vitória, Sinal de Amor",   date: "Dia Especial",           likes: 224 },
    { nome: "Foto 10", url: "imagens/9.jpg",  caption: "Sob as Estrelas do Nosso Céu",      date: "Nosso Futuro",           likes: 358 },
    { nome: "Foto 11", url: "imagens/10.jpg", caption: "Pequenos Gestos, Grandes Amores",    date: "Tarde a Dois",           likes: 289 },
    { nome: "Foto 12", url: "imagens/11.jpg", caption: "Colo que Acolhe",                   date: "Domingo à Tarde",        likes: 331 },
    { nome: "Foto 13", url: "imagens/12.jpg", caption: "Sempre Juntos",                     date: "Nosso Dia",              likes: 256 },
    { nome: "Foto 14", url: "imagens/13.jpg", caption: "Para Todo o Sempre",                date: "Nosso Futuro",           likes: 402 },
    { nome: "Foto 15", url: "imagens/14.JPG", caption: "Sob a Nossa Própria Galáxia",       date: "28 de Novembro de 2025", likes: 184 },
    { nome: "Foto 16", url: "imagens/15.JPG", caption: "O Abraço que Silencia o Mundo",     date: "Céu Estrelado",          likes: 195 },
    { nome: "Foto 17", url: "imagens/16.JPG", caption: "O Beijo que Para o Tempo",          date: "Noite Inesquecível",     likes: 340 },
    { nome: "Foto 18", url: "imagens/17.JPG", caption: "Para Todo o Sempre",                date: "Nosso Futuro",           likes: 358 },
    { nome: "Foto 19", url: "imagens/18.jpg", caption: "Nosso Abraço na Cidade",            date: "Noite Inesquecível",     likes: 358 },
    { nome: "Foto 20", url: "imagens/20.jpg", caption: "Para Todo o Sempre",                date: "Nosso Futuro",           likes: 358 },
    { nome: "Foto 21", url: "imagens/21.jpg", caption: "Para Todo o Sempre",                date: "Nosso Futuro",           likes: 358 },
    { nome: "Foto 22", url: "imagens/22.jpg", caption: "Para Todo o Sempre",                date: "Nosso Futuro",           likes: 358 }

    ],
  
    videos: [
      { nome: "Vídeo 1", url: "video/1.mp4", caption: "Nossa Música Favorita", date: "Momentos em Movimento", likes: 450 },
      { nome: "Vídeo 2", url: "video/2.MOV", caption: "Rindo Juntos",          date: "Tarde Divertida",        likes: 380 },
      { nome: "Vídeo 3", url: "video/3.mp4", caption: "Nossos roles",          date: "Tarde Divertida",        likes: 380 }
    ],
  
    reasons: [
      "O jeito como seus olhos brilham quando você sorri de verdade",
      "A forma carinhosa como você segura minha mão quando estamos caminhando",
      "Seu abraço que consegue curar qualquer dia difícil em segundos",
      "A sua risada doce que é a melhor melodia do meu mundo",
      "O carinho e a paciência com que você me ouve falar dos meus sonhos",
      "Como a gente se entende apenas com uma troca rápida de olhares",
      "Seu coração puro e a sua generosidade sincera com todas as pessoas",
      "A paz inexplicável e serena que sinto toda vez que estou com você",
      "O jeito como você me inspira a ser uma pessoa melhor a cada dia",
      "A sua determinação admirável em tudo o que se propõe a fazer",
      "Nossas piadas internas que ninguém mais no planeta inteiro entende",
      "O perfume do seu abraço que fica na minha roupa e na minha memória",
      "A cumplicidade de dividirmos até os silêncios mais confortáveis da noite",
      "O modo como você cuida de mim nos mínimos detalhes quase imperceptíveis",
      "A certeza absoluta de que com você ao meu lado eu posso vencer qualquer tempestade",
      "O som da sua voz me dando bom dia logo ao acordar",
      "Como você me faz rir mesmo nas horas em que eu menos espero",
      "A sua doçura nos momentos em que o mundo lá fora parece barulhento demais",
      "O brilho dos seus olhos quando fala com paixão sobre as coisas que ama",
      "O simples fato de você existir e ter escolhido caminhar a vida comigo"
    ]
  };
  
  /* ==========================================================================
     SINTETIZADOR DE SOM
     ========================================================================== */
  const soundEngine = {
    ctx: null,
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },
    chime(freq = 587.33) {
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.9);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.9);
      } catch (e) {}
    },
    burst() {
      try {
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);
          gain.gain.setValueAtTime(0.035, this.ctx.currentTime + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.07 + 0.45);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + idx * 0.07);
          osc.stop(this.ctx.currentTime + idx * 0.07 + 0.45);
        });
      } catch (e) {}
    }
  };
  
  /* ==========================================================================
     CÉU DE ESTRELAS GLOBAL
     ========================================================================== */
  (function initStarfield() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
  
    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
  
    const count = w < 768 ? 85 : 160;
    const stars = [];
    const colors = ['#ffffff', '#e9e3f5', '#a78bfa', '#d4a843', '#c084fc'];
  
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.4,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        phase: Math.random() * Math.PI * 2,
        driftY: (Math.random() - 0.5) * 0.04,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  
    let time = 0;
    function loop() {
      requestAnimationFrame(loop);
      time += 0.016;
      ctx.clearRect(0, 0, w, h);
  
      for (const s of stars) {
        s.y += s.driftY;
        if (s.y > h + 4) s.y = -4;
        if (s.y < -4) s.y = h + 4;
  
        const twinkle = 0.55 + 0.45 * Math.sin(time * s.twinkleSpeed * 50 + s.phase);
        const alpha = Math.max(0.1, s.baseAlpha * twinkle);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(loop);
    window.addEventListener('resize', resize, { passive: true });
  })();
  
  /* ==========================================================================
     CORAÇÃO INTERATIVO — HERO (MAIS VISÍVEL)
     ========================================================================== */
  (function initHeart() {
    const canvas = document.getElementById('heartCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  
    function resize() {
      const parent = canvas.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
  
    function heartPoint(t) {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      return { x, y };
    }
  
    const baseScale = w < 480 ? 12 : (w < 768 ? 15 : 20);
    const count = w < 768 ? 320 : 480;
    const stars = [];
    const bursts = [];
  
    const edgeColors = ['#d4a843', '#e8c46a', '#c9a84c', '#f0d88a'];
    const innerColors = ['#8b5cf6', '#a78bfa', '#7c3aed', '#6d28d9', '#c084fc'];
  
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const isEdge = i < count * 0.55;
      let hx, hy;
  
      if (isEdge) {
        const p = heartPoint(t);
        hx = p.x + (Math.random() - 0.5) * 0.25;
        hy = p.y + (Math.random() - 0.5) * 0.25;
      } else {
        const p = heartPoint(t);
        const r = Math.pow(Math.random(), 0.5);
        hx = p.x * r;
        hy = 4 + (p.y - 4) * r;
      }
  
      stars.push({
        tx: hx * baseScale,
        ty: hy * baseScale,
        x: Math.random() * w,
        y: Math.random() * h,
        size: isEdge ? Math.random() * 2.2 + 2.0 : Math.random() * 1.5 + 1.0,
        color: (isEdge ? edgeColors : innerColors)[Math.floor(Math.random() * 4)],
        alpha: isEdge ? Math.random() * 0.2 + 0.9 : Math.random() * 0.3 + 0.6,
        speed: Math.random() * 0.04 + 0.03,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 1.8 + 0.8
      });
    }
  
    function spawnBurst(cx, cy, total = 30) {
      const burstColors = ['#d4a843', '#e8c46a', '#a78bfa', '#c084fc', '#8b5cf6', '#f0d88a'];
      for (let i = 0; i < total; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.8 + 1.2;
        bursts.push({
          x: cx + (Math.random() - 0.5) * 8,
          y: cy + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.2 + 0.8,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
          life: 1,
          decay: Math.random() * 0.015 + 0.01
        });
      }
    }
  
    function handleAction(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      spawnBurst(x, y, w < 768 ? 22 : 34);
      soundEngine.burst();
  
      const rad = 140;
      for (const s of stars) {
        const dx = s.x - x;
        const dy = s.y - y;
        const distSq = dx * dx + dy * dy;
        if (distSq < rad * rad) {
          const dist = Math.sqrt(distSq) || 1;
          const factor = (rad - dist) / rad;
          s.x += (dx / dist) * factor * 22;
          s.y += (dy / dist) * factor * 22;
        }
      }
    }
  
    canvas.addEventListener('pointerdown', (e) => handleAction(e.clientX, e.clientY));
  
    let time = 0;
    function render() {
      requestAnimationFrame(render);
      time += 0.07; // ritmo suave e visível


      const beat1 = Math.pow(Math.max(0, Math.sin(time)), 20);
      const beat2 = Math.pow(Math.max(0, Math.sin(time - 0.3)), 20) * 0.4;
      const pulse = 1 + (beat1 + beat2) * 0.055;
  
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2 - 5;
  
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseScale * 20 * pulse);
      glowGrad.addColorStop(0, 'rgba(139, 92, 246, 0.22)');
      glowGrad.addColorStop(0.4, 'rgba(109, 40, 217, 0.12)');
      glowGrad.addColorStop(0.7, 'rgba(212, 168, 67, 0.06)');
      glowGrad.addColorStop(1, 'rgba(5, 2, 8, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);
  
      for (const s of stars) {
        const tx = s.tx * pulse + cx;
        const ty = s.ty * pulse + cy;
        s.x += (tx - s.x) * s.speed;
        s.y += (ty - s.y) * s.speed;
  
        const twinkle = 0.7 + 0.3 * Math.sin(time * s.twinkleSpeed + s.phase);
        ctx.globalAlpha = Math.max(0.3, s.alpha * twinkle);
        ctx.fillStyle = s.color;
  
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.size > 1.6 ? 12 : 6;
  
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
  
      ctx.shadowBlur = 0;
  
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.955;
        b.vy *= 0.955;
        b.vy += 0.04;
        b.life -= b.decay;
  
        if (b.life <= 0) {
          bursts.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = b.life * 0.9;
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();
      }
  
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(render);
    window.addEventListener('resize', resize, { passive: true });
  })();
  
  /* ==========================================================================
     CONTADOR
     ========================================================================== */
  function updateCounter() {
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const s = now.getSeconds();
  
    const totalSec = 365 * 86400 + (h * 3600 + min * 60 + s);
    const beats = Math.floor(totalSec * 2.5);
  
    const setEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerText = val;
    };
  
    setEl('c-years', '01');
    setEl('c-months', '00');
    setEl('c-days', '00');
    setEl('c-hours', String(h).padStart(2, '0'));
    setEl('c-minutes', String(min).padStart(2, '0'));
    setEl('c-seconds', String(s).padStart(2, '0'));
    setEl('c-heartbeats', beats.toLocaleString('pt-BR'));
    setEl('c-totaldays', '365');
    setEl('c-totalhours', (8760 + h).toLocaleString('pt-BR') + ' horas');
  }
  
  /* ==========================================================================
     GALERIA
     ========================================================================== */
  let currentPhotoIdx = 0;
  
  function renderGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
  
    container.innerHTML = appData.photos.map((photo, idx) => `
      <div class="photo-card" onclick="openLightbox(${idx})">
        <div class="photo-img-wrap">
          <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
        </div>
        <div class="photo-caption-wrap">
          <div class="photo-caption-title">${photo.caption}</div>
          <div class="photo-meta">
            <span>${photo.date}</span>
            <button class="photo-like-btn" onclick="likePhoto(${idx}, event)">
              ♥ <span>${photo.likes}</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  function likePhoto(idx, event) {
    event.stopPropagation();
    appData.photos[idx].likes += 1;
    soundEngine.burst();
    renderGallery();
  }
  
  function openLightbox(idx) {
    currentPhotoIdx = idx;
    const photo = appData.photos[idx];
    const modal = document.getElementById('photoLightbox');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const meta = document.getElementById('lightboxMeta');
  
    if (!modal || !photo) return;
    img.src = photo.url;
    title.innerText = photo.caption;
    meta.innerText = photo.date + ' · ♥ ' + photo.likes + ' curtidas';
    modal.classList.add('open');
    soundEngine.chime(659.25);
  }
  
  function closeLightbox(e) {
    if (e && e.target && e.target.closest('.lightbox-img-wrap, .lightbox-nav')) return;
    const modal = document.getElementById('photoLightbox');
    if (modal) modal.classList.remove('open');
  }
  
  function nextLightbox(e) {
    if (e) e.stopPropagation();
    currentPhotoIdx = (currentPhotoIdx + 1) % appData.photos.length;
    openLightbox(currentPhotoIdx);
  }
  
  function prevLightbox(e) {
    if (e) e.stopPropagation();
    currentPhotoIdx = (currentPhotoIdx - 1 + appData.photos.length) % appData.photos.length;
    openLightbox(currentPhotoIdx);
  }
  
  /* ==========================================================================
     VÍDEOS
     ========================================================================== */
  function renderVideos() {
    const container = document.getElementById('videoContainer');
    if (!container) return;
  
    container.innerHTML = appData.videos.map((video) => `
      <div class="video-card">
        <div class="video-wrap">
          <video controls preload="metadata" playsinline>
            <source src="${video.url}" type="video/mp4">
            Seu navegador não suporta vídeo.
          </video>
        </div>
        <div class="photo-caption-wrap">
          <div class="photo-caption-title">${video.caption}</div>
          <div class="photo-meta">
            <span>${video.date}</span>
            <span>♥ ${video.likes}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  /* ==========================================================================
     MOTIVOS
     ========================================================================== */
  let reasonIdx = 0;
  const favoritesMap = {};
  
  function updateReasonDisplay() {
    const idxEl = document.getElementById('reasonIndex');
    const txtEl = document.getElementById('reasonText');
    const favLabel = document.getElementById('favLabel');
  
    if (idxEl) {
      idxEl.innerText = `Estrela nº ${String(reasonIdx + 1).padStart(2, '0')} / ${String(appData.reasons.length).padStart(2, '0')}`;
    }
    if (txtEl) {
      txtEl.style.opacity = '0';
      txtEl.style.transform = 'translateY(8px)';
      setTimeout(() => {
        txtEl.innerText = `"${appData.reasons[reasonIdx]}"`;
        txtEl.style.opacity = '1';
        txtEl.style.transform = 'translateY(0)';
      }, 200);
    }
    if (favLabel) {
      const isFav = !!favoritesMap[reasonIdx];
      favLabel.innerText = isFav ? 'Favoritado' : 'Favoritar';
    }
  }
  
  function nextReason() {
    reasonIdx = (reasonIdx + 1) % appData.reasons.length;
    soundEngine.burst();
    updateReasonDisplay();
  }
  
  function prevReason() {
    reasonIdx = (reasonIdx - 1 + appData.reasons.length) % appData.reasons.length;
    soundEngine.chime(440);
    updateReasonDisplay();
  }
  
  function toggleCurrentFavorite() {
    favoritesMap[reasonIdx] = !favoritesMap[reasonIdx];
    soundEngine.chime(784);
    updateReasonDisplay();
  }
  
  function openAllReasonsModal() {
    const modal = document.getElementById('allReasonsModal');
    const list = document.getElementById('reasonsList');
    if (!modal || !list) return;
  
    list.innerHTML = appData.reasons.map((r, i) => `
      <div class="reasons-list-item" onclick="selectReasonFromList(${i})">
        <span class="reasons-list-num">${String(i + 1).padStart(2, '0')}.</span>
        <span class="reasons-list-text">"${r}"</span>
      </div>
    `).join('');
  
    modal.classList.add('open');
    soundEngine.chime(587.33);
  }
  
  function selectReasonFromList(i) {
    reasonIdx = i;
    updateReasonDisplay();
    closeAllReasonsModal();
  }
  
  function closeAllReasonsModal(e) {
    if (e && e.target && e.target.closest('.reasons-modal-card')) return;
    const modal = document.getElementById('allReasonsModal');
    if (modal) modal.classList.remove('open');
  }
  
  /* ==========================================================================
     CARTA
     ========================================================================== */
  function renderLetter() {
    const body = document.getElementById('letterContent');
    const sig = document.getElementById('signatureText');
    if (body) {
      body.innerHTML = appData.loveLetter.split('\n\n').filter(p => p.trim())
        .map(p => `<p>${p}</p>`).join('');
    }
    if (sig) sig.innerText = appData.signature;
  }
  
  function copyLetter() {
    const fullText = `${appData.loveLetter}\n\n${appData.signature}`;
    navigator.clipboard.writeText(fullText).then(() => {
      const label = document.getElementById('copyLabel');
      const icon = document.getElementById('copyIcon');
      if (label) label.innerText = 'Carta Copiada!';
      if (icon) icon.innerText = '✓';
      soundEngine.chime(784);
      setTimeout(() => {
        if (label) label.innerText = 'Copiar Carta';
        if (icon) icon.innerText = '📋';
      }, 2500);
    }).catch(() => {});
  }
  
  function burstSeal() {
    soundEngine.burst();
    const seal = document.querySelector('.letter-seal');
    if (seal) {
      seal.style.transform = 'scale(1.2) rotate(10deg)';
      setTimeout(() => { seal.style.transform = 'scale(1) rotate(0deg)'; }, 400);
    }
  }
  
  /* ==========================================================================
     DESEJOS
     ========================================================================== */
  const WISH_KEY = 'constelacao_wishes_v1';
  let wishes = [];
  
  function loadWishes() {
    try {
      const saved = localStorage.getItem(WISH_KEY);
      if (saved) {
        wishes = JSON.parse(saved);
      } else {
        wishes = [
          { text: 'Que este nosso amor continue infinito, paciente e doce como o céu noturno.', author: 'Vitor', date: '28 de Novembro' },
          { text: 'Mais abraços quentinhos, cafés da manhã juntos e risos até doer a barriga.', author: 'Meu Amor', date: '28 de Novembro' }
        ];
      }
    } catch (e) {
      wishes = [];
    }
    renderWishes();
  }
  
  function renderWishes() {
    const list = document.getElementById('wishesList');
    if (!list) return;
    list.innerHTML = wishes.map(w => `
      <div class="wish-bubble">
        <div>"${w.text}"</div>
        <div class="author">✦ ${w.author} · ${w.date}</div>
      </div>
    `).join('');
  }
  
  function handleWishSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('wishInput');
    const authorSelect = document.getElementById('wishAuthor');
    if (!input || !input.value.trim()) return;
  
    const newWish = {
      text: input.value.trim(),
      author: authorSelect ? authorSelect.value : 'Vitor',
      date: '28 de Novembro'
    };
  
    wishes.unshift(newWish);
    try { localStorage.setItem(WISH_KEY, JSON.stringify(wishes)); } catch (err) {}
    input.value = '';
    renderWishes();
    soundEngine.burst();
  }
  
  function openWishModal() {
    const modal = document.getElementById('wishModal');
    if (modal) modal.classList.add('open');
    soundEngine.chime(659.25);
  }
  
  function closeWishModal(e) {
    if (e && e.target && e.target.closest('.wish-modal-card')) return;
    const modal = document.getElementById('wishModal');
    if (modal) modal.classList.remove('open');
  }
  
  /* ==========================================================================
     NAVEGAÇÃO
     ========================================================================== */
  (function initNav() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const wishBtn = document.getElementById('wishBtn');
  
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuBtn.innerText = mobileMenu.classList.contains('open') ? 'Fechar' : 'Menu';
      });
  
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          menuBtn.innerText = 'Menu';
        });
      });
    }
  
    if (wishBtn) {
      wishBtn.addEventListener('click', openWishModal);
    }
  
    window.addEventListener('scroll', () => {
      const sections = ['hero', 'contador', 'galeria', 'motivos', 'carta'];
      const pos = window.scrollY + 220;
  
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          document.querySelectorAll('.bar-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-sec') === id);
          });
          document.querySelectorAll('.cosmic-nav a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
          break;
        }
      }
    }, { passive: true });
  })();
  
  /* ==========================================================================
     INICIALIZAÇÃO
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    renderVideos();
    renderLetter();
    updateReasonDisplay();
    loadWishes();
    updateCounter();
    setInterval(updateCounter, 1000);
  });
