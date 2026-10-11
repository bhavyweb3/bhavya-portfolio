
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) throw new Error('App container #app was not found.')

const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Blockchain & Web3',
    skills: [
      'Blockchain',
      'Solidity',
      'Smart Contracts',
      'Ethereum',
      'Remix IDE',
      'MetaMask',
      'Sepolia Testnet',
    ],
  },
  {
    number: '03',
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    number: '04',
    title: 'Databases',
    skills: ['SQL', 'MySQL'],
  },
  {
    number: '05',
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Node.js', 'npm', 'Ganache', 'Truffle'],
  },
  {
    number: '06',
    title: 'Computer Science',
    skills: ['Data Structures', 'Algorithms', 'OOP'],
  },
  {
    number: '07',
    title: 'Soft Skills',
    skills: [
      'Problem-Solving',
      'Communication',
      'Teamwork',
      'Critical Thinking',
      'Adaptability',
      'Time Management',
      'Leadership',
      'Continuous Learning',
    ],
  },
]

const skillsMarkup = skillGroups
  .map(
    (group) => `
      <article class="skill-category ${
        group.title === 'Soft Skills' ? 'soft-skills-category' : ''
      }">
        <span class="skill-category-number">${group.number}</span>
        <h4>${group.title}</h4>
        <div class="skill-tags">
          ${group.skills.map((skill) => `<span>${skill}</span>`).join('')}
        </div>
      </article>
    `,
  )
  .join('')

