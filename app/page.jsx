"use client";

import { useState } from "react";

function CatIllustration({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 340 330"
      role="img"
      aria-label="Cute cream-colored cat wearing a pink bow and working on a laptop"
    >
      <ellipse cx="170" cy="300" rx="115" ry="14" fill="#edc6d6" opacity=".55" />
      <circle cx="264" cy="66" r="23" fill="#ffe58a" />
      <path d="M57 91 Q30 70 48 48 Q70 58 82 78" fill="#ffb6d5" />
      <path d="M78 77 Q75 47 101 42 Q113 66 98 88" fill="#ffb6d5" />
      <path d="M82 80 Q53 72 48 51 Q71 57 82 80" fill="#4a3540" opacity=".14" />
      <path d="M98 88 Q96 59 101 44 Q115 65 98 88" fill="#4a3540" opacity=".14" />
      <path d="M91 111 L76 40 Q74 30 86 38 L127 77" fill="#fff0d9" stroke="#4a3540" strokeWidth="4" strokeLinejoin="round" />
      <path d="M210 77 L252 39 Q264 31 261 47 L248 112" fill="#fff0d9" stroke="#4a3540" strokeWidth="4" strokeLinejoin="round" />
      <path d="M89 90 L86 51 L111 79" fill="#ffb6d5" />
      <path d="M224 79 L251 51 L243 94" fill="#ffb6d5" />
      <path d="M78 142 C78 96 111 73 168 73 C225 73 258 101 258 146 C258 190 222 217 168 217 C114 217 78 187 78 142Z" fill="#fff0d9" stroke="#4a3540" strokeWidth="4" />
      <ellipse cx="133" cy="137" rx="8" ry="12" fill="#4a3540" />
      <ellipse cx="204" cy="137" rx="8" ry="12" fill="#4a3540" />
      <circle cx="130" cy="133" r="2.5" fill="#fff" />
      <circle cx="201" cy="133" r="2.5" fill="#fff" />
      <ellipse cx="118" cy="157" rx="13" ry="7" fill="#ffb6d5" opacity=".8" />
      <ellipse cx="220" cy="157" rx="13" ry="7" fill="#ffb6d5" opacity=".8" />
      <path d="M160 153 Q169 163 178 153 Q170 171 160 153" fill="#d97f9e" />
      <path d="M169 166 Q158 180 150 169 M169 166 Q180 180 188 169" fill="none" stroke="#4a3540" strokeWidth="3" strokeLinecap="round" />
      <path d="M99 185 Q75 208 96 226" fill="none" stroke="#4a3540" strokeWidth="4" strokeLinecap="round" />
      <path d="M237 184 Q262 204 244 226" fill="none" stroke="#4a3540" strokeWidth="4" strokeLinecap="round" />
      <path d="M145 83 Q128 55 105 72 Q113 96 145 95Z" fill="#ff8fbd" stroke="#4a3540" strokeWidth="3" />
      <path d="M145 83 Q164 56 184 74 Q177 97 145 95Z" fill="#ffb6d5" stroke="#4a3540" strokeWidth="3" />
      <circle cx="145" cy="84" r="8" fill="#ffe58a" stroke="#4a3540" strokeWidth="3" />
      <path d="M117 213 Q170 190 220 215 L234 270 Q170 290 106 270Z" fill="#ffb6d5" stroke="#4a3540" strokeWidth="4" />
      <path d="M116 235 Q87 245 94 268 Q98 279 116 268" fill="#fff0d9" stroke="#4a3540" strokeWidth="4" />
      <path d="M222 235 Q252 246 245 268 Q241 279 222 268" fill="#fff0d9" stroke="#4a3540" strokeWidth="4" />
      <rect x="100" y="239" width="140" height="56" rx="10" fill="#ffe58a" stroke="#4a3540" strokeWidth="4" />
      <path d="M113 248 H227 L216 278 H124Z" fill="#fff9f0" stroke="#4a3540" strokeWidth="3" strokeLinejoin="round" />
      <path d="M150 259 L143 267 L150 274 M190 259 L197 267 L190 274 M175 257 L166 276" fill="none" stroke="#d97f9e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 160 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5Z" fill="#ffe58a" />
      <path d="M284 178 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4Z" fill="#ffb6d5" />
      <text x="47" y="235" fontSize="23" fill="#d97f9e">♥</text>
      <text x="275" y="123" fontSize="20" fill="#d97f9e">♥</text>
    </svg>
  );
}

