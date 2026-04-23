// ==================== DATOS DEL PROGRAMA ====================

// Participantes
const participantes = [
    { id: 1, nombre: "Sofía Castillo", edad: 16, talento: "Canto", bio: "Sofía tiene una voz privilegiada que ha cautivado a todos desde su primera audición. Influenciada por el pop y el soul, promete emocionar en cada gala.", votos: 12450 },
    { id: 2, nombre: "Valentino bonilla", edad: 17, talento: "Baile Urbano", bio: "Campeón regional de breaking, Mateo trae energía y creatividad al escenario. Sus coreografías son únicas.", votos: 9870 },
    { id: 3, nombre: "Valentina Muñoz", edad: 15, talento: "Actuación", bio: "Esta joven actriz ha participado en obras de teatro escolar y ahora busca conquistar la pantalla chica.", votos: 15320 },
    { id: 4, nombre: "Lucas Fuentes", edad: 18, talento: "Guitarra", bio: "Compositor y multiinstrumentista, Lucas es un prodigio de la música que escribe sus propias canciones.", votos: 7650 },
    { id: 5, nombre: "Camila Rojas", edad: 14, talento: "Pintura en vivo", bio: "Camila crea arte en tiempo real, sorprendiendo con sus habilidades pictóricas frente al público.", votos: 5430 },
    { id: 6, nombre: "Diego Fernández", edad: 17, talento: "Beatbox", bio: "El rey del beatbox, capaz de imitar cualquier instrumento con su boca. Un show asegurado.", votos: 8920 }
];

// Jurado
const jurado = [
    { id: 1, nombre: "Alejandra Sanz", rol: "Jurado Principal - Música", bio: "Cantante y compositora con 15 años de trayectoria. Ha sido jurado en múltiples programas de talentos.", img: "🎤" },
    { id: 2, nombre: "Roberto Díaz", rol: "Jurado - Danza", bio: "Coreógrafo de renombre internacional, ha trabajado con grandes estrellas de la música.", img: "💃" },
    { id: 3, nombre: "Mónica Herrera", rol: "Jurado - Actuación", bio: "Actriz y directora teatral, conoce el talento juvenil como nadie.", img: "🎭" },
    { id: 4, nombre: "Carlos Méndez", rol: "Jurado Invitado", bio: "Productor musical y cazatalentos, descubre nuevas estrellas.", img: "🎹" }
];

// Presentadores
const presentadores = [
    { id: 1, nombre: "Javier Montenegro", rol: "Presentador Principal", bio: "Conductor con más de 10 años de experiencia en televisión. Carismático y cercano al público.", img: "🎙️" },
    { id: 2, nombre: "Daniela Paz", rol: "Co-presentadora / Backstage", bio: "Periodista de espectáculos que te traerá todas las novedades desde el detrás de escena.", img: "📹" }
];

// Patrocinadores
const patrocinadores = [
    { id: 1, nombre: "Coca-Cola", tipo: "Bebida Oficial", descripcion: "Refrescando el talento", icono: "🥤" },
    { id: 2, nombre: "Movistar", tipo: "Telecomunicaciones", descripcion: "Conectando a los fans", icono: "📱" },
    { id: 3, nombre: "Ripley", tipo: "Tienda Oficial", descripcion: "Tu estilo, tu talento", icono: "🛍️" },
    { id: 4, nombre: "Banco de Chile", tipo: "Banco Oficial", descripcion: "Apoyando tus sueños", icono: "🏦" },
    { id: 5, nombre: "Soprole", tipo: "Alimentación", descripcion: "Nutriendo el talento", icono: "🥛" },
    { id: 6, nombre: "Claro", tipo: "Streaming", descripcion: "Transmisiones en vivo", icono: "📺" }
];

// Contenido multimedia
let contenidoMultimedia = [
    { id: 1, titulo: "Audiciones - Lo mejor", tipo: "videos", descripcion: "Los mejores momentos de las audiciones", duracion: "3:45" },
    { id: 2, titulo: "Entrevista a Sofía", tipo: "entrevistas", descripcion: "Conoce a nuestra participante favorita", duracion: "5:20" },
    { id: 3, titulo: "Backstage Gala 1", tipo: "backstage", descripcion: "Detrás de cámaras del primer show", duracion: "8:15" },
    { id: 4, titulo: "Presentación de Mateo", tipo: "videos", descripcion: "El baile que sorprendió a todos", duracion: "2:30" },
    { id: 5, titulo: "Entrevista al jurado", tipo: "entrevistas", descripcion: "Qué opinan los expertos", duracion: "6:45" },
    { id: 6, titulo: "Preparación de Valentina", tipo: "backstage", descripcion: "Cómo se prepara para su actuación", duracion: "4:50" }
];

// ==================== FUNCIONES DE RENDERIZADO ====================

