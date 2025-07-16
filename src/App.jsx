import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Photos from './Photos';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Outside
import img0 from './assets/Outside/buildingView.png';

// 1 Bedroom
import img1 from './assets/Units/1_bedroom/DSC02695.jpg';
import img2 from './assets/Units/1_bedroom/DSC02717.jpg';
import img3 from './assets/Units/1_bedroom/DSC02769.jpg';
import img4 from './assets/Units/1_bedroom/DSC02777.jpg';
import img5 from './assets/Units/1_bedroom/DSC02801.jpg';
import img6 from './assets/Units/1_bedroom/DSC02838.jpg';
import img7 from './assets/Units/1_bedroom/DSC02847.jpg';
import img8 from './assets/Units/1_bedroom/DSC02862.jpg';
import img9 from './assets/Units/1_bedroom/DSC02870.jpg';
import img10 from './assets/Units/1_bedroom/DSC02887.jpg';
import img11 from './assets/Units/1_bedroom/DSC02895.jpg';
import img12 from './assets/Units/1_bedroom/DSC02914.jpg';

// 2_bedroom
import img13 from './assets/Units/2_bedroom/DSC05221.jpg';
import img14 from './assets/Units/2_bedroom/DSC05244.jpg';
import img15 from './assets/Units/2_bedroom/DSC05292.jpg';
import img16 from './assets/Units/2_bedroom/DSC05318.jpg';
import img17 from './assets/Units/2_bedroom/DSC05322.jpg';
import img18 from './assets/Units/2_bedroom/DSC05341.jpg';
import img19 from './assets/Units/2_bedroom/DSC05345.jpg';
import img20 from './assets/Units/2_bedroom/DSC05356.jpg';
import img21 from './assets/Units/2_bedroom/DSC05366.jpg';
import img22 from './assets/Units/2_bedroom/DSC05380.jpg';
import img23 from './assets/Units/2_bedroom/DSC05410.jpg';
import img24 from './assets/Units/2_bedroom/DSC05419.jpg';
import img25 from './assets/Units/2_bedroom/DSC05430.jpg';
import img26 from './assets/Units/2_bedroom/DSC05451.jpg';

// Studio
import img27 from './assets/Units/Studio/DSC02500.jpg';
import img28 from './assets/Units/Studio/DSC02519.jpg';
import img29 from './assets/Units/Studio/DSC02544.jpg';
import img30 from './assets/Units/Studio/DSC02551.jpg';
import img31 from './assets/Units/Studio/DSC02574.jpg';
import img32 from './assets/Units/Studio/DSC02581.jpg';
import img33 from './assets/Units/Studio/DSC02614.jpg';
import img34 from './assets/Units/Studio/DSC02626.jpg';
import img35 from './assets/Units/Studio/DSC02643.jpg';
import img36 from './assets/Units/Studio/DSC02652.jpg';
import img37 from './assets/Units/Studio/DSC02659.jpg';
import img38 from './assets/Units/Studio/DSC02683.jpg';

// Gym
import gymImage from './assets/Gym/gym.jpg';

// Conference Room
import conferenceRoomImage from './assets/Amenities/ConferenceRoom.png';

import wifiIcon from './assets/Icons/wifi.svg';
import kitchenIcon from './assets/Icons/kitchen.svg';
import lockIcon from './assets/Icons/security-camera.svg';
import parkedCarIcon from './assets/Icons/parked-car.svg';
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';



