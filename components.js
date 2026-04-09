import {
    skills,
    experiences,
    stats,
    projects,
    videos,
    navigation,
    socialLinks
} from './data.js';

export function renderSkills() {
    const skillsContainer = document.querySelector('.skills-section');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skills.map(skill => `
    <div class="skill-item">
      <i class="${skill.icon}"></i>
      <span>${skill.name}</span>
    </div>
  `).join('');
}

export function renderExperience() {
    const experienceContainer = document.querySelector('.experience-timeline');
    if (!experienceContainer) return;

    experienceContainer.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-icon">
        <i class="${exp.icon}"></i>
      </div>
      <h3>${exp.title}</h3>
      <p>${exp.description}</p>
    </div>
  `).join('');
}

export function renderStats() {
    const statsContainer = document.querySelector('.stats-grid');
    if (!statsContainer) return;

    statsContainer.innerHTML = stats.map(stat => `
    <div class="stat">
      <span class="stat-number">${stat.number}<span class="plus">${stat.suffix}</span></span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

export function renderProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.alt}">
        <div class="project-overlay">
          <a href="${project.github}" class="project-link" target="_blank" title="View GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="${project.demo}" class="project-link" title="View Live Demo">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="project-role">
          <strong>Role:</strong> ${project.role}
        </p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render Videos Grid
export function renderVideos() {
    const videosContainer = document.querySelector('.videos-grid');
    if (!videosContainer) return;

    videosContainer.innerHTML = videos.map(video => `
    <div class="video-card">
      <div class="video-wrapper">
        <iframe 
          width="100%" 
          height="300" 
          src="${video.embedUrl}"
          title="YouTube video player" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      </div>
    </div>
  `).join('');
}

export function renderSocialIcons() {
    const socialIconsContainer = document.querySelector('.social-icons');
    if (!socialIconsContainer) return;

    socialIconsContainer.innerHTML = socialLinks.map(social => `
    <a href="${social.url}" class="social-link" title="${social.title}">
      <i class="${social.icon}"></i>
    </a>
  `).join('');
}

// Render Navigation
export function renderNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    console.log('Rendering navigation menu with items:', navigation);
    navMenu.innerHTML = navigation.map(nav => {
        return `
      <a href="${nav.href}" class="nav-link">
        ${nav.label}
      </a>
    `;
    }).join('');
}

export function initializeComponents() {
    renderNavigation();
    renderSkills();
    renderExperience();
    renderStats();
    renderProjects();
    renderVideos();
    renderSocialIcons();
}


export function setupScrollNavigation() {
    const pathname = window.location.pathname;
    const isIndexPage = !pathname.endsWith('projects.html');

    if (!isIndexPage) {
        // Projects page - set Projects link active
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === 'projects.html') {
                link.classList.add('active');
            }
        });
        return;
    }

    // Dùng Intersection Observer để bắt chính xác section đang hiển thị khi lướt
    const observerOptions = {
        root: null,
        // rootMargin '-50% 0px -50% 0px' nghĩa là cắt phần nửa trên và nửa dưới màn hình, 
        // section nào cắt ngang trục giữa màn hình sẽ được active.
        rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;

                // Update navbar links
                document.querySelectorAll('.nav-link').forEach(link => {
                    if (link.getAttribute('href') === '#' + currentId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Bắt đầu quan sát tất cả các section
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Khởi tạo: nếu URL có hash (#...), active link tương ứng
    // Nếu không, check xem section nào ở trên cùng, active cái đó
    const hash = window.location.hash || '#home';
    const initialSection = document.querySelector(hash);

    if (initialSection) {
        // Active link tương ứng với section hiện tại
        const sectionId = initialSection.id;
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}
