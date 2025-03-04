import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleScroll = () => {
    const imageContainer = document.querySelector('.Image-container');
    if (imageContainer) {
      const rect = imageContainer.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsImageVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on component mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="Image-section">
        <div className={`Image-container ${isImageVisible ? '' : 'hidden'}`}>
          <img src="/images/poster.jpg" alt="Ganesh" className="Responsive-image" />
        </div>
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