// Renderizar participantes
function renderParticipantes() {
    const container = document.getElementById('lista-participantes');
    if (!container) return;
    
    const participantesOrdenados = [...participantes].sort((a, b) => b.votos - a.votos);
    
    container.innerHTML = participantesOrdenados.map(p => `
        <div class="card">
            <div class="card-img">
                ${p.talento === "Canto" ? "🎤" : p.talento === "Baile Urbano" ? "💃" : p.talento === "Actuación" ? "🎭" : p.talento === "Guitarra" ? "🎸" : p.talento === "Pintura en vivo" ? "🎨" : "🎧"}
            </div>
            <div class="card-content">
                <h3>${p.nombre}</h3>
                <div class="rol">${p.edad} años • ${p.talento}</div>
                <p class="bio">${p.bio}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: var(--accent);">❤️ ${p.votos.toLocaleString()} votos</span>
                    <button class="vote-btn" onclick="votar(${p.id})">Votar</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar ranking (top votados)
function renderRanking() {
    const container = document.getElementById('ranking');
    if (!container) return;
    
    const topParticipantes = [...participantes]
        .sort((a, b) => b.votos - a.votos)
        .slice(0, 5);
    
    container.innerHTML = topParticipantes.map((p, index) => `
        <div class="ranking-item">
            <div class="ranking-position">${index + 1}</div>
            <div class="ranking-info">
                <div class="ranking-name">${p.nombre}</div>
                <div class="ranking-votes">${p.talento}</div>
            </div>
            <div class="ranking-score">${p.votos.toLocaleString()} pts</div>
        </div>
    `).join('');
}

// Renderizar jurado
function renderJurado() {
    const container = document.getElementById('lista-jurado');
    if (!container) return;
    
    container.innerHTML = jurado.map(j => `
        <div class="card">
            <div class="card-img" style="font-size: 48px;">${j.img}</div>
            <div class="card-content">
                <h3>${j.nombre}</h3>
                <div class="rol">⭐ ${j.rol}</div>
                <p class="bio">${j.bio}</p>
            </div>
        </div>
    `).join('');
}

// Renderizar presentadores
function renderPresentadores() {
    const container = document.getElementById('lista-presentadores');
    if (!container) return;
    
    container.innerHTML = presentadores.map(p => `
        <div class="card">
            <div class="card-img" style="font-size: 48px;">${p.img}</div>
            <div class="card-content">
                <h3>${p.nombre}</h3>
                <div class="rol">🎙️ ${p.rol}</div>
                <p class="bio">${p.bio}</p>
            </div>
        </div>
    `).join('');
}

// Renderizar patrocinadores
function renderPatrocinadores() {
    const container = document.getElementById('lista-patrocinadores');
    if (!container) return;
    
    container.innerHTML = patrocinadores.map(p => `
        <div class="patrocinador-card">
            <div class="patrocinador-icon">${p.icono}</div>
            <h4>${p.nombre}</h4>
            <p>${p.tipo}</p>
            <small style="color: var(--text-secondary);">${p.descripcion}</small>
        </div>
    `).join('');
}

// Renderizar contenido multimedia (con tabs)
let currentTab = 'videos';

function renderContenido(tipo = currentTab) {
    const container = document.getElementById('contenido-galeria');
    if (!container) return;
    
    const filtrado = contenidoMultimedia.filter(c => c.tipo === tipo);
    
    container.innerHTML = filtrado.map(c => `
        <div class="contenido-card">
            <div class="contenido-thumb">
                <i class="fas ${c.tipo === 'videos' ? 'fa-video' : c.tipo === 'entrevistas' ? 'fa-microphone-alt' : 'fa-camera'}"></i>
                <div class="play-overlay"><i class="fas fa-play"></i></div>
            </div>
            <div class="contenido-info">
                <h4>${c.titulo}</h4>
                <p>${c.descripcion}</p>
                <small style="color: var(--text-secondary);">⏱️ ${c.duracion}</small>
            </div>
        </div>
    `).join('');
}

// ==================== FUNCIÓN DE VOTACIÓN ====================

function votar(idParticipante) {
    const participante = participantes.find(p => p.id === idParticipante);
    if (participante) {
        participante.votos += 1;
        renderParticipantes();
        renderRanking();
        
        // Animación de feedback
        const btn = event.target;
        btn.textContent = '✓ Votado';
        btn.style.opacity = '0.7';
        setTimeout(() => {
            btn.textContent = 'Votar';
            btn.style.opacity = '1';
        }, 1500);
        
        console.log(`✅ Votaste por ${participante.nombre}`);
    }
}

// ==================== INICIALIZAR TABS ====================

function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            renderContenido(currentTab);
        });
    });
}

// ==================== SCROLL SUAVE Y RESPONSIVE ====================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#161b22';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '15px';
                navLinks.style.borderBottom = '1px solid #30363d';
            }
        });
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.padding = '0';
            navLinks.style.backgroundColor = 'transparent';
        } else if (window.innerWidth <= 768 && navLinks) {
            navLinks.style.display = 'none';
        }
    });
}

// ==================== INICIALIZACIÓN ====================

document.addEventListener('DOMContentLoaded', () => {
    renderParticipantes();
    renderRanking();
    renderJurado();
    renderPresentadores();
    renderPatrocinadores();
    renderContenido();
    initTabs();
    initSmoothScroll();
    initMobileMenu();
    
    // Actualizar ranking cada 5 segundos (simulación de votos en tiempo real)
    setInterval(() => {
        renderRanking();
    }, 5000);
    
    console.log('🎉 Mi Gran Talento - Web cargada exitosamente');
});