app.innerHTML = `
  <div class="portfolio">
    <header class="navbar">
      <a href="#home" class="logo">BG<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certificates">Certificates</a>
        <a href="#connect">Contact</a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-content">
          <p class="eyebrow"><span class="line"></span> HELLO, I'M</p>
          <h1>Bhavya<br /><span>Goel.</span></h1>
          <h2>CSE Student <span class="separator">|</span> Blockchain Enthusiast</h2>
          <p class="intro">
            Passionate about building secure, innovative digital solutions
            using blockchain technology and software development.
            Always learning, building, and exploring new possibilities.
          </p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">Explore My Work ↗</a>
            <a href="#connect" class="btn btn-secondary">Let's Connect</a>
          </div>
          <div class="availability">
            <span class="status-dot"></span>
            Open to learning and collaboration
          </div>
        </div>

        <div class="hero-visual">
          <div class="ambient-glow"></div>

          <div class="orbit orbit-outer">
            <span class="orbit-node node-top">₿</span>
            <span class="orbit-node node-right">◆</span>
            <span class="orbit-node node-bottom">⬡</span>
            <span class="orbit-node node-left">Ξ</span>
          </div>

          <div class="orbit orbit-inner">
            <span class="mini-node mini-top"></span>
            <span class="mini-node mini-bottom"></span>
          </div>

          <svg class="network-lines" viewBox="0 0 420 420" aria-hidden="true">
            <line x1="210" y1="24" x2="350" y2="115" />
            <line x1="350" y1="115" x2="375" y2="275" />
            <line x1="375" y1="275" x2="210" y2="396" />
            <line x1="210" y1="396" x2="45" y2="275" />
            <line x1="45" y1="275" x2="70" y2="115" />
            <line x1="70" y1="115" x2="210" y2="24" />
            <line x1="70" y1="115" x2="350" y2="115" />
            <line x1="45" y1="275" x2="375" y2="275" />
            <circle cx="210" cy="24" r="3" />
            <circle cx="350" cy="115" r="3" />
            <circle cx="375" cy="275" r="3" />
            <circle cx="210" cy="396" r="3" />
            <circle cx="45" cy="275" r="3" />
            <circle cx="70" cy="115" r="3" />
          </svg>

          <div class="image-frame">
            <img src="/images/profile.jpg" alt="Bhavya Goel" />
            <div class="image-overlay"></div>
            <span class="frame-label">BUILDING THE FUTURE</span>
          </div>

          <div class="tech-float float-web3">
            <span class="float-indicator"></span>
            WEB3
          </div>

          <div class="tech-float float-solidity">
            <span class="float-symbol">{ }</span>
            SOLIDITY
          </div>

          <div class="tech-float float-ethereum">
            <span class="eth-symbol">Ξ</span>
            ETHEREUM
          </div>

          <div class="tech-float float-chain">
            <span class="chain-symbol">⬡</span>
            BLOCKCHAIN
          </div>

          
          <span class="decorative-cross cross-one">+</span>
          <span class="decorative-cross cross-two">+</span>
        </div>
      </section>

      <section id="about" class="simple-section about-section">
        <div class="about-heading">
          <p class="eyebrow"><span class="line"></span> GET TO KNOW ME</p>
          <h2>Curious mind.<br /><span>Builder's mindset.</span></h2>
        </div>

        <div class="about-layout">
          <div class="about-copy">
            <p class="about-lead">
              I'm a Computer Science student exploring the intersection
              of <span>software development</span> and
              <span>blockchain technology.</span>
            </p>
            <p>
              I enjoy turning ideas into practical projects, understanding
              how things work behind the scenes, and learning technologies
              that solve real problems.
            </p>
            <p>
              My current focus is strengthening my programming fundamentals,
              exploring decentralized applications, and growing into a
              developer who values security, usability, and clean design.
            </p>
            <a href="#projects" class="text-link">Explore my projects ↗</a>
          </div>

          <div class="about-highlights">
            <article class="highlight-card">
              <span class="highlight-number">01</span>
              <div>
                <h3>Problem Solving</h3>
                <p>Programming fundamentals, DSA, and logical thinking.</p>
              </div>
            </article>
            <article class="highlight-card">
              <span class="highlight-number">02</span>
              <div>
                <h3>Blockchain &amp; Web3</h3>
                <p>Smart contracts, decentralization, and transparent systems.</p>
              </div>
            </article>
            <article class="highlight-card">
              <span class="highlight-number">03</span>
              <div>
                <h3>Continuous Learning</h3>
                <p>Building projects, experimenting, and improving step by step.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" class="simple-section skills-section">
        <p class="eyebrow"><span class="line"></span> MY TOOLKIT</p>
        <h2>Skills &amp; <span>Technologies.</span></h2>
        <p class="skills-intro">
          A growing toolkit of programming languages, development technologies,
          blockchain tools, and professional skills I am building along the way.
        </p>

        <div class="skills-category-grid">
          ${skillsMarkup}
        </div>
      </section>

      <section id="projects" class="simple-section">
        <p class="eyebrow"><span class="line"></span> SELECTED WORK</p>
        <h2>Projects I've <span>Built.</span></h2>
        <p>Practical projects that help me apply my knowledge and develop my technical skills.</p>

        <div class="project-list">
          <article class="project-card">
            <span class="project-number">01</span>
            <div class="project-info">
              <h3>LandChain</h3>
              <p>A blockchain-based land registry project exploring transparent and traceable digital land records.</p>
              <div class="tech-list"><span>Blockchain</span><span>Web Development</span></div>
              <a href="https://github.com/bhavweb3/LandChain" target="_blank" rel="noreferrer" class="text-link">Explore GitHub ↗</a>
            </div>
          </article>

          <article class="project-card">
            <span class="project-number">02</span>
            <div class="project-info">
              <h3>Decentralized Voting System</h3>
              <p>A blockchain-based voting project designed to improve transparency and help prevent vote tampering through smart contracts.</p>
              <div class="tech-list"><span>Solidity</span><span>Remix IDE</span><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
              <a href="https://github.com/bhavweb3/Decentralized-Voting-System" target="_blank" rel="noreferrer" class="text-link">Explore GitHub ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="certificates" class="simple-section">
        <p class="eyebrow"><span class="line"></span> ACHIEVEMENTS</p>
        <h2>Certificates &amp; <span>Learning.</span></h2>
        <p>Certifications representing my learning across programming, web development, blockchain, and emerging technologies.</p>

        <div class="certificate-grid">
          <article class="certificate-card">
            <div class="certificate-icon">01</div>
            <div class="certificate-info">
              <p class="certificate-provider">NASSCOM</p>
              <h3>Blockchain &amp; IoT</h3>
              <a href="/certificates/nasscom-blockchain-iot.pdf" target="_blank" rel="noreferrer">View Certificate ↗</a>
            </div>
          </article>
          <article class="certificate-card">
            <div class="certificate-icon">02</div>
            <div class="certificate-info">
              <p class="certificate-provider">NASSCOM</p>
              <h3>HTML &amp; CSS</h3>
              <a href="/certificates/nasscom-html-css.pdf" target="_blank" rel="noreferrer">View Certificate ↗</a>
            </div>
          </article>
          <article class="certificate-card">
            <div class="certificate-icon">03</div>
            <div class="certificate-info">
              <p class="certificate-provider">IBM</p>
              <h3>Machine Learning &amp; Deep Learning</h3>
              <a href="/certificates/ibm-machine-learning-deep-learning.pdf" target="_blank" rel="noreferrer">View Certificate ↗</a>
            </div>
          </article>
          <article class="certificate-card">
            <div class="certificate-icon">04</div>
            <div class="certificate-info">
              <p class="certificate-provider">IBM</p>
              <h3>Python 101</h3>
              <a href="/certificates/ibm-python-101.pdf" target="_blank" rel="noreferrer">View Certificate ↗</a>
            </div>
          </article>
          <article class="certificate-card">
            <div class="certificate-icon">05</div>
            <div class="certificate-info">
              <p class="certificate-provider">InternPe</p>
              <h3>Web Development</h3>
              <a href="/certificates/internpe-web-development.jpeg" target="_blank" rel="noreferrer">View Certificate ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="connect" class="simple-section contact-section">
        <p class="eyebrow"><span class="line"></span> GET IN TOUCH</p>
        <h2>Let's build something<br /><span>meaningful.</span></h2>
        <p>Have an idea, an opportunity, or a project to discuss? Let's connect.</p>
        <div class="hero-buttons">
          <a href="mailto:bhavyagoel01102006@gmail.com" class="btn btn-primary">Email Me ↗</a>
          <a href="https://github.com/bhavweb3" target="_blank" rel="noreferrer" class="btn btn-secondary">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/bhavya-goel-60544b364/" target="_blank" rel="noreferrer" class="btn btn-secondary">LinkedIn ↗</a>
        </div>
      </section>
    </main>

    <footer>
      <span>© ${new Date().getFullYear()} Bhavya Goel</span>
      <span><span class="status-dot"></span> Designed with curiosity</span>
    </footer>
  </div>
`

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href')
    if (!hash || hash === '#') return

    const target = document.querySelector<HTMLElement>(hash)
    if (!target) return

    event.preventDefault()
    history.pushState(null, '', hash)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

function scrollToCurrentHash() {
  const hash = window.location.hash
  if (!hash) return

  document.querySelector<HTMLElement>(hash)?.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  })
}

window.addEventListener('load', scrollToCurrentHash)
window.addEventListener('popstate', scrollToCurrentHash)