const images = [
  { src: img0, caption: "Building View", type: 'outside' },
  { src: img1, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img2, caption: "Airy Single-Bedroom Living Space", type: '1 bedroom' },
  { src: img3, caption: "Sunlit Lounge Area With Expansive Window Views", type: '1 bedroom' },
  { src: img4, caption: "Compact And Practical Desk Setup In The Living Room", type: '1 bedroom' },
  { src: img5, caption: "Full Living Room Setup With Modern Furnishings", type: '1 bedroom' },
  { src: img6, caption: "Spacious Walkway To The Bedroom", type: '1 bedroom' },
  { src: img7, caption: "Modern Kitchen With Sleek Finishes", type: '1 bedroom' },
  { src: img8, caption: "Functional Living Space With Desk, TV, And Bedroom Access.", type: '1 bedroom' },
  { src: img9, caption: "Comfortable And Spacious One-Bedroom Layout", type: '1 bedroom' },
  { src: img10, caption: "Relaxing Bed Setup", type: '1 bedroom' },
  { src: img11, caption: "Bright And Airy Bedroom", type: '1 bedroom' },
  { src: img12, caption: "Clean And Modern Bathroom", type: '1 bedroom' },
  { src: img13, caption: "Bright And Welcoming Two-Bedroom Living Area", type: '2 bedroom' },
  { src: img14, caption: "Spacious Living Room In 2 Bedroom", type: '2 bedroom' },
  { src: img15, caption: "Spacious Living Room", type: '2 bedroom' },
  { src: img16, caption: "Roomy Living Area", type: '2 bedroom' },
  { src: img17, caption: "Cozy Dining Area", type: '2 bedroom' },
  { src: img18, caption: "Bright And Airy Living Space", type: '2 bedroom' },
  { src: img19, caption: "Modern Dining Area And Kitchen Combo", type: '2 bedroom' },
  { src: img20, caption: "Modern Dining Area And Kitchen Combo", type: '2 bedroom' },
  { src: img21, caption: "Fully Equipped Kitchen With A Modern Aesthetic", type: '2 bedroom' },
  { src: img22, caption: "Stylish Modern Kitchen", type: '2 bedroom' },
  { src: img23, caption: "Cozy Bedroom With Natural Light In 2 Bedroom", type: '2 bedroom' },
  { src: img24, caption: "Cozy Bedroom With Natural Light In 2 Bedroom", type: '2 bedroom' },
  { src: img25, caption: "Warm And Airy Bedroom With Plenty Of Natural Light", type: '2 bedroom' },
  { src: img26, caption: "Bright And Modern Bathroom Space", type: '2 bedroom' },
  { src: img27, caption: "Modern Studio Apartment", type: 'studio' },
  { src: img28, caption: "Cozy Studio Living Area", type: 'studio' },
  { src: img29, caption: "Functional Space With A Desk And Dining Table In Studio", type: 'studio' },
  { src: img30, caption: "Bright Bedroom In Studio", type: 'studio' },
  { src: img31, caption: "Relaxing Bed Setup", type: 'studio' },
  { src: img32, caption: "Modern Kitchen With A Cozy Dining Table In The Studio", type: 'studio' },
  { src: img33, caption: "Studio Apartment", type: 'studio' },
  { src: img34, caption: "Studio Apartment", type: 'studio' },
  { src: img35, caption: "Stylish Work Corner", type: 'studio' },
  { src: img36, caption: "Stylish Kitchen With Upgrades In Studio", type: 'studio' },
  { src: img37, caption: "Stylish Kitchen With Upgrades In Studio", type: 'studio' },
  { src: img38, caption: "Sleek And Modern Bathroom In The Studio Apartment", type: 'studio' }
];






// Sample units data
const unitsData = [
  { unit: '101', type: '1 Bedroom', size: '750 sq ft', floor: 1, price: '$1,200 / month', image: img1 },
  { unit: '203', type: '2 Bedroom', size: '1,100 sq ft', floor: 2, price: '$1,650 / month', image: img13 },
  { unit: '305', type: 'Studio', size: '500 sq ft', floor: 3, price: '$950 / month', image: img27 },
];



