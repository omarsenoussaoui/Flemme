import React from "react";
import { useNavigate } from "react-router-dom";
import { LucideShoppingBag, LucideStar, LucideTruck, LucideCheckCircle, LucideArrowUpRight, LucideChevronRight } from "lucide-react";
import "./HomePage.css";
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const ServiceFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-center gap-2 mb-3">
      <LucideCheckCircle className="text-primary-600 w-5 h-5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );

  return (
    <div className="home-container">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="logo text-2xl font-bold text-primary-600">Flemme</div>
        <div className="header-actions flex items-center gap-3">
          <button className="btn-text" onClick={handleLoginClick}>Connexion</button>
          <button className="btn-primary" onClick={handleRegisterClick}>S'inscrire</button>
        </div>
      </header> */}

      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-primary-600">Vendez</span> sans effort, <span className="text-primary-600">gagnez</span> sans stress
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Transformez votre garde-robe en revenus passifs. Laissez nos collecteurs experts s'occuper de tout pour vous.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary-lg" onClick={handleRegisterClick}>
                Commencer
              </button>
              <button className="btn-outline-lg" onClick={() => navigate("/services")}>
                Découvrir nos services
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/api/placeholder/600/480" 
              alt="Illustration du service Flemme" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="section-header">
            <h2>Nos Services</h2>
            <p className="section-subtitle">Choisissez le niveau de service qui correspond à vos besoins</p>
          </div>
          
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon standard">
                <LucideShoppingBag size={28} />
              </div>
              <h3>Standard</h3>
              <p>Photos de qualité et listings par un collecteur local qui se déplace chez vous.</p>
              <ul className="service-features">
                <ServiceFeature>Photos professionnelles</ServiceFeature>
                <ServiceFeature>Annonces optimisées</ServiceFeature>
                <ServiceFeature>Service à domicile inclus</ServiceFeature>
              </ul>
              <div className="service-price">
                <span className="price">10%</span>
                <span className="period">de commission</span>
              </div>
              <button className="service-btn">Choisir Standard</button>
            </div>

            <div className="service-card featured">
              <div className="featured-badge">Populaire</div>
              <div className="service-icon premium">
                <LucideTruck size={28} />
              </div>
              <h3>Premium</h3>
              <p>Gestion complète de votre inventaire: photos, annonces, négociations et expédition!</p>
              <ul className="service-features">
                <ServiceFeature>Gestion de l'inventaire</ServiceFeature>
                <ServiceFeature>Photos professionnelles</ServiceFeature>
                <ServiceFeature>Négociations prises en charge</ServiceFeature>
                <ServiceFeature>Service d'expédition</ServiceFeature>
              </ul>
              <div className="service-price">
                <span className="price">15%</span>
                <span className="period">de commission</span>
              </div>
              <button className="service-btn">Choisir Premium</button>
            </div>

            <div className="service-card">
              <div className="service-icon vip">
                <LucideStar size={28} />
              </div>
              <h3>VIP</h3>
              <p>Déposez vos articles et profitez d'un service de vente personnalisé avec suivi détaillé.</p>
              <ul className="service-features">
                <ServiceFeature>Tous les avantages Premium</ServiceFeature>
                <ServiceFeature>Suivi personnalisé des ventes</ServiceFeature>
                <ServiceFeature>Service client prioritaire</ServiceFeature>
                <ServiceFeature>Récupération du stock à domicile</ServiceFeature>
              </ul>
              <div className="service-price">
                <span className="price">20%</span>
                <span className="period">de commission</span>
              </div>
              <button className="service-btn">Choisir VIP</button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="section-header">
            <h2>Comment ça marche</h2>
            <p className="section-subtitle">Trois étapes simples pour commencer à vendre sans effort</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choisissez votre service</h3>
              <p>Sélectionnez parmi nos forfaits Standard, Premium ou VIP selon vos besoins.</p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Rencontrez votre collecteur</h3>
              <p>Nous vous mettons en relation avec des collecteurs vérifiés prêts à prendre en charge vos articles.</p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Gagnez en vous relaxant</h3>
              <p>Nous nous occupons de la vente. Vous profitez des bénéfices — sans stress!</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="section-header">
            <h2>Ce que disent nos clients</h2>
            <p className="section-subtitle">Découvrez les expériences de nos utilisateurs satisfaits</p>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "J'ai gagné 800€ en un mois grâce à Flemme! Je n'ai presque rien eu à faire, juste ouvrir ma porte au collecteur."
              </p>
              <div className="testimonial-author">
                <img src="/api/placeholder/48/48" alt="Sarah P." className="testimonial-avatar" />
                <div>
                  <p className="author-name">Sarah P.</p>
                  <p className="author-role">Cliente depuis 3 mois</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Être collecteur sur Flemme est devenu mon activité secondaire. La plateforme est géniale et facile à utiliser."
              </p>
              <div className="testimonial-author">
                <img src="/api/placeholder/48/48" alt="Kevin D." className="testimonial-avatar" />
                <div>
                  <p className="author-name">Kevin D.</p>
                  <p className="author-role">Collecteur depuis 6 mois</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Le service VIP a été une révélation. J'ai vidé mon dressing et gagné plus de 1200€ sans aucune contrainte!"
              </p>
              <div className="testimonial-author">
                <img src="/api/placeholder/48/48" alt="Marie L." className="testimonial-avatar" />
                <div>
                  <p className="author-name">Marie L.</p>
                  <p className="author-role">Cliente VIP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="section-header">
            <h2>Pourquoi choisir Flemme</h2>
            <p className="section-subtitle">Des avantages uniques pour tous nos utilisateurs</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Vente Express</h3>
              <p>Nos collecteurs experts optimisent vos annonces pour vendre plus rapidement</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Revenus Passifs</h3>
              <p>Transformez vos articles inutilisés en source de revenus sans effort</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Sécurité Garantie</h3>
              <p>Tous nos collecteurs sont vérifiés et évalués par la communauté</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Gain de Temps</h3>
              <p>Économisez jusqu'à 10 heures par semaine sur la gestion de vos ventes</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Suivi Transparent</h3>
              <p>Dashboard détaillé pour suivre toutes vos ventes en temps réel</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Impact Écologique</h3>
              <p>Donnez une seconde vie à vos vêtements et réduisez votre empreinte</p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="cta-section">
          <h2>Prêt à vendre sans effort ?</h2>
          <p>Rejoignez des milliers de personnes qui génèrent des revenus passifs — laissez Flemme travailler pour vous.</p>
          <div className="cta-buttons">
            <button className="btn-cta" onClick={handleRegisterClick}>
              Créer votre compte
            </button>
            <button className="btn-cta-secondary" onClick={() => navigate('/collecteurs')}>
              Devenir collecteur
              <LucideArrowUpRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Flemme</div>
            <p className="footer-tagline">La solution pour vendre sans effort</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <span>FB</span>
              </a>
              <a href="#" className="social-icon">
                <span>IG</span>
              </a>
              <a href="#" className="social-icon">
                <span>TW</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Standard</a></li>
                <li><a href="#">Premium</a></li>
                <li><a href="#">VIP</a></li>
                <li><a href="#">Tarification</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Carrières</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Ressources</h4>
              <ul>
                <li><a href="#">Centre d'aide</a></li>
                <li><a href="#">Devenir collecteur</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Tutoriels</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Légal</h4>
              <ul>
                <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Mentions légales</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Flemme. Tous droits réservés.</p>
          <div className="app-badges">
            <a href="#" className="app-badge">
              <img src="/api/placeholder/120/40" alt="App Store" />
            </a>
            <a href="#" className="app-badge">
              <img src="/api/placeholder/120/40" alt="Google Play" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;