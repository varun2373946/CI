import React, { useEffect, useRef, useState } from 'react';
import './MainContent.css';
import Modal from './Modal';

function MainContent() {
  const aboutRef = useRef(null);
  const eventHighlightsRef = useRef(null);
  const remembranceRef = useRef(null);
  const locationRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (eventHighlightsRef.current) observer.observe(eventHighlightsRef.current);
    if (remembranceRef.current) observer.observe(remembranceRef.current);
    if (locationRef.current) observer.observe(locationRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (eventHighlightsRef.current) observer.unobserve(eventHighlightsRef.current);
      if (remembranceRef.current) observer.unobserve(remembranceRef.current);
      if (locationRef.current) observer.unobserve(locationRef.current);
    };
  }, []);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <main className="App-main">
      <section id="about-us" className="Content-section">
        <div className="Content-about" ref={aboutRef}>
          <h2>About Us</h2>
          <p>
            According to Hindu mythology, Ganesha is the son of Lord Shiva,
            the destroyer in the Hindu Trinity, and Goddess Parvati, the divine mother.
            There are various accounts of his birth,
            one of the most popular being that Parvati created Ganesha
            from sandalwood paste and brought him to life to guard her while she bathed.
            When Shiva returned and was denied entry by Ganesha, unaware that he was his son,
            a conflict ensued leading to Ganesha's beheading. 
            This event led to Ganesha eventually being restored to life with an elephant head, 
            becoming the beloved deity worshipped today.
          </p>
          <br></br>
          <p>
            Ganesh Chaturthi celebrates the birth of Lord Ganesha and is observed with great devotion 
            and enthusiasm. The festival usually falls in the month of August-September. 
            The celebrations begin with the installation of Ganesha idols in homes and public pandals (temporary stages).
            Devotees offer prayers, chant hymns, and prepare special sweets like Laddus, which are believed to be Ganesha's favorite. 
            The festival lasts for ten days, culminating in the immersion of the idols in water bodies on the final day, known as Anant Chaturdashi. 
            This act symbolizes Ganesha's return to Mount Kailash, taking away the devotees' misfortunes and renewing their hopes and wisdom for the year ahead.
          </p>
          <br></br>
          <p>
          For Ganesh Chaturthi, we set up a beautifully decorated pandal on the road to welcome Lord Ganesha. Each day of the festival,
          we conduct a sacred pooja, offering prayers and singing hymns to honor the deity with devotion. 
          We provide a variety of delicious foods and prasad as offerings, 
          prepared with great care to please Lord Ganesha and share with the community. 
          The festive atmosphere is enriched with collective participation, 
          as we come together to celebrate and worship. On the final day, Anant Chaturdashi, 
          we partake in a grand procession to immerse the Ganesh idol in water. 
          This ritual signifies Lord Ganesha's return to his heavenly abode, 
          and marks the end of the festival with a heartfelt farewell, 
          bringing blessings and renewed hopes for the year ahead.
          </p>
        </div>
        <div>
        </div>
        <div className="Content-pictures" ref={eventHighlightsRef}>
          <h2 id="images">Event Highlights</h2><br/>
          <div className="Picture-gallery">
          {/* <iframe className="Gallery-img"
            src="https://www.youtube.com/embed/zSSd6-QM4Cg"
            title="Chennaikraja video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe> */}
          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3405.mp4"
              className="Gallery-img"
              controls/>
          </div>

          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3372.mp4"
              className="Gallery-img"
              controls/>
          </div>

          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3601.mp4"
              className="Gallery-img"
              controls/>
          </div>

          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3477.mp4"
              className="Gallery-img"
              controls/>
          </div>

          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3486.mp4"
              className="Gallery-img"
              controls/>
          </div>

          <div className="Gallery-item">
            <video src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3575.mp4"
              className="Gallery-img"
              controls/>
          </div>


            <div className="Gallery-item">
              <img src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3337.jpg" alt="Image 2" className="Gallery-img" onClick={() => openModal('https://chennaikraja-assets.s3.amazonaws.com/IMG_3337.jpg')} />
            </div>
            <div className="Gallery-item">
              <img src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3340.jpg" alt="Image 3" className="Gallery-img" onClick={() => openModal('https://chennaikraja-assets.s3.amazonaws.com/IMG_3340.jpg')} />
            </div>
            <div className="Gallery-item">
              <img src="https://chennaikraja-assets.s3.amazonaws.com/IMG_3595.jpg" alt="Image 3" className="Gallery-img" onClick={() => openModal('https://chennaikraja-assets.s3.amazonaws.com/IMG_3595.jpg')} />
            </div>
          </div>
        </div>

        <div className="Content-pictures" ref={remembranceRef}>
          <h2 id="images">Remembrance</h2><br/>
          <div className="Picture-gallery">
            <div className="Gallery-item">
              <img src="/images/2013.jpg" alt="2013" className="Gallery-img" onClick={() => openModal('/images/2013.jpg')} />
              <p className="Image-caption">2013</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2014.jpg" alt="2014" className="Gallery-img" onClick={() => openModal('/images/2014.jpg')} />
              <p className="Image-caption">2014</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2015.jpg" alt="2015" className="Gallery-img" onClick={() => openModal('/images/2015.jpg')} />
              <p className="Image-caption">2015</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2016.jpg" alt="2016" className="Gallery-img" onClick={() => openModal('/images/2016.jpg')} />
              <p className="Image-caption">2016</p>
            </div>
          </div><br/>
          <div className="Picture-gallery">
            <div className="Gallery-item">
              <img src="/images/2017.jpg" alt="2017" className="Gallery-img" onClick={() => openModal('/images/2017.jpg')} />
              <p className="Image-caption">2017</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2018.jpg" alt="2018" className="Gallery-img" onClick={() => openModal('/images/2018.jpg')} />
              <p className="Image-caption">2018</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2019.jpg" alt="2019" className="Gallery-img" onClick={() => openModal('/images/2019.jpg')} />
              <p className="Image-caption">2019</p>
            </div>
            <div className="Gallery-item">
              <img src="/images/2022.jpg" alt="2022" className="Gallery-img" onClick={() => openModal('/images/2022.jpg')} />
              <p className="Image-caption">2022</p>
            </div>
          </div><br/>
          <div className="Picture-gallery">
            <div className="Gallery-item">
              <img src="/images/2023.jpg" alt="2023" className="Gallery-img" onClick={() => openModal('/images/2023.jpg')} />
              <p className="Image-caption">2023</p>
            </div>
          </div>
        </div>
        
        <div id="contact" className="Content-location" ref={locationRef}>
          <h2>Event Location</h2><br/>
          <iframe
            title="Event Location"
            width="100%"
            height="315"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6235885394952!2d80.26675886945786!3d13.067825505578353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661af619d339%3A0xdd121ee0e57e8d01!2z4K644K-N4K6w4K-AIOCuruCvgeCupOCvjeCupOCvgeCuruCuvuCusOCuv-Cur-CuruCvjeCuruCuqeCvjSDgrobgrrLgrq_grq7gr40!5e0!3m2!1sen!2sus!4v1721473453950!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src={modalImage} alt="Modal Image" style={{ maxWidth: '50%', maxHeight: '50%'}} />
      </Modal>
    </main>
  );
}

export default MainContent;
