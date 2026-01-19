// ========== CONFIGURACIÓN ==========
const projects = [
    {
        id: 1,
        title: "Portfolio Personal",
        description: "Mi propio portfolio personal completo y responsivo.",
        techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "#",
        image: "assets/images/port.png"
    },
    {
        id: 2,
        title: "LaSalle Business Match 2026",
        description: "Web profesional para feria de empresas real.",
        techs: ["PHP", "MySQL", "Bootstrap", "HTML", "Servidor alojamiento real"],
        link: "http://2.139.194.95:8085/index.php",
        image: "assets/images/busi.png"
    },
    {
        id: 3,
        title: "Gestor Garaje Futurista",
        description: "Web interactiva para gestión de un garaje futurista, frontend + php, sql.",
        techs: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        link: "#",
        image: "assets/images/gar.png"
    },
    {
        id: 4,
        title: "CRUD Administrativo JAVA",
        description: "Panel de control interactivo con reportes en tiempo real + ejs de hilos.",
        techs: ["Java", "SQL Server"],
        link: "#",
        image: "assets/images/crud.png"
    }
];

 

// Renderizar proyectos
function renderProjects() {
    const container = document.querySelector('.projects-section .row');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="col-lg-6 col-md-6">
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;">
                </div>
                <div class="project-content">
                    <h5>${project.title}</h5>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.techs.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-buttons">
                        <a href="${project.link}" target="_blank" class="project-btn"><i class="fas fa-external-link-alt"></i> Ver</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Scroll suave y cerrar menú
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    closeMenu();
                }
            }
        });
    });
}

// Cerrar menú en móvil
function closeMenu() {
    const toggle = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    if (collapse?.classList.contains('show')) {
        toggle.click();
    }
}

// Efecto navbar al scroll
function setupNavbarEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar-custom');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50 
                ? '0 8px 32px rgba(255, 0, 110, 0.3)' 
                : '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
    });
}

 
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupNavigation();
    setupNavbarEffect();
});
