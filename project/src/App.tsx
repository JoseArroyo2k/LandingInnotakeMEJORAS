import React from 'react';
import { motion } from 'framer-motion';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/Layout/WhatsAppButton';

// Section Components
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import WhyUs from './components/Sections/WhyUs';
import Process from './components/Sections/Process';
// import Portfolio from './components/Sections/Portfolio'; // Comentado para integrar después
import FAQ from './components/Sections/FAQ';
import Contact from './components/Sections/Contact';

// Other Components
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        {/* <Portfolio /> */} {/* Comentado para integrar después */}
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <Newsletter />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors opacity-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="scroll-to-top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;