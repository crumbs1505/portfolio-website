<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-content">
        <a href="#hero" class="nav-name">{{ personal.name }}</a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="social-links">
          <a :href="`https://linkedin.com/in/${personal.linkedin}`" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a :href="`https://github.com/${personal.github}`" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="section hero">
      <div class="container">
        <div class="hero-content">
          <h1>{{ personal.name }}</h1>
          <h2>{{ personal.title }}</h2>
          <p>{{ personal.bio }}</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="https://drive.google.com/file/d/1oRLmk_yKldU8FKbjsMSTUTBumra5JLn7/view?usp=sharing" class="btn btn-secondary" target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Skills Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Languages</h3>
            <div class="skill-tags">
              <span v-for="skill in skills.languages" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>Web & Frameworks</h3>
            <div class="skill-tags">
              <span v-for="skill in skills.frameworks" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
          <div class="skill-category">
            <h3>Technologies</h3>
            <div class="skill-tags">
              <span v-for="skill in skills.technologies" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="experience-timeline">
          <div v-for="job in experience" :key="job.title" class="timeline-item">
            <h3>{{ job.title }}</h3>
            <div class="company">{{ job.company }}</div>
            <div class="dates">{{ job.dates }}</div>
            <ul>
              <li v-for="desc in job.description" :key="desc">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <a :href="`https://github.com/${project.github}`" class="project-link" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Awards Section -->
    <section id="certifications" class="section">
      <div class="container">
        <h2 class="section-title">Certifications & Awards</h2>
        <div class="certifications-content">
          <div class="cert-section">
            <h3>Certifications</h3>
            <div class="cert-list">
              <div v-for="cert in certifications" :key="cert.name" class="cert-item">
                <h4>{{ cert.name }}</h4>
                <p>{{ cert.issuer }}</p>
              </div>
            </div>
          </div>
          
          <div class="cert-section">
            <h3>Awards</h3>
            <div class="cert-list">
              <div v-for="award in awards" :key="award.name" class="cert-item">
                <h4>{{ award.name }}</h4>
                <p>{{ award.issuer || award.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <div class="contact-content">
          <h2>Get In Touch</h2>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
          <div class="contact-info">
            <a :href="`mailto:${personal.email}`" class="contact-email">
              {{ personal.email }}
            </a>
            <div class="contact-social">
              <a :href="`https://linkedin.com/in/${personal.linkedin}`" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a :href="`https://github.com/${personal.github}`" target="_blank" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-social">
          <a :href="`https://linkedin.com/in/${personal.linkedin}`" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a :href="`https://github.com/${personal.github}`" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="footer-copyright">
          Sufyan Shaik
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { portfolioData } from './data.js'

export default {
  name: 'App',
  data() {
    return {
      personal: portfolioData.personal,
      skills: portfolioData.skills,
      experience: portfolioData.experience,
      projects: portfolioData.projects,
      certifications: portfolioData.certifications,
      awards: portfolioData.awards
    }
  },
  mounted() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.9)';
        navbar.style.boxShadow = 'none';
      }
    });
  }
}
</script>
