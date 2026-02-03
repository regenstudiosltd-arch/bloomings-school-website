import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { Levels } from './components/Levels';
import { Curriculum } from './components/Curriculum';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Admissions } from './components/Admissions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <WhoWeAre />
      </div>
      <div id="levels">
        <Levels />
      </div>
      <div id="curriculum">
        <Curriculum />
      </div>
      <Testimonials />
      <Gallery />
      <Events />
      <Blog />
      <FAQ />
      <Admissions />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}