function Home() {
  const navigate = useNavigate();

  

  // Slideshow state
  const [currentIndex, setCurrentIndex] = useState(0);
  // Filter state
  const [filterType, setFilterType] = useState('All');
  // Modal state
  const [showModal, setShowModal] = useState(false);
  // For fade animation
  const [fade, setFade] = useState(true);

  // Refs for smooth scrolling
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const unitsRef1 = useRef(null);
  const locationRef = useRef(null);
  const testimonialsRef1 = useRef(null);
  const additionalInfoRef = useRef(null);

  // Auto slideshow with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Navigation for slideshow with fade
  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const goToIndex = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // Filter units by type
  const filteredUnits = unitsData.filter(unit =>
    filterType === 'All' || unit.type === filterType
  );

  // Smooth scroll to sections
  const scrollToRef = (ref, offset = 0) => {
    if (ref && ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Open apply modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle Contact button click
  const handleContactClick = () => {
    window.location.href = 'mailto:kle@gestionzagora.com';
  };

  return (
  <>
    {/* Header outside app-container */}
    <header className="header">
      <div className="header-left">
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
        <button className="nav-header-link" onClick={() => navigate('/photos')}>Gallery</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Available Units</button>
      </div>

      <div className="header-center">
        <h2
          className="header-address"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          2170 LINCOLN
        </h2>
      </div>

      <div className="header-right">
        <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
        <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
      </div>
    </header>



    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">
        {/* Slideshow */}
        <section className="slideshow-section" aria-label="Building images slideshow">
          <div className="slideshow-container triple-display" role="region" aria-live="polite" style={{ position: 'relative' }}>
            {/* Left arrow button */}
            <button
              className="nav-button left"
              onClick={goToPrevious}
              aria-label="Previous image"
              style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ‹
            </button>

            {/* Previous image preview */}
            <img
              src={images[(currentIndex - 1 + images.length) % images.length].src}
              alt={`Previous: ${images[(currentIndex - 1 + images.length) % images.length].caption}`}
              className="side-image"
              onClick={goToPrevious}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToPrevious(); }}
              aria-label="Go to previous image"
            />

            {/* Main image */}
            <img
              key={images[currentIndex].src}
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className={`main-image ${fade ? 'fade-in' : 'fade-out'}`}
            />

            {/* Next image preview */}
            <img
              src={images[(currentIndex + 1) % images.length].src}
              alt={`Next: ${images[(currentIndex + 1) % images.length].caption}`}
              className="side-image"
              onClick={goToNext}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToNext(); }}
              aria-label="Go to next image"
            />

            {/* Right arrow button */}
            <button
              className="nav-button right"
              onClick={goToNext}
              aria-label="Next image"
              style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ›
            </button>
          </div>
          <p className="caption">{images[currentIndex].caption}</p>
        </section>

        {/* Book A Tour Section */}
        <section
          className="highlight-hero lightgray-bg reverse"
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={images[2].src} alt="Beautiful unit at 2170 Lincoln" />
            </div>
            <div className="hero-text">
              <h1>Your Dream Apartment<br />Awaits at 2170 Lincoln</h1>
              <p>Modern design, unbeatable location, and unmatched comfort.</p>
              <button className="hero-tour-button" onClick={openModal}>
                Book a Tour
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef1}
          className="about-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="about-wrapper">
            <div className="about-image">
              <img
                src={images[1].src}
                alt="2170 Lincoln Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>About 2170 Lincoln</h2>
              <p>
                Welcome to <strong>2170 Lincoln</strong>, a beautifully renovated
                residential building nestled in the heart of a vibrant neighborhood.
                Designed for modern comfort, it blends convenience with style,
                offering a high-quality living experience for a diverse community.
              </p>
              <p>
                Our vision is to foster a welcoming environment with exceptional
                amenities, where residents can thrive and enjoy an elevated lifestyle.
              </p>
              <ul className="about-features">
                <li>Modern and stylish design</li>
                <li>Prime location close to amenities</li>
                <li>Spacious, thoughtfully crafted living spaces</li>
                <li>Community-focused atmosphere</li>
              </ul>
            </div>
          </div>
        </section>


        {/*
        <section
          ref={aboutRef2}
          className="about-section white-bg"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >

          <div className="about-content-wrapper reverse">
            <div className="about-image">
              <img
                src={images[1].src}
                alt="Interior view of 2170 Lincoln"
              />
            </div>

            <div className="about-text">
              <h2 className="about-title">More About 2170 Lincoln</h2>
              <h3>Neighborhood Highlights</h3>
              <p>
                Situated in a thriving community, 2170 Lincoln is just steps away from public transit, shopping centers, parks, schools, and a variety of dining options. The neighborhood offers a safe, convenient, and vibrant environment ideal for families, young professionals, and anyone seeking a comfortable urban lifestyle.
              </p>

              <h3>Who Is It For?</h3>
              <p>
                Whether you are a young professional, a small family, or someone looking for a peaceful and well-equipped home, 2170 Lincoln offers a range of unit types and floor plans tailored to suit your needs.
              </p>

              <h3>Sustainability & Innovation</h3>
              <p>
                We prioritize sustainability with eco-friendly building practices and modern smart home technology integrated throughout the property, ensuring energy efficiency and convenience for all residents.
              </p>

              <h3>Experience 2170 Lincoln</h3>
              <p>
                Discover city living elevated with exceptional amenities, a friendly community, and a prime location. Welcome home to 2170 Lincoln.
              </p>
            </div>
          </div>
        </section>
        */}

        {/* Insert Features Cards Section right here */}
        <section className="features-cards-section white-bg" data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-easing="ease-in-out">
          <h2>Live Better at 2170 Lincoln</h2>
          <div className="features-cards-container">
            {/* Card 1: Free Wifi */}
            <div className="feature-card">
              <img src={wifiIcon} alt="WiFi icon" className="feature-icon" />
              <h3>Free High-Speed WiFi</h3>
              <p>Enjoy complimentary high-speed wireless internet throughout the building to stay connected.</p>
            </div>

            {/* Card 2: Kitchen Features */}
            <div className="feature-card">
              <img src={kitchenIcon} alt="Kitchen icon" className="feature-icon" />
              <h3>Fully Equipped Kitchen</h3>
              <p>A fully equipped kitchen featuring full-size appliances, cookware, utensils, and modern finishes.</p>
            </div>

            {/* Card 3: Secure Building */}
            <div className="feature-card">
              <img src={lockIcon} alt="Lock icon" className="feature-icon" />
              <h3>24/7 Secure Access</h3>
              <p>Feel safe with round-the-clock surveillance and secure entry systems for residents.</p>
            </div>

            {/* Card 4: Convenient Parking */}
            <div className="feature-card">
              <img src={parkedCarIcon} alt="Parking icon" className="feature-icon" />
              <h3>On-Site Parking</h3>
              <p>Reserved parking spots available for residents with easy access to the building.</p>
            </div>

            {/* Card 4: Gym */}
            <div className="feature-card feature-card-medium">
              <img src={gymIcon} alt="Gym icon" className="feature-icon" />
              <h3>On-Site Gym</h3>
              <p>Stay fit and active with our fully equipped on-site gym, available 24/7 for residents.</p>
            </div>

            {/* Card 5: In-Unit Washer/Dryer */}
            <div className="feature-card feature-card-medium">
              <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
              <h3>Laundry Room</h3>
              <p>Convenient on-site laundry with modern washers and dryers.</p>
            </div>
          </div>
        </section>

        {/* Amenities Gym Highlight Section */}
        <section
          className="amenities-hero lightgray-bg"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={gymImage} alt="Gym at 2170 Lincoln" />
            </div>
            <div className="amenities-hero-text">
              <h1>Modern Gym with Stunning <br />Downtown Montreal View</h1>
              <p>Our modern gym offers not only top-of-the-line equipment, but also an incredible panoramic view of downtown Montréal — making every workout a little more inspiring.</p>
            </div>
          </div>
        </section>

        {/* Amenities Conference Room Highlight Section */}
        <section
          className="amenities-hero lightgray-bg reverse"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={conferenceRoomImage} alt="Conference Room at 2170 Lincoln" />
            </div>
            <div className="amenities-hero-text">
              <h1>Fully Equipped Conference Space</h1>
              <p>Host your meetings and events in our elegant conference room, designed to provide a professional and comfortable space for all your gatherings.</p>
            </div>
          </div>
        </section>


        {/* Available Units Section*/}
        <section
          ref={unitsRef1}
          className="units-section coolgray-bg"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <h2>Available Units & Floor Plans</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom'].map((type) => {
              // Show all units of this type (no filter)
              const unitsOfType = filteredUnits.filter(u => u.type === type);
              if (unitsOfType.length === 0) return null;

              return (
                <div key={type} className="unit-type-card">
                  <h3>{type}</h3>
                  {unitsOfType.map(({ unit, size, price, image }) => (
                    <div key={unit} className="unit-card">
                      <img src={image} alt={`${type} unit ${unit}`} className="unit-image" />
                      <div className="unit-info">
                        <p><strong>Unit:</strong> {unit}</p>
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Size:</strong> {size}</p>
                        <p><strong>Starting Price:</strong> {price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>


        {/* Location Section */}
        <section
          ref={locationRef}
          className="location-section lightgray-bg"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="modern-location-wrapper">
            <div className="modern-location-text">
              <h2>Discover the Neighborhood</h2>
              <p>
                2170 Lincoln is ideally located near public transportation, green spaces, cafes, and daily conveniences.
                Whether you’re commuting or relaxing, everything is just around the corner.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="2170 Lincoln Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.9118091031046!2d-73.58670585513063!3d45.49172065292192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6cd3a0f723%3A0xee5439f76e8ba810!2sImmeuble%202170%20Lincoln!5e0!3m2!1sen!2sca!4v1750963597382!5m2!1sen!2sca"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>



        {/* Testimonials */}
        <section
          ref={testimonialsRef1}
          className="testimonials-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="600"
        >
          <h2 className="testimonials-title">What Our Residents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Living at 2170 Lincoln has been wonderful. The staff is friendly and the amenities are top notch.
              </p>
              <p className="testimonial-author">— Sarah L.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                I love the location and modern feel of my apartment. Highly recommended!
              </p>
              <p className="testimonial-author">— James P.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                The location is unbeatable, and the apartment has a sleek, modern vibe. I couldn’t be happier living here!
              </p>
              <p className="testimonial-author">— Adrianna P.</p>
            </div>
          </div>
        </section>
      </main>

      
      {/* Additional Info */}
      {/*
      <section
          ref={additionalInfoRef}
          className="additional-info-section"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
        <h2 className="additional-info-title">Additional Information</h2>
        <div className="policies-faq-container">
          <div className="policies">
            <h3>Policies</h3>
            <ul>
              <li>Pet policy: Cats and small dogs allowed</li>
              <li>Parking: Reserved spots available for $75/month</li>
              <li>Security deposit: One month’s rent</li>
            </ul>
          </div>
          <div className="faq">
            <h3>Frequently Asked Questions</h3>
            <dl>
              <dt>Is the building pet-friendly?</dt>
              <dd>Yes, cats and small dogs are welcome.</dd>
              <dt>What utilities are included?</dt>
              <dd>Water and garbage are included; tenants pay electricity and internet.</dd>
              <dt>How do I schedule a tour?</dt>
              <dd>Contact the leasing agent via the button above or email us directly.</dd>
            </dl>
          </div>
        </div>
      </section>
      */}





      {/* Modal for Apply Now */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '70vw',
              height: '85vh', // tall modal
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              padding: '1rem 2rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button
            onClick={closeModal}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.8rem',
              cursor: 'pointer',
              color: '#555',
              fontWeight: 'bold',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
            <h2 id="modal-title" style={{ marginBottom: '1rem' }}>Book A Tour</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeA9sIxQnhvUlgwuHtZOLB4oNFJ7JxlOmvkbz2Rs2V8KV9JvA/viewform?embedded=true"
              width="100%"
              height="100%"  // fill the modal content height
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Book A Tour Form"
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                flexGrow: 1, // make iframe grow to fill available space
              }}
            />
          </div>
        </div>
      )}

      </div>

      {/* Footer */}
      <footer className="footer lightgray-bg">
        <p>© 2025 2170 Lincoln. All rights reserved.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;

