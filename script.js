
    AOS.init();
    const canvas = document.getElementById('starry-bg');
    const ctx = canvas.getContext('2d');
    let stars = [];
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity = 0.5 + 0.5 * Math.sin(this.twinklePhase);
        this.twinklePhase += this.twinkleSpeed;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
    function initStars() {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    }
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animateStars);
    }
    initStars();
    animateStars();
    const data = {
      fa: {
        name: "علیرضا داوری",
        jobTitle: "توسعه‌دهنده وب و برنامه نویس",
        aboutTitle: "درباره من",
        aboutText: "درود بر همه! من علیرضا داوری هستم، توسعه‌دهنده و برنامه‌نویس .NET و C# با حدود ۳ سال تجربه در زمینه طراحی و پیاده‌سازی انواع وب‌سایت‌های فروشگاهی، شرکتی، شخصی و معرفی. همچنین در حوزه فرانت‌اند فعالیت داشته‌ام و به ایجاد رابط‌های کاربری مدرن و واکنش‌گرا علاقه‌مندم. خوشحالم که تونستم عضوی از جامعه بزرگ و حرفه‌ای برنامه‌نویسان باشم و هر روز در مسیر یادگیری و رشد گام بردارم. علاوه بر برنامه‌نویسی، به طراحی بازی‌های دوبعدی علاقه دارم و در اوقات فراغت، وقتم رو به این علاقه‌ی جذاب اختصاص می‌دم",
        projectsTitle: "پروژه‌ها",
        projects: [
          {
            title: "سایت فروشگاهی",
            desc: "سایت فروش دوره‌های آنلاین و معرفی زبان‌های برنامه‌نویسی",
            type: "gif",
            src: "images/Gif/af.gif"
          },
          {
            title: "فروشگاه آنلاین",
            desc: "طراحی و پیاده‌سازی سایت فروشگاهی حرفه‌ای",
            type: "gif",
            src: "images/Gif/g.gif"
          }
        ],
        skillsTitle: "مهارت‌ها",
        skills: ["HTML", "CSS", "JavaScript", "LINQ", "Restful API", "EF Core", "Solid", "Git", "SQL", "C#", ".NET"],
        experienceTitle: "تجربه کاری",
        experience: [
          {
            title: "توسعه‌دهنده وب",
            date: "1400 - اکنون",
            desc: "طراحی و توسعه اپلیکیشن‌های وب با تکنولوژی‌های مدرن و همکاری با تیم و فریلنسری."
          }
        ],
        languagesTitle: "زبان‌ها",
        languages: [
          { name: "فارسی", level: "زبان مادری" },
          { name: "انگلیسی", level: "متوسط" },
          { name: "آلمانی", level: "مبتدی" }
        ],
        contactTitle: "تماس با من",
        social: {
          linkedinText: "لینکدین",
          githubText: "گیت‌هاب",
          gmailText: "ایمیل",
          phoneText: "تلفن"
        },
        resumeBtn: "دانلود رزومه",
        resumeLink: "https://alicodeda.github.io/ForMyResume/MyPdf/MyResumeFarsi.pdf",
        footerText: "© ۱۴۰۴ علیرضا داوری. تمامی حقوق محفوظ است."
      },
      en: {
        name: "Alireza Davari",
        jobTitle: "Web Developer & Programmer",
        aboutTitle: "About Me",
        aboutText: "Hi everyone! I'm Alireza Davari, a .NET and C# developer with around 3 years of experience in designing and implementing various types of websites including e-commerce, corporate, personal, and portfolio websites. I’ve also been involved in frontend development and enjoy creating modern and responsive user interfaces. I'm glad to be part of the large and professional developer community and I strive to grow and learn every day. In addition to programming, I’m passionate about 2D game design and I dedicate some of my free time to this exciting interest.",
        projectsTitle: "Projects",
        projects: [
          {
            title: "E-Commerce Website",
            desc: "A platform for selling online courses and showcasing programming languages.",
            type: "gif",
            src: "images/Gif/af.gif"
          },
          {
            title: "Online Store",
            desc: "Design and implementation of a professional e-commerce website.",
            type: "gif",
            src: "images/Gif/g.gif"
          }
        ],
        skillsTitle: "Skills",
        skills: ["HTML", "CSS", "JavaScript", "LINQ", "Restful API", "EF Core", "Solid", "Git", "SQL", "C#", ".NET"],
        experienceTitle: "Work Experience",
        experience: [
          {
            title: "Web Developer",
            date: "2021 - Present",
            desc: "Designed and developed modern web applications using up-to-date technologies, both in team settings and as a freelancer."
          }
        ],
        languagesTitle: "Languages",
        languages: [
          { name: "Persian", level: "Native" },
          { name: "English", level: "Intermediate" },
          { name: "German", level: "Beginner" }
        ],
        contactTitle: "Contact Me",
        social: {
          linkedinText: "LinkedIn",
          githubText: "GitHub",
          gmailText: "Email"
        },
        resumeBtn: "Download Resume",
        resumeLink: "https://alicodeda.github.io/ForMyResume/MyPdf/MyResumeEnglish.pdf",
        footerText: "© 2025 Alireza Davari. All rights reserved."
      }
    };
    const nameEl = document.getElementById('name');
    const jobTitleEl = document.getElementById('jobTitle');
    const aboutTitleEl = document.getElementById('aboutTitle');
    const aboutTextEl = document.getElementById('aboutText');
    const projectsTitleEl = document.getElementById('projectsTitle');
    const projectsList = document.getElementById('projectsList');
    const skillsTitleEl = document.getElementById('skillsTitle');
    const skillsList = document.getElementById('skillsList');
    const experienceTitleEl = document.getElementById('experienceTitle');
    const experienceList = document.getElementById('experienceList');
    const languagesTitleEl = document.getElementById('languagesTitle');
    const languagesList = document.getElementById('languagesList');
    const contactTitleEl = document.getElementById('contactTitle');
    const socialLinks = document.getElementById('socialLinks');
    const linkedinTextEl = document.getElementById('linkedinText');
    const githubTextEl = document.getElementById('githubText');
    const gmailTextEl = document.getElementById('gmailText');
    const phoneTextEl = document.getElementById('phoneText');
    const resumeBtnEl = document.getElementById('resumeBtn');
    const footerTextEl = document.getElementById('footerText');
    const langButtons = document.querySelectorAll('#langSwitcher button[data-lang]');
    function clearChildren(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
    function render(lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
      langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
      const d = data[lang];
      nameEl.textContent = d.name;
      jobTitleEl.textContent = d.jobTitle;
      aboutTitleEl.textContent = d.aboutTitle;
      aboutTextEl.textContent = d.aboutText;
      projectsTitleEl.textContent = d.projectsTitle;
      skillsTitleEl.textContent = d.skillsTitle;
      experienceTitleEl.textContent = d.experienceTitle;
      languagesTitleEl.textContent = d.languagesTitle;
      contactTitleEl.textContent = d.contactTitle;
      linkedinTextEl.textContent = d.social.linkedinText;
      githubTextEl.textContent = d.social.githubText;
      gmailTextEl.textContent = d.social.gmailText;
      resumeBtnEl.textContent = d.resumeBtn;
      resumeBtnEl.href = d.resumeLink;
      footerTextEl.textContent = d.footerText;
      clearChildren(socialLinks);
      const linkedinLink = document.createElement('a');
      linkedinLink.href = "https://www.linkedin.com/in/alireza-davari-429466351";
      linkedinLink.target = "_blank";
      linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i> <span id="linkedinText">' + d.social.linkedinText + '</span>';
      socialLinks.appendChild(linkedinLink);
      const githubLink = document.createElement('a');
      githubLink.href = "https://github.com/AliCodeDa";
      githubLink.target = "_blank";
      githubLink.innerHTML = '<i class="fab fa-github"></i> <span id="githubText">' + d.social.githubText + '</span>';
      socialLinks.appendChild(githubLink);
      const gmailLink = document.createElement('a');
      gmailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=dallald1212@gmail.com";
      gmailLink.target = "_blank";
      gmailLink.innerHTML = '<i class="fas fa-envelope"></i> <span id="gmailText">' + d.social.gmailText + '</span>';
      socialLinks.appendChild(gmailLink);
      if (lang === 'fa') {
        const phoneLink = document.createElement('a');
        phoneLink.href = "tel:+989365017089";
        phoneLink.id = "phoneLink";
        phoneLink.innerHTML = '<i class="fas fa-phone"></i> <span id="phoneText">' + d.social.phoneText + '</span>';
        socialLinks.appendChild(phoneLink);
      }
      clearChildren(projectsList);
      d.projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-aos', 'fade-up');
        let media;
        if (p.type === 'gif') {
          media = document.createElement('img');
          media.src = p.src;
          media.alt = p.title;
        }
        card.appendChild(media);
        const content = document.createElement('div');
        content.className = 'project-content';
        const title = document.createElement('h3');
        title.textContent = p.title;
        const desc = document.createElement('p');
        desc.textContent = p.desc;
        const links = document.createElement('div');
        links.className = 'project-links';
        const viewLink = document.createElement('a');
        viewLink.href = "#";
        viewLink.textContent = lang === 'fa' ? 'مشاهده' : 'View';
        viewLink.addEventListener('click', (e) => {
          e.preventDefault();
          const win = window.open('', '_blank');
          win.document.write(`
            <html>
              <head>
                <title>${p.title}</title>
                <style>
                  html, body {
                    margin: 0;
                    padding: 0;
                    background: #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  }
                  img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                  }
                </style>
              </head>
              <body>
                <img src="${p.src}" alt="${p.title}">
              </body>
            </html>
          `);
          win.document.close();
        });
        links.appendChild(viewLink);
        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(links);
        card.appendChild(content);
        projectsList.appendChild(card);
      });
      clearChildren(skillsList);
      d.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill';
        span.textContent = skill;
        skillsList.appendChild(span);
      });
      clearChildren(experienceList);
      d.experience.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experience-item';
        div.setAttribute('data-aos', 'fade-left');
        const h4 = document.createElement('h4');
        h4.textContent = exp.title;
        const span = document.createElement('span');
        span.textContent = exp.date;
        const p = document.createElement('p');
        p.textContent = exp.desc;
        div.appendChild(h4);
        div.appendChild(span);
        div.appendChild(p);
        experienceList.appendChild(div);
      });
      clearChildren(languagesList);
      d.languages.forEach(langObj => {
        const div = document.createElement('div');
        div.className = 'language';
        div.textContent = langObj.name + ' ';
        const span = document.createElement('span');
        span.className = 'level';
        span.textContent = '(' + langObj.level + ')';
        div.appendChild(span);
        languagesList.appendChild(div);
      });
    }
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        render(btn.dataset.lang);
      });
    });
    render('en');
