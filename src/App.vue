<template>
  <div id="app" class="bg-surface text-on-surface min-h-screen">
    <!-- Top Navigation Bar -->
    <header class="site-header fixed top-0 w-full z-50 bg-surface/95 border-b border-white/5 h-20 transition-[height,background-color] duration-300 ease-in-out">
      <div class="flex justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
        <a class="font-headline-md text-headline-md font-bold text-primary tracking-tight" href="#">
          {{ personal.fullName }}
        </a>
        <nav class="hidden md:flex items-center gap-stack-lg">
          <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#experience">Experience</a>
          <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#projects">Projects</a>
          <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
          <a 
            href="https://drive.google.com/file/d/1LyYvonn3hPYmeGXqCF1dDqKgELZTfdob/view?usp=sharing" 
            target="_blank"
            class="bg-primary text-on-primary-container px-6 py-2.5 rounded-lg font-label-code text-label-code uppercase tracking-widest emerald-glow emerald-glow-hover transition-all btn-lift btn-pulse text-center inline-block"
          >
            Resume
          </a>
        </nav>
        <button class="md:hidden text-primary" @click="toggleMenu" aria-label="Toggle Menu">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>

      <!-- Mobile Dropdown Navigation -->
      <div v-if="isMenuOpen" class="md:hidden bg-surface/95 border-b border-white/5 px-margin-mobile py-4 flex flex-col gap-4">
        <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#about" @click="closeMenu">About</a>
        <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#experience" @click="closeMenu">Experience</a>
        <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#projects" @click="closeMenu">Projects</a>
        <a class="font-nav-link text-nav-link text-on-surface-variant hover:text-primary transition-colors" href="#contact" @click="closeMenu">Contact</a>
        <a 
          href="https://drive.google.com/file/d/1LyYvonn3hPYmeGXqCF1dDqKgELZTfdob/view?usp=sharing" 
          target="_blank"
          class="bg-primary text-on-primary-container px-6 py-2.5 rounded-lg font-label-code text-label-code uppercase tracking-widest emerald-glow emerald-glow-hover transition-all btn-lift text-center"
          @click="closeMenu"
        >
          Resume
        </a>
      </div>
    </header>

    <main class="geometric-bg pt-20">
      <!-- Hero Section -->
      <section class="min-h-[calc(100vh-5rem)] flex items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto py-12" id="hero">
        <div class="grid md:grid-cols-12 gap-stack-lg items-center w-full">
          <div class="md:col-span-7 space-y-stack-md reveal-on-scroll">
            <h1 class="font-headline-xl text-headline-xl text-on-surface leading-tight mb-4">
              Hi! I'm <span class="inverted-text-hover inverted-text-scroll text-primary">{{ personal.name }}</span>, a <span class="inverted-text-hover inverted-text-scroll text-primary">Blockchain</span> &amp; <span class="inverted-text-hover inverted-text-scroll text-primary">Backend Engineer</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Specializing in <span class="text-primary">Decentralized Identity Systems</span>, <span class="text-primary">Smart Contract Development</span> &amp; <span class="text-primary">Scalable Microservices</span>.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {{ personal.bio }}
            </p>
            <div class="flex flex-wrap gap-4 pt-4 reveal-stagger">
              <a class="bg-primary text-on-primary-container px-8 py-4 rounded-lg font-label-code text-label-code uppercase tracking-widest emerald-glow emerald-glow-hover transition-all btn-lift btn-pulse" href="#projects">
                View My Work
              </a>
              <a class="bg-transparent border border-white/10 hover:bg-white/5 text-on-surface px-8 py-4 rounded-lg font-label-code text-label-code uppercase tracking-widest transition-all btn-lift" href="#contact">
                Let's Talk
              </a>
            </div>
          </div>
          <div class="md:col-span-5 relative reveal-on-scroll">
            <div class="hero-image-container">
              <div class="aspect-square rounded-2xl overflow-hidden glass-card relative group hero-image-group border-2 border-primary/20 emerald-glow transition-all duration-500 hover:border-primary/50">
                <img 
                  alt="Sufyan Shaik - Professional Portrait" 
                  class="w-full h-full object-cover hero-img-element" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQcDsa1cRHqnFuAqsxYD4Bv-TeZdi0-lxA9SX0qQeIHo_N_WHWibu6sHTQhvZobBPAcy2scgh6phitJb9fYUTmNspZn0ZUrR-iXe2jHpLQ0rm4NG1DTwHkkPnCIyhO72Ujqawns0xKEKHJwd2BQgh1hHGJc4rNjk7Eav2gfEoFsSuZuCKE32u9fC68S7TSL-Y4V_Tqxbp_NPJxHfHNSmQRdPqelXWog58HyIsLmzJ2il8kSUdfHoR6yPBTeBzpqCdhMp8X1ku9aYHdlg"
                >
                <div class="absolute inset-0 emerald-reveal-overlay z-10"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20 pointer-events-none"></div>
              </div>
              <!-- Decorative Border Accents -->
              <div class="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-primary/40 pointer-events-none"></div>
              <div class="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-primary/40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience & Education Bento Section -->
      <section class="py-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden" id="experience">
        <h2 class="section-heading-reveal font-headline-lg text-headline-lg text-on-surface mb-stack-lg reveal-on-scroll">
          Journey <span class="text-primary">&amp;</span> Background
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Experience List -->
          <div class="md:col-span-2 space-y-6">
            <div 
              v-for="(exp, index) in experience" 
              :key="index" 
              class="glass-card rounded-xl p-stack-md flex flex-col justify-between hover:border-primary/20 transition-all reveal-on-scroll"
            >
              <div>
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="font-headline-md text-headline-md text-primary">{{ exp.company }}</h3>
                    <p class="font-label-code text-label-code text-on-surface-variant uppercase tracking-widest">{{ exp.title }}</p>
                  </div>
                  <span class="font-label-code text-label-code text-on-surface-variant">{{ exp.dates }}</span>
                </div>
                <ul class="space-y-4 text-on-surface-variant font-body-md reveal-stagger">
                  <li v-for="(desc, dIndex) in exp.description" :key="dIndex" class="flex gap-3 items-start">
                    <span class="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0"></span>
                    {{ desc }}
                  </li>
                </ul>
              </div>
              <div class="mt-8 flex flex-wrap gap-2 reveal-stagger">
                <span v-for="tag in exp.tags" :key="tag" class="px-2 py-1 rounded bg-surface border border-white/5 font-label-code text-[12px] text-primary">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="glass-card rounded-xl p-stack-md border-t-2 border-primary reveal-on-scroll flex flex-col items-start gap-6 hover:border-primary/20 transition-all">
            <div class="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary text-4xl">school</span>
            </div>
            <div class="space-y-2">
              <h3 class="font-headline-md text-headline-md text-on-surface">Education</h3>
              <p class="font-body-lg text-body-lg text-primary">{{ education.school }}</p>
              <p class="font-body-md text-body-md text-on-surface-variant">{{ education.degree }}</p>
            </div>
            <div class="inline-block px-3 py-1 rounded bg-primary/10 border border-primary/20">
              <span class="font-label-code text-label-code text-primary">CGPA: {{ education.cgpa }}</span>
            </div>
          </div>

          <!-- Certification Highlight -->
          <div class="glass-card rounded-xl p-stack-md flex flex-col justify-center items-center text-center group reveal-on-scroll hover:border-primary/20 transition-all">
            <span class="material-symbols-outlined text-primary text-5xl mb-4 group-hover:scale-110 transition-transform">workspace_premium</span>
            <h4 class="font-headline-md text-headline-md text-on-surface mb-3">Certifications</h4>
            <ul class="space-y-2 text-on-surface-variant font-body-md text-center reveal-stagger">
              <li v-for="cert in certifications" :key="cert" class="leading-tight">{{ cert }}</li>
            </ul>
          </div>

          <!-- Toastmasters / Awards -->
          <div class="md:col-span-2 glass-card rounded-xl p-stack-md flex flex-col justify-between hover:border-primary/20 transition-all reveal-on-scroll">
            <div class="flex items-start gap-6 w-full">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary text-3xl">emoji_events</span>
              </div>
              <div class="flex-grow">
                <h4 class="font-headline-md text-headline-md text-on-surface mb-6">Awards</h4>
                <div class="space-y-6 reveal-stagger">
                  <div v-for="award in awards" :key="award.name" class="border-l-2 border-primary/20 pl-4">
                    <h5 class="font-body-lg font-bold text-primary">{{ award.name }}</h5>
                    <p class="font-label-code text-[12px] text-on-surface-variant uppercase tracking-widest mt-1">
                      {{ award.issuer }} <span v-if="award.year">• {{ award.year }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="py-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="projects">
        <div class="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-4 reveal-on-scroll">
          <div>
            <h2 class="section-heading-reveal font-headline-lg text-headline-lg text-on-surface">Featured <span class="text-primary">Projects</span></h2>
            <p class="text-on-surface-variant font-body-lg mt-2">A selection of my architectural experiments and production deployments.</p>
          </div>
          <a class="font-label-code text-label-code text-primary hover:underline underline-offset-8 transition-all" :href="`https://github.com/${personal.github}`" target="_blank">
            Explore All Repositories &rarr;
          </a>
        </div>
        <div class="grid md:grid-cols-2 gap-stack-md">
          <!-- Projects -->
          <div 
            v-for="(project, index) in projects" 
            :key="project.title" 
            class="glass-card rounded-xl overflow-hidden group reveal-on-scroll"
            :style="{ transitionDelay: index * 0.1 + 's' }"
          >
            <div class="h-64 overflow-hidden relative">
              <img 
                :alt="project.title" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
                :src="project.image"
              >
            </div>
            <div class="p-stack-md">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-headline-md text-headline-md text-on-surface">{{ project.title }}</h3>
                <div class="flex gap-3">
                  <a v-if="project.link" :href="project.link" target="_blank" class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                    link
                  </a>
                  <a v-if="project.github" :href="`https://github.com/${project.github}`" target="_blank" class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                    code
                  </a>
                </div>
              </div>
              <div class="mb-4">
                <span class="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary font-label-code text-[10px] uppercase tracking-widest rounded">
                  {{ project.tag }}
                </span>
              </div>
              <p class="font-body-md text-on-surface-variant mb-6">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 reveal-stagger">
                <span v-for="tech in project.tech" :key="tech" class="font-label-code text-[11px] px-2 py-1 border border-white/10 rounded">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- GitHub Contribution Card -->
        <div ref="cardContainer" class="mt-12 glass-card rounded-xl p-stack-md reveal-on-scroll relative">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 class="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">grid_on</span>
                GitHub Contributions
              </h3>
              <p class="text-on-surface-variant font-body-md mt-1">Natively rendered contribution matrix from my GitHub activity.</p>
            </div>
            <div class="flex items-center gap-4">
              <div v-if="!loadingGithub && !githubError" class="text-right">
                <span class="font-headline-md text-headline-md text-primary font-bold">{{ githubTotal }}</span>
                <span class="text-on-surface-variant font-body-md ml-2">contributions in 2026</span>
              </div>
              <a href="https://github.com/crumbs1505" target="_blank" class="bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg font-label-code text-[12px] uppercase tracking-wider transition-all btn-lift">
                @crumbs1505
              </a>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loadingGithub" class="flex flex-col items-center justify-center py-12 space-y-4">
            <div class="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p class="text-on-surface-variant font-label-code text-[12px] uppercase tracking-widest animate-pulse">Loading Contribution Data...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="githubError" class="text-center py-8">
            <span class="material-symbols-outlined text-error text-4xl mb-2">error</span>
            <p class="text-on-surface-variant font-body-md">Failed to load GitHub activity. You can inspect my work directly on GitHub.</p>
          </div>

          <!-- Grid Chart -->
          <div v-else class="space-y-4">
            <div class="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              <div class="grid grid-flow-col grid-rows-7 gap-[4px] min-w-[760px] p-1">
                <div 
                  v-for="(day, idx) in githubContributions" 
                  :key="idx"
                  :class="[
                    'w-[11px] h-[11px] rounded-[2px] transition-all duration-300 relative',
                    day.isPlaceholder ? 'bg-transparent pointer-events-none' : getLevelClass(day.level)
                  ]"
                  @mouseenter="showTooltip(day, $event)"
                  @mouseleave="hideTooltip"
                >
                </div>
              </div>
            </div>

            <!-- Legend -->
            <div class="flex justify-between items-center text-[12px] text-on-surface-variant font-label-code px-1 pt-2 border-t border-white/5">
              <div>Year: 2026 Only</div>
              <div class="flex items-center gap-1.5">
                <span>Less</span>
                <div class="w-[10px] h-[10px] bg-white/5 rounded-[2px]"></div>
                <div class="w-[10px] h-[10px] bg-[#10b981]/20 rounded-[2px]"></div>
                <div class="w-[10px] h-[10px] bg-[#10b981]/40 rounded-[2px]"></div>
                <div class="w-[10px] h-[10px] bg-[#10b981]/70 rounded-[2px]"></div>
                <div class="w-[10px] h-[10px] bg-[#4edea3] rounded-[2px]"></div>
                <span>More</span>
              </div>
            </div>
          </div>

          <!-- Single Tooltip outside the scrollable container to prevent Y/X clipping -->
          <div 
            v-if="hoveredDay" 
            class="absolute z-30 bg-surface-container-high border border-white/10 px-3 py-1.5 rounded text-[11px] font-label-code whitespace-nowrap shadow-xl pointer-events-none transition-all duration-75"
            :style="{
              left: tooltipX + 'px',
              top: (tooltipY - 6) + 'px',
              transform: 'translate(-50%, -100%)'
            }"
          >
            <span class="text-primary font-bold">{{ hoveredDay.count }}</span> contributions on {{ formatDate(hoveredDay.date) }}
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="py-section-padding bg-surface-container-lowest" id="about">
        <div class="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div class="grid md:grid-cols-2 gap-stack-lg items-center">
            <div class="reveal-on-scroll">
              <h2 class="section-heading-reveal font-headline-lg text-headline-lg text-on-surface mb-6">Technical <span class="text-primary">Arsenal</span></h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
                My workflow centers on building scalable, type-safe backends and exploring the intersection of distributed systems and artificial intelligence.
              </p>
              <div class="grid grid-cols-2 gap-x-8 gap-y-6">
                <div class="reveal-on-scroll">
                  <h4 class="font-label-code text-label-code text-primary uppercase mb-3">Languages</h4>
                  <ul class="space-y-1 font-body-md text-on-surface-variant">
                    <li v-for="lang in skills.languages" :key="lang">{{ lang }}</li>
                  </ul>
                </div>
                <div class="reveal-on-scroll">
                  <h4 class="font-label-code text-label-code text-primary uppercase mb-3">Frameworks</h4>
                  <ul class="space-y-1 font-body-md text-on-surface-variant">
                    <li v-for="fw in skills.frameworks" :key="fw">{{ fw }}</li>
                  </ul>
                </div>
                <div class="col-span-2 mt-6 reveal-on-scroll">
                  <h4 class="font-label-code text-label-code text-primary uppercase mb-3">Blockchain</h4>
                  <div class="flex flex-wrap gap-3 reveal-stagger">
                    <span v-for="bc in skills.blockchain" :key="bc" class="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-label-code text-[12px]">
                      {{ bc }}
                    </span>
                  </div>
                </div>
                <div class="col-span-2 reveal-on-scroll">
                  <h4 class="font-label-code text-label-code text-primary uppercase mb-3">Cloud &amp; DevOps</h4>
                  <div class="flex flex-wrap gap-3 reveal-stagger">
                    <span v-for="cd in skills.cloudDevops" :key="cd" class="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-label-code text-[12px]">
                      {{ cd }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative reveal-on-scroll flex justify-center md:justify-end">
              <div class="w-full max-w-[280px] aspect-square glass-card rounded-xl flex flex-col justify-center items-center p-6 border-4 border-primary emerald-glow bg-primary/10 transition-all duration-500 hover:scale-[1.02]">
                <span class="font-headline-xl text-headline-xl text-primary mb-1">1</span>
                <span class="font-label-code text-label-code uppercase tracking-tighter text-on-surface-variant">Year of Experience</span>
                <span class="font-label-code text-[10px] uppercase tracking-widest text-primary mt-2">Engineering Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="contact">
        <div class="glass-card rounded-2xl p-stack-lg relative overflow-hidden reveal-on-scroll">
          <!-- Background Accent -->
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
          
          <div class="relative z-10 grid md:grid-cols-2 gap-stack-lg">
            <div class="reveal-on-scroll">
              <h2 class="section-heading-reveal font-headline-lg text-headline-lg text-on-surface mb-6">
                Let's <span class="text-primary">Connect !</span>
              </h2>

              <div class="space-y-6">
                <div class="flex items-center gap-4 group">
                  <div class="w-10 h-10 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span class="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <a class="font-body-md text-on-surface hover:text-primary transition-colors" :href="`mailto:${personal.email}`">
                    {{ personal.email }}
                  </a>
                </div>
                <div class="flex items-center gap-4 group">
                  <div class="w-10 h-10 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span class="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <span class="font-body-md text-on-surface">{{ personal.location }}</span>
                </div>
              </div>
            </div>
            
            <form class="space-y-8 reveal-on-scroll" @submit.prevent="submitForm" style="transition-delay: 0.2s;">
              <div class="relative">
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 peer font-body-md transition-all text-on-surface" 
                  placeholder=" " 
                  required
                >
                <label 
                  for="name" 
                  class="absolute text-on-surface-variant font-label-code uppercase text-[12px] duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary"
                >
                  Name
                </label>
              </div>
              <div class="relative">
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 peer font-body-md transition-all text-on-surface" 
                  placeholder=" " 
                  required
                >
                <label 
                  for="email" 
                  class="absolute text-on-surface-variant font-label-code uppercase text-[12px] duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary"
                >
                  Email Address
                </label>
              </div>
              <div class="relative">
                <textarea 
                  id="message" 
                  v-model="form.message"
                  class="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 peer font-body-md transition-all text-on-surface" 
                  placeholder=" " 
                  rows="3" 
                  required
                ></textarea>
                <label 
                  for="message" 
                  class="absolute text-on-surface-variant font-label-code uppercase text-[12px] duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>
              <button 
                type="submit" 
                :disabled="isSending"
                class="w-full bg-primary text-on-primary-container px-8 py-4 rounded-lg font-label-code text-label-code uppercase tracking-widest emerald-glow emerald-glow-hover transition-all btn-lift btn-pulse disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSending ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-surface-container-lowest border-t border-white/5 py-stack-lg">
      <div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-stack-md">
        <div class="text-center md:text-left">
          <h2 class="font-headline-md text-headline-md text-primary font-bold">{{ personal.fullName }}</h2>
          <p class="font-body-md text-body-md text-on-surface-variant mt-2 opacity-80">
            &copy; 2026 {{ personal.fullName }}. Built with Precision.
          </p>
        </div>
        <div class="flex gap-stack-lg">
          <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" :href="`https://github.com/${personal.github}`" target="_blank">GitHub</a>
          <a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" :href="`https://linkedin.com/in/${personal.linkedin}`" target="_blank">LinkedIn</a>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </footer>

    <!-- Success Modal Popup -->
    <transition name="fade">
      <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center px-margin-mobile">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-[#0b0f10]/85 backdrop-blur-sm" @click="closeSuccessModal"></div>
        <!-- Modal Card -->
        <div class="relative glass-card bg-surface-container/90 border border-primary/30 rounded-xl p-8 max-w-sm w-full shadow-2xl text-center space-y-6">
          <!-- Icon -->
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
            <span class="material-symbols-outlined text-primary text-3xl">mail</span>
          </div>
          <!-- Title & Content -->
          <div class="space-y-2">
            <h3 class="font-headline-md text-headline-md text-on-surface">Message Sent!</h3>
            <p class="font-body-md text-on-surface-variant">
              Thank you for contacting me. I will get back to you as soon as possible.
            </p>
          </div>
          <!-- Button -->
          <button 
            @click="closeSuccessModal" 
            class="w-full bg-primary text-on-primary-container py-3 rounded-lg font-label-code text-label-code uppercase tracking-widest transition-all btn-lift btn-pulse"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
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
      education: portfolioData.education,
      certifications: portfolioData.certifications,
      awards: portfolioData.awards,
      projects: portfolioData.projects,
      isMenuOpen: false,
      isSending: false,
      showSuccessModal: false,
      githubContributions: [],
      githubTotal: 0,
      loadingGithub: true,
      githubError: false,
      hoveredDay: null,
      tooltipX: 0,
      tooltipY: 0,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    // Scroll Revelation Logic
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    this.$el.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach((el) => {
      observer.observe(el)
    })
    this.revealObserver = observer

    const repeatObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting)
      })
    }, {
      threshold: 0.55,
      rootMargin: '-10% 0px -10% 0px'
    })

    this.$el.querySelectorAll('.inverted-text-scroll, .section-heading-reveal').forEach((el) => {
      repeatObserver.observe(el)
    })
    this.repeatObserver = repeatObserver

    // Sticky Header Effect
    this.header = this.$el.querySelector('header')
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.fetchGithubContributions()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    this.revealObserver?.disconnect()
    this.repeatObserver?.disconnect()
  },
  methods: {
    handleScroll() {
      const shouldCompact = window.scrollY > 50

      if (!this.header || shouldCompact === this.isHeaderCompact) {
        return
      }

      this.isHeaderCompact = shouldCompact
      this.header.classList.toggle('h-16', shouldCompact)
      this.header.classList.toggle('h-20', !shouldCompact)
      this.header.classList.toggle('bg-surface', shouldCompact)
      this.header.classList.toggle('bg-surface/95', !shouldCompact)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    closeSuccessModal() {
      this.showSuccessModal = false
    },
    async submitForm() {
      this.isSending = true
      try {
        const response = await fetch("https://formsubmit.co/ajax/sufyanshaik.dev@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          })
        })

        if (response.ok) {
          this.showSuccessModal = true
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        } else {
          alert("Oops! There was a problem sending your message. Please try again.")
        }
      } catch (error) {
        alert("Oops! There was a network error. Please try again later.")
      } finally {
        this.isSending = false
      }
    },
    async fetchGithubContributions() {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/crumbs1505");
        if (!response.ok) throw new Error("API response error");
        const json = await response.json();
        
        // Filter and sort for year 2026
        const year = 2026;
        let filtered = json.contributions.filter(c => c.date.startsWith(`${year}-`));
        filtered.sort((a, b) => a.date.localeCompare(b.date));
        
        if (filtered.length > 0) {
          // Thursday is index 4 (Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6)
          const firstDayOfWeek = 4;
          const placeholders = Array.from({ length: firstDayOfWeek }, () => ({ isPlaceholder: true }));
          this.githubContributions = [...placeholders, ...filtered];
          this.githubTotal = json.total[year] || filtered.reduce((sum, item) => sum + item.count, 0);
        } else {
          this.githubError = true;
        }
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);
        this.githubError = true;
      } finally {
        this.loadingGithub = false;
      }
    },
    showTooltip(day, event) {
      if (day.isPlaceholder) return;
      this.hoveredDay = day;
      const rect = event.target.getBoundingClientRect();
      const containerRect = this.$refs.cardContainer.getBoundingClientRect();
      // Position tooltip relative to the cardContainer
      this.tooltipX = rect.left - containerRect.left + (rect.width / 2);
      this.tooltipY = rect.top - containerRect.top;
    },
    hideTooltip() {
      this.hoveredDay = null;
    },
    getLevelClass(level) {
      switch (level) {
        case 1: return 'bg-[#10b981]/20 hover:scale-125 hover:shadow-[0_0_8px_rgba(16,185,129,0.3)]';
        case 2: return 'bg-[#10b981]/40 hover:scale-125 hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]';
        case 3: return 'bg-[#10b981]/70 hover:scale-125 hover:shadow-[0_0_8px_rgba(16,185,129,0.7)]';
        case 4: return 'bg-[#4edea3] hover:scale-125 hover:shadow-[0_0_8px_rgba(78,222,163,0.9)]';
        default: return 'bg-white/5 hover:bg-white/10 hover:scale-125';
      }
    },
    formatDate(dateStr) {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  }
}
</script>