function PawPrint({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="30" rx="12" ry="9" fill="currentColor" />
      <ellipse cx="10" cy="19" rx="5" ry="7" transform="rotate(-25 10 19)" fill="currentColor" />
      <ellipse cx="21" cy="11" rx="5" ry="7" transform="rotate(-8 21 11)" fill="currentColor" />
      <ellipse cx="33" cy="13" rx="5" ry="7" transform="rotate(14 33 13)" fill="currentColor" />
      <ellipse cx="41" cy="23" rx="5" ry="7" transform="rotate(28 41 23)" fill="currentColor" />
    </svg>
  );
}

const navItems = ["Home", "About", "Education", "Projects", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kathy's Programmer Profile home">
          <span className="brand-cat">🐱</span>
          <span>Kathy<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Say meow! ♡</a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> HELLO, INTERNET FRIEND!</span>
          <h1>Meoww, I’m <span>Kathy!</span><span className="title-heart">♡</span></h1>
          <p className="hero-lead">
            A little cat lover with a big curiosity for <strong>technology</strong>.
          </p>
          <p className="hero-description">
            I’m a college student learning in the field of technology. I’m passionate about programming,
            designing, and exploring new technologies. I enjoy learning how websites and systems work and
            discovering new ways to solve problems through technology. As I continue my journey in
            Information Technology, I aim to improve my coding skills, gain more experience, and create
            useful projects.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#about">Explore My Portfolio <span>↗</span></a>
            <a className="text-link" href="#projects">See what I’m building <span>♡</span></a>
          </div>
          <div className="hero-note"><span>✦</span> Currently learning, creating, and growing!</div>
        </div>
        <div className="hero-art">
          <div className="art-circle" />
          <div className="art-tag tag-top">૮ ˶ᵔ ᵕ ᵔ˶ ა</div>
          <CatIllustration className="main-cat" />
          <PawPrint className="paw paw-one" />
          <PawPrint className="paw paw-two" />
          <span className="sparkle sparkle-one">✦</span>
          <span className="sparkle sparkle-two">✧</span>
          <div className="art-caption"><span>♡</span> A little cat, a lot of code!</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>

      <section className="about section-shell section-padding" id="about">
        <div className="section-heading">
          <span className="eyebrow">A LITTLE INTRODUCTION</span>
          <h2>About <span>Me</span> <span className="heading-doodle">♡</span></h2>
          <p>Get to know the human behind the keyboard.</p>
        </div>
        <div className="about-grid">
          <div className="about-art-card">
            <div className="about-sun" />
            <div className="about-cat-emoji" aria-hidden="true">😺</div>
            <div className="bow">🎀</div>
            <PawPrint className="about-paw" />
            <span className="floating-star star-a">✦</span>
            <span className="floating-star star-b">✧</span>
            <div className="art-sticker">Creative mind,<br />curious cat!</div>
          </div>
          <article className="about-card">
            <span className="card-kicker">THAT’S ME! <span>✿</span></span>
            <h3>Curious by nature,<br />creative by heart.</h3>
            <p>
              I am Kathy, an Information Technology student who enjoys creativity, technology, and learning
              new things. I like exploring ideas, designing, and finding solutions to problems. I believe
              that every challenge is an opportunity to grow and improve. My goal is to continue developing
              my skills and become a better programmer in the future.
            </p>
            <div className="interest-tags">
              <span>♡ Creativity</span><span>⌘ Technology</span><span>✎ Design</span>
            </div>
          </article>
        </div>
      </section>

      <section className="education section-padding" id="education">
        <div className="section-shell">
          <div className="section-heading">
            <span className="eyebrow">LEARNING ONE STEP AT A TIME</span>
            <h2>My College <span>Journey</span> <span className="heading-doodle">✿</span></h2>
            <p>Every new lesson is another little level unlocked.</p>
          </div>
          <div className="education-card">
            <div className="education-illustration">
              <div className="edu-circle" />
              <div className="books" aria-hidden="true"><span /><span /><span /></div>
              <div className="graduate-cat" aria-hidden="true">🐱</div>
              <div className="grad-cap" aria-hidden="true">🎓</div>
              <span className="edu-star">✦</span>
              <span className="edu-flower">✿</span>
            </div>
            <div className="education-copy">
              <span className="status-pill"><span /> CURRENTLY STUDYING</span>
              <h3>Nueva Vizcaya State University</h3>
              <p className="degree">Bachelor of Science in Information Technology</p>
              <span className="major-label">BSIT — Network Design Management (NDM)</span>
              <p>
                I am currently a 3rd-year college student at Nueva Vizcaya State University, pursuing a
                Bachelor of Science in Information Technology (BSIT), majoring in Network Design Management
                (NDM).
              </p>
              <p>
                Throughout my college journey, I am developing my knowledge and skills in programming,
                networking, system development, and other areas of Information Technology. I continue to
                learn new technologies, improve my problem-solving skills, and apply what I learn through
                school activities and projects.
              </p>
              <div className="learning-list">
                <span>♡ Programming</span><span>♡ Networking</span><span>♡ System Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-shell section-padding" id="projects">
        <div className="section-heading">
          <span className="eyebrow">MADE WITH CURIOSITY & COFFEE</span>
          <h2>My <span>Projects</span> <span className="heading-doodle">⌘</span></h2>
          <p>Little steps today, bigger creations tomorrow.</p>
        </div>
        <article className="project-card">
          <div className="project-visual">
            <div className="project-window">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="window-code"><span>&lt;hello /&gt;</span><b>building something<br />meow-gical...</b><em>♡ ✦ ♡</em></div>
            </div>
            <div className="laptop-cat" aria-hidden="true">🐈‍⬛</div>
            <PawPrint className="project-paw" />
            <span className="project-heart">♡</span>
          </div>
          <div className="project-info">
            <span className="project-number">PROJECT 01 / IN PROGRESS</span>
            <div className="project-title-row"><h3>System Development</h3><span className="status-badge">In Progress</span></div>
            <p>
              I am currently working on developing a system as part of my learning journey in Information
              Technology. This project allows me to practice programming, improve my problem-solving skills,
              and understand the process of creating a functional system. It is still in progress, and I am
              continuously working to improve its features and functionality.
            </p>
            <div className="project-tools"><span>Learning</span><span>Problem Solving</span><span>Development</span></div>
            <span className="coming-soon">More projects coming soon! <span>♡</span></span>
          </div>
        </article>
        <div className="project-footnote"><span>✦</span> This is just the beginning of my coding journey.</div>
      </section>

      <section className="contact section-padding" id="contact">
        <div className="section-shell">
          <div className="section-heading">
            <span className="eyebrow">LET’S BE INTERNET FRIENDS</span>
            <h2>Get in <span>Touch</span> <span className="heading-doodle">♡</span></h2>
            <p>Have a question or just want to say meow? My inbox is open!</p>
          </div>
          <div className="contact-layout">
            <div className="contact-copy">
              <h3>Let’s make<br /><span>something lovely.</span></h3>
              <p>
                Feel free to contact me for questions, collaborations, or opportunities. I am always open to
                learning new things, sharing ideas, and connecting with others in the field of technology.
              </p>
              <div className="contact-cat" aria-hidden="true">💌🐱</div>
              <div className="contact-doodle">sending you a little happiness ♡</div>
            </div>
            <div className="contact-links">
              <a className="contact-item" href="mailto:kathysison34@gmail.com">
                <span className="contact-icon email-icon">✉</span><span className="contact-label"><small>EMAIL ME AT</small><strong>kathysison34@gmail.com</strong></span><span className="contact-arrow">↗</span>
              </a>
              <a className="contact-item" href="tel:0602285736">
                <span className="contact-icon phone-icon">☎</span><span className="contact-label"><small>GIVE ME A CALL</small><strong>0602285736</strong></span><span className="contact-arrow">↗</span>
              </a>
              <a className="contact-item" href="https://www.instagram.com/kixxc.oo/" target="_blank" rel="noreferrer">
                <span className="contact-icon insta-icon">◎</span><span className="contact-label"><small>FIND ME ON INSTAGRAM</small><strong>@kixxc.oo</strong></span><span className="contact-arrow">↗</span>
              </a>
              <div className="contact-note">No pressure, just good vibes and cute cats. <span>♡</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">🐱 Kathy<span>.</span></a>
        <p>Made with love, curiosity, and a little bit of code.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <div className="footer-bottom">© {new Date().getFullYear()} Kathy’s Programmer Profile <span>♡ A Little Cat, A Lot of Code!</span></div>
      </footer>
    </main>
  );
}
