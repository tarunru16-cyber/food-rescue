import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">🌱</div>
          <div>
            <h2>Food Rescue</h2>
            <span>Share food. Share hope.</span>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#impact">Our impact</a>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Get started</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="badge">🤝 Together against food waste</div>

            <h1>
              Turn surplus food
              <span> into shared hope.</span>
            </h1>

            <p>
              Food Rescue connects restaurants, homes and events with NGOs
              and volunteers who can collect surplus food and get it to
              people who need it.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                🍱 Donate food
              </button>

              <button className="secondary-btn">
                🔎 Find food
              </button>
            </div>

            <div className="trust">
              <div className="trust-item">
                <strong>100%</strong>
                <span>Community driven</span>
              </div>

              <div className="trust-item">
                <strong>24/7</strong>
                <span>Food connections</span>
              </div>

              <div className="trust-item">
                <strong>0</strong>
                <span>Food should go to waste</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="food-illustration">
              🍛
            </div>

            <div className="floating-card card-one">
              <span className="small-icon">🍲</span>
              <div>
                <strong>Fresh meals available</strong>
                <small>10 servings nearby</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span className="small-icon">❤️</span>
              <div>
                <strong>Food rescued</strong>
                <small>Helping the community</small>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how-it-works">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>From extra food to meaningful impact.</h2>
            <p>
              A simple connection between people with surplus food and
              communities that need it.
            </p>
          </div>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">🍱</div>
              <h3>Donate food</h3>
              <p>
                Donors post details about their safe surplus food,
                quantity and pickup location.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">🔎</div>
              <h3>Find food</h3>
              <p>
                NGOs and volunteers discover available donations in
                their area.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">🚲</div>
              <h3>Collect & deliver</h3>
              <p>
                A volunteer or NGO accepts the donation and coordinates
                pickup and delivery.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">❤️</div>
              <h3>Make an impact</h3>
              <p>
                Every completed donation helps reduce waste and serve
                people in need.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="impact-section" id="impact">
          <div className="impact-text">
            <span>OUR MISSION</span>
            <h2>Good food deserves a second chance.</h2>

            <p>
              Every day, perfectly edible food can go unused while
              people around us struggle to access nutritious meals.
              Food Rescue creates a bridge between these two realities.
            </p>

            <button className="primary-btn">Join the movement →</button>
          </div>

          <div className="impact-stats">
            <div className="stat">
              <strong>0</strong>
              <span>Meals rescued</span>
            </div>

            <div className="stat">
              <strong>0</strong>
              <span>People served</span>
            </div>

            <div className="stat">
              <strong>0</strong>
              <span>Active donors</span>
            </div>

            <div className="stat">
              <strong>0</strong>
              <span>Partner NGOs</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div>
            <span>READY TO MAKE A DIFFERENCE?</span>
            <h2>Don't let good food go to waste.</h2>
            <p>
              Join Food Rescue and help turn surplus into something
              meaningful.
            </p>
          </div>

          <button className="white-btn">Get started →</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">🌱</div>
            <div>
              <h2>Food Rescue</h2>
              <span>Share food. Share hope.</span>
            </div>
          </div>

          <p>
            Connecting surplus food with communities that need it.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <a href="#home">Home</a>
            <a href="#how-it-works">How it works</a>
            <a href="#impact">Impact</a>
          </div>

          <div>
            <h4>Get involved</h4>
            <a href="#home">Donate food</a>
            <a href="#home">Find food</a>
            <a href="#home">Volunteer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;