function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <a href="#" className="logo">
          ZAIRO
          <span>DIGITAL</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <a href="#contact" className="nav-button">
          Start a project
        </a>
      </nav>

      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/zairo-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">DIGITAL STUDIO · SOUTH AFRICA</p>

          <h1>
            Digital experiences
            <br />
            built to <em>stand out.</em>
          </h1>

          <p className="hero-description">
            We create bold, modern websites that help ambitious businesses
            look professional, build trust, and turn attention into action.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Start a project <span>↗</span>
            </a>

            <a href="#work" className="secondary-button">
              View our work
            </a>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <span>Z</span>
        </div>

        <div className="hero-footer">
          <span>01 — INTRO</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-intro">
          <p className="section-label">02 — SELECTED WORK</p>

          <h2>
            Built for brands
            <br />
            <em>worth noticing.</em>
          </h2>

          <p className="section-description">
            A selection of digital experiences designed to give businesses a
            stronger presence online.
          </p>
        </div>

        <a
          href="https://laura-hair-salon.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="project-card"
        >
          <div className="project-image">
            <img
              src="/laura-screenshot.jpg"
              alt="Laura Hair Salon website"
            />

            <div className="project-overlay">
              <span>VIEW PROJECT ↗</span>
            </div>
          </div>

          <div className="project-info">
            <div>
              <p>01 / CAPE TOWN, SOUTH AFRICA</p>
              <h3>Laura Hair Salon</h3>
            </div>

            <span className="project-category">
              WEBSITE DESIGN · DEVELOPMENT
            </span>
          </div>
        </a>
      </section>

      <section className="services-section" id="services">
        <div className="services-heading">
          <p className="section-label">03 — SERVICES</p>

          <h2>
            Everything your
            <br />
            brand needs to <em>grow.</em>
          </h2>
        </div>

        <div className="services-list">
          <article className="service-item">
            <span className="service-number">01</span>

            <div className="service-content">
              <h3>Website Design</h3>
              <p>
                Strategic, modern websites designed around your brand,
                customers, and business goals.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>

          <article className="service-item">
            <span className="service-number">02</span>

            <div className="service-content">
              <h3>Web Development</h3>
              <p>
                Fast, responsive, custom-built websites that look sharp and
                work beautifully across every screen.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>

          <article className="service-item">
            <span className="service-number">03</span>

            <div className="service-content">
              <h3>SEO & Visibility</h3>
              <p>
                Search-friendly foundations that help your business get found
                by the people already looking for what you offer.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>

          <article className="service-item">
            <span className="service-number">04</span>

            <div className="service-content">
              <h3>Brand & Digital Strategy</h3>
              <p>
                A clearer digital presence built to make your business look
                credible, consistent, and ready for growth.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-top">
          <p className="section-label">04 — ABOUT ZAIRO</p>

          <p className="about-intro">
            We believe your website should do more than exist. It should make
            people stop, pay attention, and remember your brand.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-statement">
            <h2>
              We build digital
              <br />
              experiences with
              <br />
              <em>purpose.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Zairo Digital creates modern websites and digital experiences for
              businesses that want to be seen, trusted, and remembered. We
              combine sharp design, thoughtful development, and strategy to
              turn ideas into digital experiences that move businesses
              forward.
            </p>

            <p>
              From the first idea to the final interaction, we combine
              thoughtful design, clean development, and strategy to create
              digital experiences that feel as good as they look.
            </p>

            <div className="about-details">
              <div>
                <span>BASED IN</span>
                <strong>SOUTH AFRICA</strong>
              </div>

              <div>
                <span>SPECIALTY</span>
                <strong>WEBSITES · DIGITAL EXPERIENCES</strong>
              </div>

              <div>
                <span>APPROACH</span>
                <strong>STRATEGY · DESIGN · DEVELOPMENT</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-heading">
          <p className="section-label">05 — OUR PROCESS</p>

          <h2>
            From idea to
            <br />
            <em>impact.</em>
          </h2>

          <p className="process-intro">
            From the first conversation to launch, we keep the process clear,
            collaborative, and focused on creating a website that delivers
            results.
          </p>
        </div>

        <div className="process-list">
          <article className="process-item">
            <span className="process-number">01</span>

            <div className="process-content">
              <h3>Discover</h3>
              <p>
                We get clear on your business, audience, goals, and what your
                website needs to achieve before we build anything.
              </p>
            </div>

            <span className="process-word">DISCOVER</span>
          </article>

          <article className="process-item">
            <span className="process-number">02</span>

            <div className="process-content">
              <h3>Design</h3>
              <p>
                We shape the visual direction and user experience around your
                brand, creating every section with purpose and clarity.
              </p>
            </div>

            <span className="process-word">DESIGN</span>
          </article>

          <article className="process-item">
            <span className="process-number">03</span>

            <div className="process-content">
              <h3>Build</h3>
              <p>
                We bring the design to life with clean, responsive development
                that looks sharp and works seamlessly across every device.
              </p>
            </div>

            <span className="process-word">BUILD</span>
          </article>

          <article className="process-item">
            <span className="process-number">04</span>

            <div className="process-content">
              <h3>Launch</h3>
              <p>
                We test, refine, and make sure everything is ready for your
                website to launch confidently and make an impact.
              </p>
            </div>

            <span className="process-word">LAUNCH</span>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <p className="section-label">06 — START A PROJECT</p>

          <h2>
            Have a project
            <br />
            <em>in mind?</em>
          </h2>

          <p className="contact-intro">
            Tell us what you’re building, what you need, and where you want
            to go. We’ll take it from there.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-message">
            <p>
              Whether you need a brand-new website, a complete digital
              refresh, or a stronger online presence, we'd love to hear what
              you're working on.
            </p>

            <a href="mailto:hello@zairo.co.za" className="contact-email">
              hello@zairo.co.za
              <span>↗</span>
            </a>
          </div>

          <a href="mailto:hello@zairo.co.za" className="contact-button">
            Start your project
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a href="#" className="footer-logo">
            ZAIRO
            <span>DIGITAL</span>
          </a>

          <p className="footer-tagline">
            Digital experiences
            <br />
            built to <em>stand out.</em>
          </p>

          <a href="#contact" className="footer-cta">
            Start a project <span>↗</span>
          </a>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
          </div>

          <div className="footer-column">
            <span>CONTACT</span>
            <a href="mailto:hello@zairo.co.za">hello@zairo.co.za</a>
            <span>South Africa</span>
          </div>

          <div className="footer-column footer-back">
            <a href="#" className="back-top">
              Back to top <span>↑</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ZAIRO DIGITAL</span>
          <span>WEBSITES · DIGITAL EXPERIENCES · STRATEGY</span>
        </div>
      </footer>
    </main>
  )
}

export default App
